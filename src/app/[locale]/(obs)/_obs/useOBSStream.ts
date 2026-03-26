"use client";

import { useState, useEffect, useRef } from "react";
import type { OBSState } from "./store";

export function useOBSStream() {
  const [state, setState] = useState<OBSState | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}/api/obs/stream`;
    const es = new EventSource(url);
    eventSourceRef.current = es;

    es.onmessage = (event) => {
      try {
        setState(JSON.parse(event.data) as OBSState);
      } catch (e) {
        console.warn("[useOBSStream] parse error:", e);
      }
    };

    return () => {
      es.close();
      eventSourceRef.current = null;
    };
  }, []);

  return { state };
}
