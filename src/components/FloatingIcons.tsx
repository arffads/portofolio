"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMysql, SiPostgresql, SiMongodb, SiSequelize, SiPostman
} from "react-icons/si";
import { useEffect, useState } from "react";

const icons = [
  { Component: SiJavascript, name: "js" },
  { Component: SiTypescript, name: "ts" },
  { Component: SiReact, name: "react" },
  { Component: SiNodedotjs, name: "node" },
  { Component: SiHtml5, name: "html" },
  { Component: SiCss3, name: "css" },
  { Component: SiMysql, name: "mysql" },
  { Component: SiPostgresql, name: "pg" },
  { Component: SiMongodb, name: "mongo" },
  { Component: SiSequelize, name: "sqlz" },
  { Component: SiPostman, name: "postman" },
];



type IconPos = {
  top: number;
  left: number;
};

const getRandomPosition = (): IconPos => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
});

const FloatingIcons = () => {
  const [positions, setPositions] = useState<IconPos[]>(
    icons.map(() => getRandomPosition())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(icons.map(() => getRandomPosition()));
    }, 5000); // Pindah posisi tiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {icons.map(({ Component, name }, i) => (
        <div
          key={name}
          className="absolute text-white opacity-10 z-0 transition-all duration-5000 ease-in-out"
          style={{
            top: `${positions[i].top}%`,
            left: `${positions[i].left}%`,
            fontSize: `${32 + Math.random() * 32}px`,
          }}
        >
          <Component />
        </div>
      ))}
    </>
  );
};

export default FloatingIcons;
