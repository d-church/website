"use client";

import { useCallback, useEffect, useState } from "react";

import "./obs.css";
import ControlPanel from "./ControlPanel";
import HostNameBar from "./HostNameBar";
import type { OBSSettings } from "./store";
import { useOBSStream } from "./useOBSStream";

export default function OBSHelperPage() {
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [settings, setSettings] = useState<OBSSettings | null>(null);
  const [previewSettings, setPreviewSettings] = useState<OBSSettings | null>(null);
  const [sessionLoading, setSessionLoading] = useState(false);

  const { state: streamState } = useOBSStream();

  const sessionActive = streamState?.sessionActive ?? false;
  const isShowing = streamState?.isShowing ?? false;
  const text1 = streamState?.text1 ?? "";
  const text2 = streamState?.text2 ?? "";
  const overlaySettings = streamState?.settings ?? null;
  const displaySettings = previewSettings || settings || overlaySettings;

  useEffect(() => {
    if (streamState?.settings) {
      setSettings(streamState.settings);
    }
  }, [streamState?.settings]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = localStorage.getItem("obs-helper-settings");
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as OBSSettings;
        setSettings(parsed);
      } catch {}
    }
  }, []);

  useEffect(() => {
    fetch("/api/obs/settings")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.settings) setSettings(data.settings);
      })
      .catch(() => {});
  }, []);

  const handleSessionToggle = async () => {
    setSessionLoading(true);
    try {
      await fetch("/api/obs/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: sessionActive ? "stop" : "start" }),
      });
    } catch {}
    setSessionLoading(false);
  };

  const handleBarComplete = useCallback(() => {
    fetch("/api/obs/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "HIDE_HOST_NAME", data: {} }),
    }).catch(() => {});
  }, []);

  const handleShowName = useCallback(
    (finalSettings: OBSSettings) => {
      if (isShowing) {
        fetch("/api/obs/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "HIDE_HOST_NAME", data: {} }),
        }).catch(() => {});
        return;
      }
      const t1 = inputText1.trim();
      const t2 = inputText2.trim();
      if (!t1 && !t2) return;
      setSettings(finalSettings);
      fetch("/api/obs/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "SHOW_HOST_NAME",
          data: { text1: t1, text2: t2, settings: finalSettings },
        }),
      }).catch(() => {});
    },
    [isShowing, inputText1, inputText2]
  );

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <div
        className="relative mx-auto overflow-hidden bg-transparent"
        style={{ width: 1920, height: 1080, maxWidth: "100%", aspectRatio: "1920/1080" }}
      >
        {isShowing && (text1 || text2) && overlaySettings && (
          <HostNameBar
            text1={text1}
            text2={text2}
            settings={overlaySettings}
            onComplete={handleBarComplete}
          />
        )}

        {!sessionActive ? (
          <SessionGate onStart={handleSessionToggle} loading={sessionLoading} />
        ) : (
          <ControlPanel
            settings={displaySettings}
            onSettingsChange={setSettings}
            inputText1={inputText1}
            setInputText1={setInputText1}
            inputText2={inputText2}
            setInputText2={setInputText2}
            onShowName={handleShowName}
            isShowing={isShowing}
            onPreview={setPreviewSettings}
            onStopSession={handleSessionToggle}
            sessionStopping={sessionLoading}
          />
        )}
      </div>
    </div>
  );
}

function SessionGate({ onStart, loading }: { onStart: () => void; loading: boolean }) {
  return (
    <div className="fixed inset-0 z-[1001] flex flex-col items-center justify-center bg-[#0c0c0c]">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <span className="text-2xl">●</span>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-white">OBS Helper</h1>
          <p className="mt-1.5 text-sm text-white/40">Сесія не активна. Запусти щоб почати роботу.</p>
        </div>
        <button
          type="button"
          onClick={onStart}
          disabled={loading}
          className="rounded-lg bg-[#731cfe] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#7c2dff] disabled:opacity-50"
        >
          {loading ? "Запуск…" : "Розпочати сесію"}
        </button>
      </div>
    </div>
  );
}
