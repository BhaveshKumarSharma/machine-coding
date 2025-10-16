"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 50); // speed of filling
    }, 2000); // 2-second delay before filling

    return () => {
      clearTimeout(startDelay);
    };
  }, []);

  return (
    <div style={{ margin: "10px 0" }}>
      <div
        style={{
          height: "20px",
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#4caf50",
            transition: "width 0.05s linear",
          }}
        ></div>
      </div>
    </div>
  );
};

export default function ProgressBarcomponent() {
  const [bars, setBars] = useState<number[]>([]);

  const addProgressBar = () => {
    setBars((prev) => [...prev, Date.now()]); // unique key
  };

  return (
    <div >
      <Button  className="bg-gradient-to-br from-blue-500  rounded-full to-purple-500" onClick={addProgressBar}>Add Progress Bar</Button>
      {bars.map((id) => (
        <ProgressBar key={id} />
      ))}
    </div>
    
  );
}
