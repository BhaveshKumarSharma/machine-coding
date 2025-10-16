import TrafficLightscomponent from "@/components/TrafficLights";
import { DemoMeta } from "./demoMetaInterface";

export const meta: DemoMeta = {
  slug: "trafficlights",
  title: " Traffic Lights",
  description: "Component mimicing traffic lights",
  files: ["components/TrafficLights.tsx", "demos/trafficLights.demo.tsx"],
  gradient: "bg-gradient-to-tr from-green-600 via-zinc-800 ",
};

export default function Demo() {
  return (
    <div>
      <TrafficLightscomponent />
    </div>
  );
}
