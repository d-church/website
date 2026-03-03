"use client";

import { useState, useEffect, useRef } from "react";
import type { OBSSettings } from "../_obs/store";

type PresetSlot = {
  text1: string;
  text2: string;
  settings: OBSSettings;
} | null;

const PRESETS_STORAGE_KEY = "obs-helper-presets";
const PRESET_COUNT = 4;

const BADGE_TEMPLATES: Record<string, Partial<OBSSettings>> = {
  purple: {
    badgeTemplate: "purple",
    backgroundColor: "#7B2FBE",
    text1Color: "#ffffff",
    text2Color: "#e0c8ff",
    text1Font: "'Montserrat', sans-serif",
    text2Font: "'Montserrat', sans-serif",
    text1Size: "26px",
    text2Size: "12px",
    text1LetterSpacing: "2px",
    text2LetterSpacing: "0.3px",
    text1TextTransform: "uppercase",
    textGap: "4px",
    textPaddingLeft: "24px",
    textPaddingRight: "24px",
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "auto",
  },
  dark: {
    badgeTemplate: "dark",
    backgroundColor: "rgba(20, 20, 20, 0.85)",
    text1Color: "#ffffff",
    text2Color: "#cccccc",
    text1Font: "'Montserrat', sans-serif",
    text2Font: "'Montserrat', sans-serif",
    text1Size: "26px",
    text2Size: "12px",
    text1LetterSpacing: "2px",
    text2LetterSpacing: "0.3px",
    text1TextTransform: "uppercase",
    textGap: "4px",
    textPaddingLeft: "24px",
    textPaddingRight: "24px",
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "auto",
  },
  teal: {
    badgeTemplate: "teal",
    backgroundColor: "#1A5C7A",
    text1Color: "#ffffff",
    text2Color: "#a8dce8",
    text1Font: "'Montserrat', sans-serif",
    text2Font: "'Montserrat', sans-serif",
    text1Size: "26px",
    text2Size: "12px",
    text1LetterSpacing: "2px",
    text2LetterSpacing: "0.3px",
    text1TextTransform: "uppercase",
    textGap: "4px",
    textPaddingLeft: "24px",
    textPaddingRight: "24px",
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "auto",
  },
};

const defaultLocal: Partial<OBSSettings> = {
  backgroundColor: "#000000",
  text1Color: "#FFFFFF",
  text2Color: "#CCCCCC",
  side: "left",
  width: "auto",
  height: "auto",
  verticalPosition: "bottom",
  topOffset: "32px",
  bottomOffset: "32px",
  text1Font: "'Namu', 'Manrope', sans-serif",
  text2Font: "'Namu', 'Manrope', sans-serif",
  text1Size: "24px",
  text2Size: "20px",
  textPaddingLeft: "0px",
  textPaddingRight: "0px",
  textGap: "4px",
  starPosition: "none",
  starColor: "#731cfe",
  badgeTemplate: "custom",
  badgeScale: 100,
  text1LetterSpacing: "",
  text2LetterSpacing: "",
  text1TextTransform: "",
  paddingTop: "",
  paddingBottom: "",
};

type ControlPanelProps = {
  settings: OBSSettings | null;
  onSettingsChange: (s: OBSSettings) => void;
  inputText1: string;
  setInputText1: (v: string) => void;
  inputText2: string;
  setInputText2: (v: string) => void;
  onShowName: (finalSettings: OBSSettings) => void;
  isShowing: boolean;
  onPreview: (previewSettings: OBSSettings) => void;
  onStopSession: () => void;
  sessionStopping: boolean;
};

function loadPresets(): PresetSlot[] {
  if (typeof localStorage === "undefined") return Array(PRESET_COUNT).fill(null);
  try {
    const raw = localStorage.getItem(PRESETS_STORAGE_KEY);
    if (!raw) return Array(PRESET_COUNT).fill(null);
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return Array(PRESET_COUNT).fill(null);
    const result: PresetSlot[] = Array(PRESET_COUNT).fill(null);
    for (let i = 0; i < PRESET_COUNT; i++) {
      result[i] = parsed[i] ?? null;
    }
    return result;
  } catch {
    return Array(PRESET_COUNT).fill(null);
  }
}

function savePresetsToStorage(presets: PresetSlot[]) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(PRESETS_STORAGE_KEY, JSON.stringify(presets));
  }
}

