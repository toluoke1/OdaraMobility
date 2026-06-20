"use client";

import { useEffect, useState } from "react";

type Metric = {
  label: string;
  suffix?: string;
  value: number;
};

const metrics: Metric[] = [
  { label: "Projects delivered", value: 42 },
  { label: "Clients served", value: 7 },
];

function useCountUp(target: number, durationMs: number) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // A short eased count-up gives the hero stats movement without needing a chart.
    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [durationMs, target]);

  return value;
}

function MetricCard({ label, suffix, value }: Metric) {
  const count = useCountUp(value, 1400);

  return (
    // Each metric card is intentionally simple so the animated number stays the focal point.
    <div className="rounded-[1.4rem] border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <p className="font-serif text-[4.2rem] leading-none text-white sm:text-[5rem]">
        {count}
        {suffix ?? ""}
      </p>
      <p className="mt-3 text-base leading-7 text-white/78">{label}</p>
    </div>
  );
}

export function ProjectsMetrics() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </div>
  );
}
