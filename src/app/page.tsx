// src/app/page.tsx
import TrafficHeatmapClient from "./components/TrafficHeatmapClient";

export default function Page() {
  return (
    <main>
      <h1>Traffic Density PINN Visualization</h1>
      <TrafficHeatmapClient />
    </main>
  );
}
