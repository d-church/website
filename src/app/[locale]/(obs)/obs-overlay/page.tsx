"use client";

import { useCallback, useEffect } from "react";

import "../_obs/obs.css";
import HostNameBar from "../_obs/HostNameBar";
import { useOBSStream } from "../_obs/useOBSStream";

export default function OBSOverlayRoute() {
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

  const sessionActive = state?.sessionActive ?? false;
  const isShowing = state?.isShowing ?? false;
  const text1 = state?.text1 ?? "";
  const text2 = state?.text2 ?? "";
  const settings = state?.settings ?? null;

  return (
    <div className="min-h-screen w-full" style={{ background: "transparent" }}>
      {sessionActive && isShowing && (text1 || text2) && settings && (
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
