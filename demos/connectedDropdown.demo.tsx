import { DemoMeta } from "./demoMetaInterface";

export const meta: DemoMeta = {
  slug: "connected-dropdown",
  title: "Connected Dropdown",
  description:
    "Options in the next dropdown is dependent on the options selected in the first dropdown",
  files: ["demos/connectedDropdown.demo.tsx"],
  gradient: "bg-gradient-to-r from-red-600 via-blue-700 ",
};

export default function Demo() {
  return <div>Ok</div>;
}