export default function ControlPanel({
  settings,
  onSettingsChange,
  inputText1,
  setInputText1,
  inputText2,
  setInputText2,
  onShowName,
  isShowing,
  onPreview,
  onStopSession,
  sessionStopping,
}: ControlPanelProps) {
  const [localSettings, setLocalSettings] = useState<Partial<OBSSettings>>(defaultLocal);
  const [tempWidth, setTempWidth] = useState("auto");
  const [tempHeight, setTempHeight] = useState("auto");
  const [tempTopOffset, setTempTopOffset] = useState("32px");
  const [tempBottomOffset, setTempBottomOffset] = useState("32px");
  const [extendedOpen, setExtendedOpen] = useState(false);
  const [presets, setPresets] = useState<PresetSlot[]>(() => Array(PRESET_COUNT).fill(null));
  const isInitialMount = useRef(true);

  useEffect(() => {
    setPresets(loadPresets());
  }, []);

  const updateLocal = (field: keyof OBSSettings, value: string | number) => {
    setLocalSettings((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (!settings || !isInitialMount.current) return;
    isInitialMount.current = false;
    setLocalSettings({ ...defaultLocal, ...settings });
    setTempWidth(settings.width || "auto");
    setTempHeight(settings.height || "auto");
    setTempTopOffset(settings.topOffset || "32px");
    setTempBottomOffset(settings.bottomOffset || "32px");
  }, [settings]);

  const applyTemplate = (id: string) => {
    const t = BADGE_TEMPLATES[id];
    if (t) setLocalSettings((prev) => ({ ...prev, ...t }));
  };

  const finalFromTemp = (): OBSSettings =>
    ({ ...defaultLocal, ...localSettings, width: tempWidth, height: tempHeight, topOffset: tempTopOffset, bottomOffset: tempBottomOffset } as OBSSettings);

  const handlePreview = () => onPreview(finalFromTemp());
  const handleApplyAndShow = async () => {
    const final = finalFromTemp();
    if (typeof localStorage !== "undefined") localStorage.setItem("obs-helper-settings", JSON.stringify(final));
    try {
      await fetch("/api/obs/settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(final) });
    } catch (e) {
      console.warn("OBS settings save failed:", e);
    }
    onSettingsChange(final);
    onShowName(final);
  };
  const handleClear = () => {
    setInputText1("");
    setInputText2("");
    setTempWidth("auto");
    setTempHeight("auto");
    setTempTopOffset("32px");
    setTempBottomOffset("32px");
    setLocalSettings({ ...defaultLocal });
  };

  const handleSaveToSlot = (index: number) => {
    const final = finalFromTemp();
    const slot: PresetSlot = { text1: inputText1, text2: inputText2, settings: final };
    const next = presets.map((p, i) => (i === index ? slot : p));
    setPresets(next);
    savePresetsToStorage(next);
  };

  const handleClearSlot = (index: number) => {
    const next = presets.map((p, i) => (i === index ? null : p));
    setPresets(next);
    savePresetsToStorage(next);
  };

  const handleClearAllPresets = () => {
    const next = Array(PRESET_COUNT).fill(null) as PresetSlot[];
    setPresets(next);
    savePresetsToStorage(next);
  };

  const handleShowPreset = async (preset: NonNullable<PresetSlot>) => {
    if (isShowing) {
      await fetch("/api/obs/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "HIDE_HOST_NAME", data: {} }),
      }).catch(() => {});
      await new Promise((r) => setTimeout(r, 120));
    }
    setInputText1(preset.text1);
    setInputText2(preset.text2);
    setLocalSettings({ ...defaultLocal, ...preset.settings });
    setTempWidth(preset.settings.width || "auto");
    setTempHeight(preset.settings.height || "auto");
    setTempTopOffset(preset.settings.topOffset || "32px");
    setTempBottomOffset(preset.settings.bottomOffset || "32px");
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("obs-helper-settings", JSON.stringify(preset.settings));
    }
    try {
      await fetch("/api/obs/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(preset.settings),
      });
    } catch (e) {
      console.warn("OBS settings save failed:", e);
    }
    onSettingsChange(preset.settings);
    fetch("/api/obs/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "SHOW_HOST_NAME",
        data: { text1: preset.text1, text2: preset.text2, settings: preset.settings },
      }),
    }).catch(() => {});
  };

  const s = localSettings;
  const scale = s?.badgeScale ?? 100;

  const badgeTemplate = s?.badgeTemplate ?? "custom";
  const isTemplateStyle = badgeTemplate === "purple" || badgeTemplate === "dark" || badgeTemplate === "teal";
  const padT = s?.paddingTop || (isTemplateStyle ? "10px" : "16px");
  const padB = s?.paddingBottom || (isTemplateStyle ? "10px" : "16px");
  const padL = s?.textPaddingLeft || (isTemplateStyle ? "24px" : "32px");
  const padR = s?.textPaddingRight || (isTemplateStyle ? "24px" : "32px");
  const textGap = s?.textGap || "4px";
  const side = s?.side || "left";
  const hasStar = (s?.starPosition || "none") !== "none";

  return (
    <div className="fixed inset-0 z-[1001] overflow-y-auto bg-[#0c0c0c] text-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-white">OBS Helper</h1>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-white/50">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Сесія активна
            </p>
          </div>
          <button
            type="button"
            onClick={onStopSession}
            disabled={sessionStopping}
            className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/50 transition hover:border-white/30 hover:text-white/80 disabled:opacity-40"
          >
            {sessionStopping ? "…" : "Завершити"}
          </button>
        </div>

        <section className="mt-8">
          <h2 className="text-xs font-medium uppercase tracking-wider text-white/40">Текст</h2>
          <div className="mt-3 space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText1}
                onChange={(e) => setInputText1(e.target.value)}
                placeholder="Рядок 1"
                className="flex-1 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#731cfe] focus:outline-none focus:ring-1 focus:ring-[#731cfe]"
              />
              <input
                type="color"
                value={s?.text1Color || "#FFFFFF"}
                onChange={(e) => updateLocal("text1Color", e.target.value)}
                className="h-9 w-9 shrink-0 cursor-pointer rounded border border-white/20 bg-transparent"
                title="Колір рядка 1"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText2}
                onChange={(e) => setInputText2(e.target.value)}
                placeholder="Рядок 2"
                className="flex-1 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#731cfe] focus:outline-none focus:ring-1 focus:ring-[#731cfe]"
              />
              <input
                type="color"
                value={s?.text2Color || "#CCCCCC"}
                onChange={(e) => updateLocal("text2Color", e.target.value)}
                className="h-9 w-9 shrink-0 cursor-pointer rounded border border-white/20 bg-transparent"
                title="Колір рядка 2"
              />
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-medium uppercase tracking-wider text-white/40">Плашка</h2>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={s?.backgroundColor || "#000000"}
                onChange={(e) => updateLocal("backgroundColor", e.target.value)}
                className="h-9 w-9 cursor-pointer rounded border border-white/20 bg-transparent"
                title="Колір фону"
              />
              <span className="text-xs text-white/50">Фон</span>
            </div>
            <span className="text-white/20">·</span>
            <div className="flex gap-1.5">
              {(["purple", "dark", "teal"] as const).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => applyTemplate(id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    s?.badgeTemplate === id ? "ring-2 ring-white ring-offset-2 ring-offset-[#0c0c0c]" : "opacity-80 hover:opacity-100"
                  }`}
                  style={{
                    background: id === "purple" ? "#7B2FBE" : id === "dark" ? "rgba(20,20,20,0.95)" : "#1A5C7A",
                    color: "#fff",
                  }}
                >
                  {id === "purple" ? "1" : id === "dark" ? "2" : "3"}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-medium uppercase tracking-wider text-white/40">Розташування</h2>
          <div className="mt-3 flex flex-wrap items-center gap-6">
            <div className="flex rounded-md border border-white/20 bg-white/5 p-0.5">
              <button
                type="button"
                onClick={() => updateLocal("side", "left")}
                className={`rounded px-3 py-1.5 text-sm ${s?.side === "left" ? "bg-[#731cfe] text-white" : "text-white/70 hover:text-white"}`}
              >
                Зліва
              </button>
              <button
                type="button"
                onClick={() => updateLocal("side", "right")}
                className={`rounded px-3 py-1.5 text-sm ${s?.side === "right" ? "bg-[#731cfe] text-white" : "text-white/70 hover:text-white"}`}
              >
                Справа
              </button>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs text-white/50">Масштаб</label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={100}
                  max={200}
                  step={10}
                  value={scale}
                  onChange={(e) => updateLocal("badgeScale", Number(e.target.value))}
                  className="h-1.5 w-24 accent-[#731cfe]"
                />
                <span className="w-8 text-right text-sm tabular-nums text-white/80">{scale}%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-medium uppercase tracking-wider text-white/40">Зірка</h2>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <div className="flex rounded-md border border-white/20 bg-white/5 p-0.5">
              <button
                type="button"
                onClick={() => updateLocal("starPosition", "none")}
                className={`rounded px-3 py-1.5 text-sm ${s?.starPosition === "none" ? "bg-[#731cfe] text-white" : "text-white/70 hover:text-white"}`}
              >
                Ні
              </button>
              <button
                type="button"
                onClick={() => updateLocal("starPosition", "corner")}
                className={`rounded px-3 py-1.5 text-sm ${s?.starPosition !== "none" ? "bg-[#731cfe] text-white" : "text-white/70 hover:text-white"}`}
              >
                Так
              </button>
            </div>
            {s?.starPosition !== "none" && (
              <input
                type="color"
                value={s?.starColor || "#731cfe"}
                onChange={(e) => updateLocal("starColor", e.target.value)}
                className="h-9 w-9 cursor-pointer rounded border border-white/20 bg-transparent"
                title="Колір зірки"
              />
            )}
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-medium uppercase tracking-wider text-white/40">Пресети</h2>
            <button
              type="button"
              onClick={handleClearAllPresets}
              className="text-[11px] text-white/25 hover:text-white/50 transition"
            >
              Очистити всі
            </button>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {presets.map((preset, i) => (
              <div
                key={i}
                className="relative rounded-lg border border-white/10 bg-white/[0.04] p-3 min-h-[88px] flex flex-col"
              >
                <span className="absolute left-2.5 top-2 text-[10px] font-medium text-white/20 select-none">
                  {i + 1}
                </span>
                {preset ? (
                  <>
                    <div className="mt-3 mb-2 flex-1 min-w-0">
                      <p className="truncate text-sm font-medium text-white leading-tight">
                        {preset.text1 || "—"}
                      </p>
                      {preset.text2 && (
                        <p className="truncate text-xs text-white/45 mt-0.5">{preset.text2}</p>
                      )}
                    </div>
                    <div className="flex gap-1.5 mt-1">
                      <button
                        type="button"
                        onClick={() => handleShowPreset(preset)}
                        className="flex-1 rounded bg-[#731cfe] px-2 py-1.5 text-xs font-medium text-white hover:bg-[#7c2dff] transition truncate"
                      >
                        ▶ Показати
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveToSlot(i)}
                        title="Перезаписати поточними"
                        className="rounded border border-white/15 bg-white/5 px-2 py-1.5 text-xs text-white/50 hover:text-white/80 hover:border-white/30 transition"
                      >
                        ↺
                      </button>
                      <button
                        type="button"
                        onClick={() => handleClearSlot(i)}
                        title="Очистити слот"
                        className="rounded border border-white/15 bg-white/5 px-2 py-1.5 text-xs text-white/35 hover:text-white/65 hover:border-white/30 transition"
                      >
                        ×
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-1 items-center justify-center">
                    <button
                      type="button"
                      onClick={() => handleSaveToSlot(i)}
                      className="rounded-md border border-dashed border-white/20 px-3 py-1.5 text-xs text-white/40 hover:border-white/40 hover:text-white/70 transition"
                    >
                      + Зберегти сюди
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <button
            type="button"
            onClick={() => setExtendedOpen((v) => !v)}
            className="text-xs font-medium text-white/50 hover:text-white/70"
          >
            {extendedOpen ? "▲ Згорнути" : "▼ Додатково (ширина, відступи)"}
          </button>
          {extendedOpen && (
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div>
                <label className="mb-1 block text-[11px] text-white/40">Ширина</label>
                <input
                  type="text"
                  value={tempWidth}
                  onChange={(e) => setTempWidth(e.target.value)}
                  placeholder="auto"
                  className="w-full rounded border border-white/20 bg-white/5 px-2 py-1.5 text-sm text-white placeholder:text-white/30 focus:border-[#731cfe] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] text-white/40">Висота</label>
                <input
                  type="text"
                  value={tempHeight}
                  onChange={(e) => setTempHeight(e.target.value)}
                  placeholder="auto"
                  className="w-full rounded border border-white/20 bg-white/5 px-2 py-1.5 text-sm text-white placeholder:text-white/30 focus:border-[#731cfe] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] text-white/40">Відступ зверху</label>
                <input
                  type="text"
                  value={tempTopOffset}
                  onChange={(e) => setTempTopOffset(e.target.value)}
                  placeholder="32px"
                  className="w-full rounded border border-white/20 bg-white/5 px-2 py-1.5 text-sm text-white placeholder:text-white/30 focus:border-[#731cfe] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] text-white/40">Відступ знизу</label>
                <input
                  type="text"
                  value={tempBottomOffset}
                  onChange={(e) => setTempBottomOffset(e.target.value)}
                  placeholder="32px"
                  className="w-full rounded border border-white/20 bg-white/5 px-2 py-1.5 text-sm text-white placeholder:text-white/30 focus:border-[#731cfe] focus:outline-none"
                />
              </div>
            </div>
          )}
        </section>

        <section className="mt-8">
          <p className="mb-2 text-xs text-white/40">Попередній перегляд</p>
          <div
            className={`flex w-full ${side === "right" ? "justify-end" : "justify-start"}`}
            style={{
              transformOrigin: side === "left" ? "left center" : "right center",
            }}
          >
            <div
              style={{
                transform: `scale(${scale / 100})`,
                transformOrigin: side === "left" ? "left center" : "right center",
              }}
            >
              <div
                className="relative inline-flex flex-col"
                style={{
                  paddingTop: padT,
                  paddingBottom: padB,
                  paddingLeft: padL,
                  paddingRight: padR,
                  borderRadius: isTemplateStyle ? 0 : 8,
                  boxShadow: isTemplateStyle ? "none" : "0 4px 20px rgba(0, 0, 0, 0.5)",
                  background: s?.backgroundColor || "#000",
                  backdropFilter: isTemplateStyle ? "none" : "blur(10px)",
                  WebkitBackdropFilter: isTemplateStyle ? "none" : "blur(10px)",
                  border: isTemplateStyle ? "none" : "2px solid rgba(255, 255, 255, 0.3)",
                  minWidth: isTemplateStyle ? undefined : 120,
                }}
              >
                {hasStar && (
                  <div
                    className="absolute z-10"
                    style={{
                      width: 26,
                      height: 26,
                      ...(side === "right"
                        ? { left: 0, top: 0, transform: "translate(-50%, -50%)" }
                        : { right: 0, top: 0, transform: "translate(50%, -50%)" }),
                    }}
                  >
                    <svg
                      viewBox="0 0 50 50"
                      width={26}
                      height={26}
                      style={{ transformOrigin: "50% 50%", display: "block", animation: "starRotate 3s linear infinite" }}
                    >
                      <defs>
                        <filter id="obs-preview-starShadow" x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx={0} dy={0} stdDeviation={1.5} floodColor="rgba(0,0,0,0.3)" />
                        </filter>
                      </defs>
                      <circle cx={25} cy={25} r={25} fill="white" filter="url(#obs-preview-starShadow)" />
                      <g stroke={s?.starColor || "#731cfe"} strokeWidth={7} strokeLinecap="butt">
                        <line x1={25} y1={25} x2={25} y2={7} />
                        <line x1={25} y1={25} x2={42.1} y2={19.42} />
                        <line x1={25} y1={25} x2={35.44} y2={39.58} />
                        <line x1={25} y1={25} x2={14.56} y2={39.58} />
                        <line x1={25} y1={25} x2={7.9} y2={19.42} />
                      </g>
                    </svg>
                  </div>
                )}
                <div
                  style={{
                    color: s?.text1Color || "#fff",
                    fontFamily: s?.text1Font || "sans-serif",
                    fontSize: s?.text1Size || "24px",
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: (s?.text1LetterSpacing as string) || undefined,
                    textTransform: (s?.text1TextTransform as React.CSSProperties["textTransform"]) || undefined,
                    textShadow: isTemplateStyle ? "none" : "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    margin: 0,
                    padding: `0 ${padR} 0 ${padL}`,
                    marginBottom: inputText2 ? textGap : 0,
                  }}
                >
                  {inputText1 || "Рядок 1"}
                </div>
                <div
                  style={{
                    color: s?.text2Color || "#ccc",
                    fontFamily: s?.text2Font || "sans-serif",
                    fontSize: s?.text2Size || "20px",
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: (s?.text2LetterSpacing as string) || undefined,
                    textShadow: isTemplateStyle ? "none" : "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    margin: 0,
                    padding: `0 ${padR} 0 ${padL}`,
                  }}
                >
                  {inputText2 || "Рядок 2"}
                </div>
              </div>
            </div>
          </div>
          {!inputText1 && !inputText2 && (
            <p className="mt-2 text-xs text-white/40">Введіть текст вище</p>
          )}
        </section>

        <section className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleApplyAndShow}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium text-white transition ${
              isShowing ? "bg-amber-600 hover:bg-amber-500" : "bg-[#731cfe] hover:bg-[#7c2dff]"
            }`}
          >
            {isShowing ? "Приховати плашку" : "Показати плашку"}
          </button>
          <button
            type="button"
            onClick={handlePreview}
            className="rounded-lg border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10"
          >
            Попередній перегляд
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-white/60 hover:text-white/80"
          >
            Очистити
          </button>
        </section>
      </div>
    </div>
  );
}
