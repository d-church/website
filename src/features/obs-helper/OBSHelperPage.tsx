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

  const { state: streamState } = useOBSStream();

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
          data: {
            text1: t1,
            text2: t2,
            settings: finalSettings,
          },
        }),
      }).catch(() => {});
    },
    [isShowing, inputText1, inputText2]
  );

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <div
        className="relative mx-auto overflow-hidden bg-transparent"
        style={{
          width: 1920,
          height: 1080,
          maxWidth: "100%",
          aspectRatio: "1920/1080",
        }}
      >
        {isShowing && (text1 || text2) && overlaySettings && (
          <HostNameBar
            text1={text1}
            text2={text2}
            settings={overlaySettings}
            onComplete={handleBarComplete}
          />
        )}

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
        />
      </div>
    </div>
  );
}
