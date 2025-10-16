import { DemoMeta } from "./demoMetaInterface";

export const meta: DemoMeta = {
  slug: "stepper",
  title: "Stepper",
  description:
    "Stepper component which fills/unfills between nodes on clicking next/prev",
  files: ["demos/stepper.demo.tsx"],
  gradient: "bg-gradient-to-r from-emerald-600 via-pink-700 ",
};

export default function Demo() {
  return <div>Stepper</div>;
}
