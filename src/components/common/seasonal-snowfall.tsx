'use client';

import { useEffect, useState } from 'react';
import type { SnowfallProps } from 'react-snowfall';

export function SeasonalSnowfall() {
  const currentMonth = new Date().getMonth() + 1;
  // December (12), January (1), February (2)
  const isWinter = currentMonth === 12 || currentMonth === 1 || currentMonth === 2;

  const [SnowfallComponent, setSnowfallComponent] = useState<React.ComponentType<SnowfallProps> | null>(null);

  useEffect(() => {
    if (isWinter) {
      import(/* webpackChunkName: "react-snowfall" */ 'react-snowfall').then((module) => {
        setSnowfallComponent(() => module.default);
      });
    }
  }, []);

  if (!isWinter || !SnowfallComponent) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <SnowfallComponent
        color="white"
        style={{ background: 'transparent' }}
        snowflakeCount={200}
      />
    </div>
  );
}

