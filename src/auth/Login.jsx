import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import darklogo from "../../public/darklogo.png";
import lightlogo from "../../public/logog.png";
import { Link } from "react-router-dom";
import icon from "../../public/seticon.png";
import darkicon from "../../public/Group.png";

// --- WRAPPER ---
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${(p) => p.theme.bg};
  color: ${(p) => p.theme.text};
  transition: 0.3s ease;

  @media (max-width: 600px) {
    padding: 20px;
    height: auto;
  }
`;

// --- TITLE ---
const Title = styled.h1`
  font-size: 32px;
  color: ${(p) => p.theme.cardTitle};
  margin-bottom: 20px;
  transition: 0.3s ease;

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

// --- CARD ---
const Card = styled.div`
  background: ${(p) => p.theme.cardBg};
  width: 450px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 2px 14px ${(p) => p.theme.cardShadow};
  display: flex;
  flex-direction: column;
  gap: 25px;
  transition: 0.3s ease;

  @media (max-width: 600px) {
    width: 90%;
    padding: 20px;
  }
`;

// --- CARD HEADER ---
const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

// --- LOGO BLOCK ---
const LogoWrapper = styled.div`
  text-align: center;
  margin-top: -10px;
`;

const Logo = styled.img`
  width: 100px;
  height: 45px;

  @media (max-width: 600px) {
    width: 75px;
  }
`;

const LogoText = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
  color: ${(p) => p.theme.text};

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

// --- FORM ---
const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 16px;
  background: ${(p) => p.theme.inputBg};
  border: 1px solid ${(p) => p.theme.inputBorder};
  color: ${(p) => p.theme.inputText};
  transition: 0.3s ease;
  border-color: ${(props) =>
    props.hasError ? "#ef4444" : (p) => p.theme.inputBorder};

  &:focus {
    border-color: ${(props) => (props.hasError ? "#ef4444" : "#007bff")};
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: ${(p) => p.theme.buttonBg};
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
  pointer-events: ${(props) => (props.loading ? "none" : "all")};

  &:hover {
    background: ${(p) => p.theme.buttonHover};
  }
`;

// --- TOGGLE ICON ---
const Toggle = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

// --- ERROR MESSAGE ---
const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  margin-top: 10px;
`;

// --- LOADING SPINNER ---
const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// --- DEMO CREDENTIALS ---
const DemoCredentials = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: ${(p) => p.theme.statCard};
  border-radius: 8px;
  font-size: 12px;

  h4 {
    margin: 0 0 10px 0;
    color: ${(p) => p.theme.text};
  }

  .credential {
    margin: 5px 0;
    color: ${(p) => p.theme.text};
    opacity: 0.8;
  }
`;

// --- LOGIN COMPONENT ---
export default function Login({ dark, setDark }) {
  return (
    <Wrapper>
      <Title>Tizimga Kirish</Title>

      <Card>
        <CardHeader>
          <Toggle src={dark ? icon : darkicon} onClick={() => setDark(!dark)} />
        </CardHeader>

        <LogoWrapper>
          <Logo src={dark ? lightlogo : darklogo} alt="Elektron Kundalik" />
          <LogoText>ELEKTRON KUNDALIK</LogoText>
        </LogoWrapper>

        <form>
          <Inputs>
            <Input type="text" placeholder="username" required />
            <Input type="password" placeholder="parol" required />

            <Button type="submit">
              <Link to="/faculties">Kirish</Link>
            </Button>
          </Inputs>
        </form>
      </Card>
    </Wrapper>
  );
}
