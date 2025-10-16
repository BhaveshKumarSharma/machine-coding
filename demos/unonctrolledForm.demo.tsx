import { DemoMeta } from "./demoMetaInterface";

export const meta: DemoMeta = {
  slug: "uncontrolled-form",
  title: "uncontrolled Form",
  description:
    "Options in the next dropdown is dependent on the options selected in the first dropdown",
  files: ["demos/uncontrolledComponent.demo.tsx"],
  gradient: "bg-gradient-to-r from-red-600 via-blue-700 ",
};

export default function Demo() {
  return <div>Uncontrolled component</div>;
}
