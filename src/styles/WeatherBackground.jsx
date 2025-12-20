"use client";

import { useMemo, useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Santa from "../assets/santa.gif";

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const snowfallNear = keyframes`
  0% {
    transform: translateY(-10px) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(25vh) translateX(20px) rotate(90deg);
  }
  50% {
    transform: translateY(50vh) translateX(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(75vh) translateX(30px) rotate(270deg);
  }
  100% {
    transform: translateY(100vh) translateX(0) rotate(360deg);
  }
`;

const snowfallMid = keyframes`
  0% {
    transform: translateY(-10px) translateX(0) rotate(0deg);
  }
  30% {
    transform: translateY(30vh) translateX(-15px) rotate(120deg);
  }
  60% {
    transform: translateY(60vh) translateX(15px) rotate(240deg);
  }
  100% {
    transform: translateY(100vh) translateX(-5px) rotate(360deg);
  }
`;

const snowfallFar = keyframes`
  0% {
    transform: translateY(-10px) translateX(0) rotate(0deg);
  }
  50% {
    transform: translateY(50vh) translateX(10px) rotate(180deg);
  }
  100% {
    transform: translateY(100vh) translateX(-10px) rotate(360deg);
  }
`;

// O'zgartirilgan animatsiya: o'ngdan chapga uchish
const flyAcross = keyframes`
  0% {
    left: -50%; /* o'ng tomondan boshlanadi */
    transform: translateX(0) scaleX(-1); /* chap tomonga burilgan */
  }
  50% {
    left: 50%;
    transform: translateX(-50%) scaleX(-1); /* markazda */
  }
  55% {
    left: 50%;
    transform: translateX(-50%) scaleX(-1); /* qisqa to'xtash */
  }
  100% {
    left: 100%; /* chap tomondan chiqib ketadi */
    transform: translateX(0) scaleX(-1); /* chap tomonga burilgan */
  }
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
    z-index: 0;
    opacity: ${({ $dark }) => ($dark ? 0.8 : 0.4)};
    transition: opacity 0.5s ease;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const SnowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;
`;

const Snowflake = styled.div`
  position: absolute;
  color: ${({ $dark, $layer }) => {
    if ($dark) {
      return $layer === "near"
        ? "#E2E8F0"
        : $layer === "mid"
        ? "#CBD5E1"
        : "#94A3B8";
    }
    return $layer === "near"
      ? "#DBEAFE"
      : $layer === "mid"
      ? "#BFDBFE"
      : "#93C5FD";
  }};
  user-select: none;
  cursor: default;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  opacity: ${({ $opacity }) => $opacity};
  text-shadow: ${({ $dark, $layer }) =>
    $dark && $layer === "near" ? "0 0 3px rgba(226, 232, 240, 0.5)" : "none"};

  ${({ $layer }) => {
    if ($layer === "near") {
      return css`
        font-size: clamp(18px, 2vw, 24px);
        animation-name: ${css`
          ${snowfallNear}
        `};
        filter: blur(0px);
        z-index: 3;
      `;
    } else if ($layer === "mid") {
      return css`
        font-size: clamp(12px, 1.5vw, 16px);
        animation-name: ${snowfallMid};
        filter: blur(0.3px);
        z-index: 2;
      `;
    } else {
      return css`
        font-size: clamp(8px, 1vw, 12px);
        animation-name: ${snowfallFar};
        filter: blur(0.8px);
        z-index: 1;
      `;
    }
  }}

  animation-duration: ${({ $duration }) => $duration}s;
  animation-delay: ${({ $delay }) => $delay}s;
  left: ${({ $left }) => $left}%;
  top: -10px;
`;

const FlyingGif = styled.img`
  position: fixed;
  top: 80%;
  width: 250px;
  height: auto;

  z-index: 2;
  pointer-events: none;
  animation: ${flyAcross} 10s ease-in-out forwards;
  display: ${({ $show }) => ($show ? "block" : "none")};

  @media (max-width: 768px) {
    width: 170px;
  }
`;

export default function WeatherBackground({ children, dark = false }) {
  const [showFlyingGif, setShowFlyingGif] = useState(false);

  useEffect(() => {
    const triggerAnimation = () => {
      setShowFlyingGif(true);
      setTimeout(() => {
        setShowFlyingGif(false);
      }, 100000); // Animation duration is 100s
    };

    // Trigger immediately on mount
    triggerAnimation();

    // Then every 10 minutes (600000ms)
    const interval = setInterval(triggerAnimation, 600000);

    return () => clearInterval(interval);
  }, []);

  const snowflakes = useMemo(() => {
    const flakes = [];
    const snowflakeChars = ["❄", "❅", "❄", "❅"];
    const layers = dark
      ? [
          { name: "near", count: 15 },
          { name: "mid", count: 25 },
          { name: "far", count: 35 },
        ]
      : [
          { name: "near", count: 8 },
          { name: "mid", count: 15 },
          { name: "far", count: 22 },
        ];

    layers.forEach(({ name, count }) => {
      for (let i = 0; i < count; i++) {
        flakes.push({
          id: `${name}-${i}`,
          char: snowflakeChars[
            Math.floor(Math.random() * snowflakeChars.length)
          ],
          layer: name,
          left: Math.random() * 100,
          duration:
            name === "near"
              ? 8 + Math.random() * 4
              : name === "mid"
              ? 12 + Math.random() * 6
              : 15 + Math.random() * 8,
          delay: -Math.random() * 20,
          opacity:
            name === "near"
              ? 0.7 + Math.random() * 0.3
              : name === "mid"
              ? 0.5 + Math.random() * 0.3
              : 0.3 + Math.random() * 0.3,
        });
      }
    });

    return flakes;
  }, [dark]);

  return (
    <AppWrapper $dark={dark}>
      <SnowContainer>
        {snowflakes.map((flake) => (
          <Snowflake
            key={flake.id}
            $dark={dark}
            $layer={flake.layer}
            $left={flake.left}
            $duration={flake.duration}
            $delay={flake.delay}
            $opacity={flake.opacity}
          >
            {flake.char}
          </Snowflake>
        ))}
      </SnowContainer>

      <FlyingGif
        src={Santa}
        alt="Flying animation"
        $show={showFlyingGif}
        key={showFlyingGif ? "show" : "hide"} // Force re-animation
      />

      {children}
    </AppWrapper>
  );
}
