export const registry = {
    progressbar: () => import ("@/demos/progressbar.demo"),
    trafficlights: () => import("@/demos/trafficLights.demo"),
    connectedDropdown: () => import("@/demos/connectedDropdown.demo"),
    stepper: () => import("@/demos/stepper.demo")

} as const;

export type Registry = typeof registry;
export type slug = keyof Registry;

// Add a line here per demo, or generate this file automatically (shown later).

// To opt for a automatic registry code without manual input look in read-source.ts file
