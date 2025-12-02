import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import darklogo from "../../public/darklogo.png";
import lightlogo from "../../public/logog.png";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../public/seticon.png";
import darkicon from "../../public/Group.png";
import api from "../services/api.js";
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

// --- LOGIN COMPONENT ---
export default function Login({ dark, setDark }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/faculties");
    }
  }, [navigate]);

  // Login.jsx - debug qo'shish
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await api.login(username, password);
      navigate("/faculties"); // token allaqachon api.login ichida saqlangan
    } catch (err) {
      setError("Login yoki parol xato");
    } finally {
      setLoading(false);
    }
  };
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

        <form onSubmit={handleLogin}>
          {error && (
            <p
              style={{
                color: "#ef4444",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              {error}
            </p>
          )}
          <Inputs>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
            />
            <Input
              type="password"
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Kirilmoqda..." : "Kirish"}
            </Button>
          </Inputs>
        </form>
      </Card>
    </Wrapper>
  );
}
