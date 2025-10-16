import ProgressBarcomponent from "@/components/ProgressBar";
import { DemoMeta } from "./demoMetaInterface";

export const meta: DemoMeta = {
  slug: "progressbar",
  title: "Progress Bar",
  description: "A simple determinate Progress Bar",
  files: ["components/ProgressBar.tsx", "demos/progressbar.demo.tsx"],
  gradient: "bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700",
};

export default function Demo() {
  return (
    <div>
      <ProgressBarcomponent />
    </div>
  );
}
