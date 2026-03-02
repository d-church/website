"use client";

import { useCallback, useEffect } from "react";

import "./obs.css";
import HostNameBar from "./HostNameBar";
import { useOBSStream } from "./useOBSStream";

export default function OBSOverlayPage() {
  const { state } = useOBSStream();

  useEffect(() => {
    document.body.style.backgroundColor = "transparent";
    document.documentElement.style.backgroundColor = "transparent";
    return () => {
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  const handleBarComplete = useCallback(() => {
    fetch("/api/obs/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "HIDE_HOST_NAME", data: {} }),
    }).catch(() => {});
  }, []);

  if (!state) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-transparent">
        <span className="text-white/50">Підключення…</span>
      </div>
    );
  }

  const isShowing = state.isShowing;
  const text1 = state.text1 ?? "";
  const text2 = state.text2 ?? "";
  const settings = state.settings;

  return (
    <div
      className="min-h-screen w-full bg-transparent"
      style={{ background: "transparent" }}
    >
      {isShowing && (text1 || text2) && settings && (
        <HostNameBar
          text1={text1}
          text2={text2}
          settings={settings}
          onComplete={handleBarComplete}
        />
      )}
    </div>
  );
}
