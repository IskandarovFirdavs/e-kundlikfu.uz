"use client";

import { useMemo, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: relative;
  overflow-x: hidden;

  background: ${({ $dark, theme }) =>
    $dark ? theme.bg || "#0F172A" : theme.bg || "#ffffff"};

  color: ${({ $dark, theme }) =>
    $dark ? theme.text || "#F8FAFC" : theme.text || "#0F172A"};

  transition: background 0.5s ease, color 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ $dark }) =>
          $dark ? "rgba(66, 153, 225, 0.15)" : "rgba(66, 153, 225, 0.05)"}
        50%,
      transparent 100%
    );
    background-size: 400% 400%;
    animation: ${gradient} 8s ease infinite;
    z-index: -1;
    opacity: ${({ $dark }) => ($dark ? 0.8 : 0.4)};
    transition: opacity 0.5s ease;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const SnowfallContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const snowfall = keyframes`
  0% {
    transform: translateY(-10vh) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(25vh) translateX(10px) rotate(90deg);
  }
  50% {
    transform: translateY(50vh) translateX(-5px) rotate(180deg);
  }
  75% {
    transform: translateY(75vh) translateX(15px) rotate(270deg);
  }
  100% {
    transform: translateY(110vh) translateX(0) rotate(360deg);
  }
`;

const Snowflake = styled.div`
  position: absolute;
  color: ${({ $color }) => $color};
  opacity: ${({ $opacity }) => $opacity};
  font-size: ${({ $size }) => $size}px;
  animation: ${snowfall} ${({ $duration }) => $duration}s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  left: ${({ $left }) => $left}%;
  filter: blur(${({ $blur }) => $blur}px);
  text-shadow: 0 0 ${({ $glow }) => $glow}px ${({ $color }) => $color};
  user-select: none;
`;

const snowflakeShapes = ["❄", "❅", "❆"];

function RealisticSnowfall({ dark = false }) {
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const snowflakes = useMemo(() => {
    const count = dark ? 100 : 60;
    const flakes = [];

    for (let i = 0; i < count; i++) {
      // Create layers of depth
      const depth = Math.random();
      const size =
        depth < 0.3
          ? 8 + Math.random() * 8
          : // Far (small)
          depth < 0.6
          ? 12 + Math.random() * 12
          : // Mid
            16 + Math.random() * 16; // Near (large)

      const opacity = dark
        ? 0.3 + depth * 0.7 // 0.3 to 1.0 for dark mode
        : 0.2 + depth * 0.5; // 0.2 to 0.7 for light mode

      const blur = depth < 0.3 ? 1.5 : depth < 0.6 ? 0.8 : 0.2;
      const glow = dark ? (depth > 0.6 ? 2 : 0) : 0;

      // More variation in duration for realistic falling
      const duration = dark
        ? 8 + Math.random() * 12 + (1 - depth) * 10 // 8-30s, slower for distant
        : 10 + Math.random() * 15 + (1 - depth) * 10; // 10-35s

      flakes.push({
        id: i,
        shape:
          snowflakeShapes[Math.floor(Math.random() * snowflakeShapes.length)],
        left: Math.random() * 100,
        size,
        duration,
        delay: -Math.random() * 20, // Start at different positions
        opacity,
        blur,
        glow,
        color: dark ? "#E2E8F0" : "#90CDF4",
      });
    }

    return flakes;
  }, [dark, windowSize.width]);

  return (
    <SnowfallContainer>
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          $left={flake.left}
          $size={flake.size}
          $duration={flake.duration}
          $delay={flake.delay}
          $opacity={flake.opacity}
          $blur={flake.blur}
          $glow={flake.glow}
          $color={flake.color}
        >
          {flake.shape}
        </Snowflake>
      ))}
    </SnowfallContainer>
  );
}

export default function WeatherBackground({ children, dark = false }) {
  return (
    <AppWrapper $dark={dark}>
      <RealisticSnowfall dark={dark} />

      {children}
    </AppWrapper>
  );
}
