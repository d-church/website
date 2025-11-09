"use client";

import { useEffect, useState } from "react";

interface ClientSideOnlyRenderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ClientSideOnlyRender({
  children,
  fallback = null,
}: ClientSideOnlyRenderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

