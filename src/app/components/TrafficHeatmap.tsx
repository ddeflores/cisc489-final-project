// src/app/components/TrafficHeatmap.tsx
"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

export interface TrafficHeatmapProps {
  // spatial bin centers, length M
  xBins: number[];
  // temporal bin centers, length N
  tBins: number[];
  // density matrix of shape [N][M]
  density2D: number[][];
}

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const TrafficHeatmap: React.FC<TrafficHeatmapProps> = ({
  xBins,
  tBins,
  density2D,
}) => {
  console.log("TrafficHeatmap props:", { xBins, tBins, density2D });

  useEffect(() => {
    console.log(
      `TrafficHeatmap mounted – xBins=${xBins.length}, tBins=${tBins.length}`
    );
  }, [xBins, tBins]);

  return (
    <Plot
      data={[
        {
          z: density2D,
          x: xBins,
          y: tBins,
          type: "heatmap",
          colorscale: "Viridis",
          colorbar: { title: { text: "ρ (veh/m)" } },
        },
      ]}
      layout={{
        title: { text: "Traffic Density Heatmap" },
        xaxis: { title: { text: "Position x (m)" } },
        yaxis: { title: { text: "Time t (s)" } },
        autosize: true,
        margin: { t: 40, r: 20, b: 40, l: 50 },
      }}
      style={{ width: "100%", height: "100%" }}
      useResizeHandler={true}
      config={{ responsive: true }}
    />
  );
};

export default TrafficHeatmap;
