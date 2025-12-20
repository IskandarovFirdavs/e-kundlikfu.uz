import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import darklogo from "../../public/darklogo.png";
import lightlogo from "../../public/logog.png";
import { useNavigate } from "react-router-dom";
import icon from "../../public/seticon.png";
import darkicon from "../../public/Group.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext"; // AuthContext'ni import qilamiz

// --- WRAPPER ---
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
    width: 100px;
    height: 40px;
    object-fit: contain;
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

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${(p) => p.theme.inputText};
  font-size: 20px;
`;

export default function Login({ dark, setDark }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login, user } = useAuth(); // AuthContext'dan login funksiyasini olamiz

  useEffect(() => {
    // Agar user allaqachon login qilgan bo'lsa, uni tegishli sahifaga yo'naltiramiz
    if (user) {
      redirectBasedOnRole(user.role);
    }
  }, [user, navigate]);

  // Role bo'yicha yo'naltirish funksiyasi
  const redirectBasedOnRole = (role) => {
    switch (role) {
      case "super_user":
      case "admin":
        navigate("/admin/dashboard");
        break;
      case "rector":
        navigate("/faculties");
        break;
      case "dean":
      case "deputy_dean":
        navigate("/departments");
        break;
      case "head_of_department":
        navigate("/directions");
        break;
      case "teacher":
        navigate("/students");
        break;
      case "student":
        navigate("/student/dashboard");
        break;
      default:
        navigate("/");
        break;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // AuthContext'dagi login funksiyasini chaqiramiz
      const result = await login(username, password);

      if (result.success) {
        // AuthContext user'ni o'zi o'rnatadi, useEffect orqali redirect qilinadi
      } else {
        setError(result.error || "Login yoki parol xato");
      }
    } catch (err) {
      setError("Server bilan aloqa xatosi");
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
            <PasswordWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Parol"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                style={{ paddingRight: "45px" }}
              />

              <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </EyeIcon>
            </PasswordWrapper>

            <Button type="submit" disabled={loading}>
              {loading ? "Kirilmoqda..." : "Kirish"}
            </Button>
          </Inputs>
        </form>
      </Card>
    </Wrapper>
  );
}
