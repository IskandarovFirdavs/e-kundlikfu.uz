import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import logo from "../../public/logog.png";
import icon from "../../public/seticon.png";
import { RxExit } from "react-icons/rx";
import api from "../services/api";

// === STYLES ===
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  height: 87px;
  background: #007bff;
  @media (max-width: 768px) {
    padding: 0px 8px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  img {
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 120px;
    object-fit: contain;
    height: 60%;
  }
`;

const Toggle = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// oxirgi 5 sekundda tebranish animatsiya
const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-2px); }
  80% { transform: translateX(2px); }
  100% { transform: translateX(0); }
`;

const HoldButton = styled.div`
  position: relative;
  width: 130px;
  height: 38px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
  overflow: hidden;
  user-select: none;

  animation: ${(p) => (p.shake ? shake : "none")} 0.3s infinite;

  @media (max-width: 768px) {
    width: 90px; /* Mobil uchun kengroq */
    height: 40px;
  }
`;

const Progress = styled.div`
  position: absolute;
  inset: 0;
  background: #1a004f;
  width: ${(p) => p.progress}%;
  transition: width 0.1s linear;
  z-index: 1;
`;

const Content = styled.div`
  z-index: 2;
  display: flex;
  gap: 7px;
  align-items: center;
`;

// === COMPONENT ===
function Navbar({ dark, setDark }) {
  const [progress, setProgress] = useState(0);
  const [shakeAnim, setShakeAnim] = useState(false);
  const intervalRef = useRef(null);

  const TOTAL_TIME = 5000; // 5 sekund
  const STEP_TIME = 100; // 0.1s
  const STEP_PERCENT = 100 / (TOTAL_TIME / STEP_TIME);

  const handleMouseDown = () => {
    let value = 0;

    intervalRef.current = setInterval(() => {
      value += STEP_PERCENT;
      setProgress(value);

      // 🔥 Oxirgi 5 sekund
      if (value >= 90) {
        setShakeAnim(true);
      }

      if (value >= 100) {
        clearInterval(intervalRef.current);
        api.logout();
      }
    }, STEP_TIME);
  };

  const handleMouseUp = () => {
    clearInterval(intervalRef.current);
    setProgress(0);
    setShakeAnim(false);
  };

  return (
    <Nav>
      <Left>
        <img src={logo} alt="Logo" />
      </Left>

      <Right>
        <Toggle src={icon} onClick={() => setDark(!dark)} alt="mode" />

        <HoldButton
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          shake={shakeAnim}
        >
          <Progress progress={progress} />
          <Content>
            Chiqish <RxExit />
          </Content>
        </HoldButton>
      </Right>
    </Nav>
  );
}

export default Navbar;
