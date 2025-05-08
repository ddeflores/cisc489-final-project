// src/app/components/TrafficHeatmapClient.tsx
"use client";
import React, { useState, useEffect } from "react";
import TrafficHeatmap, { TrafficHeatmapProps } from "./TrafficHeatmap";

export default function TrafficHeatmapClient() {
  const [data, setData] = useState<TrafficHeatmapProps | null>(null);

  useEffect(() => {
    fetch("/density.json")
      .then((r) => r.json())
      .then((json) =>
        setData({
          xBins: json.x,
          tBins: json.t,
          density2D: json.rho,
        })
      )
      .catch((err) => console.error("fetch error", err));
  }, []);

  if (!data) return <div>Loading…</div>;
  return <TrafficHeatmap {...data} />;
}
