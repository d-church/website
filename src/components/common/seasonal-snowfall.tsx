'use client';

import { useEffect, useState } from 'react';

export function SeasonalSnowfall() {
  const [shouldShow, setShouldShow] = useState(false);
  const [SnowfallComponent, setSnowfallComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    // December (12), January (1), February (2)
    if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2) {
      setShouldShow(true);

      import(/* webpackChunkName: "react-snowfall" */ 'react-snowfall').then((module) => {
        setSnowfallComponent(() => module.default);
      });
    }
  }, []);

  if (!shouldShow || !SnowfallComponent) {
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

