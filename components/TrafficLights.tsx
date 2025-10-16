"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

export default function TrafficLightscomponent() {
  const lights = ["bg-red-600", "bg-orange-600", "bg-green-600"] as const;

  type LightColors = (typeof lights)[number];

  const [currentColor, setCurrentColor] = useState<LightColors | undefined>();
  let cuurentCount = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      const index = cuurentCount % lights.length;
      setCurrentColor(lights[index]);
      cuurentCount++;
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <p>Traffic Lights</p>

      <section>
        {lights.map((currentLight, index) => {
          const baseclass = "h-[50px] w-[50px] rounded-full shadow-md my-1";
          return (
            <div
              className={clsx(
                currentLight === currentColor ? currentColor : "bg-gray-500",
                baseclass
              )}
              key={index}
            ></div>
          );
        })}
      </section>
    </main>
  );
}
