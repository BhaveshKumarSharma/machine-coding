import { DemoMeta } from "./demoMetaInterface";

export const meta: DemoMeta = {
  slug: "multi-step-form",
  title: "Multi Step form",
  description: "Multi step form",
  files: ["demos/multiStepForm.demo.tsx"],
  gradient: "bg-gradient-to-r from-green-600 via-blue-700 ",
};

export default function Demo() {
  return <div>Multi-Step Form</div>;
}
