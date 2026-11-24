import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRive } from "@rive-app/react-canvas";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext.jsx";

const darklogo = "/darklogo.png";
const lightlogo = "/logog.png";
const icon = "/seticon.png";
const darkicon = "/Group.png";

// WRAPPER
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  transition: 0.3s ease;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${(p) => p.theme.cardTitle};
  margin-bottom: 10px;
  transition: 0.3s ease;

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const TeddyWrapper = styled.div`
  width: 220px;
  height: 180px;
  margin: 0 auto -15px auto;
`;

const Card = styled.div`
  background: ${(p) => p.theme.cardBg};
  width: 450px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 2px 14px ${(p) => p.theme.cardShadow};
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 0.3s ease;

  @media (max-width: 600px) {
    width: 90%;
    padding: 20px;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Credit = styled.a`
  font-size: 10px;
  color: ${(p) => p.theme.text};
  opacity: 0.4;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
    text-decoration: underline;
  }
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin-top: -10px;
`;

const Logo = styled.img`
  width: 100px;
  height: 45px;
  object-fit: contain;
`;

const LogoText = styled.div`
  margin-top: 8px;
  font-weight: bold;
  font-size: 18px;
  color: ${(p) => p.theme.text};
`;

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

  &:focus {
    border-color: #007bff;
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
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  &:hover {
    background: ${(p) => p.theme.buttonHover};
  }
`;

const Toggle = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${(p) => p.theme.inputText};
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export default function Login({ dark, setDark }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  // RIVE HOOK
  const { rive, RiveComponent } = useRive({
    src: "/teddy.riv",
    autoplay: true,
    animations: "idle",
  });

  // PAROL KREATSION VA KO'ZCHANI BOSGANDA ANIMATSIYANI BOSHQARISH
  useEffect(() => {
    if (!rive) return;

    // Agar parolni ko'rsatish (showPassword) yoqilgan bo'lsa,
    //yoki parol inputida fokus bo'lsa -> ayiqcha ko'zini yopadi (hands_up)
    if (showPassword || isPasswordFocused) {
      rive.play("hands_up");
    } else {
      // Aks holda ko'zini ochadi (hands_down)
      rive.play("hands_down");
    }
  }, [rive, isPasswordFocused, showPassword]);

  // ROLE REDIRECT
  useEffect(() => {
    if (!user) return;

    switch (user.role) {
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
    }
  }, [user, navigate]);

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setIsPasswordFocused(false);
    setShowPassword(false);

    try {
      const result = await login(username, password);

      if (result.success) {
        if (rive) rive.play("success");
      } else {
        if (rive) rive.play("fail");
        setError(result.error || "Login yoki parol xato");
      }
    } catch (err) {
      if (rive) rive.play("fail");
      setError(err.message || "Login yoki parol noto‘g‘ri.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>{t("login.title")}</Title>

      <Card>
        <CardHeader>
          <Credit href="https://rive.app" target="_blank" rel="noreferrer">
            Anim: naresh.keyconcepts / JcToon (CC BY)
          </Credit>

          <Toggle src={dark ? icon : darkicon} onClick={() => setDark(!dark)} />
        </CardHeader>

        <TeddyWrapper>
          <RiveComponent />
        </TeddyWrapper>

        <LogoWrapper>
          <Logo src={dark ? lightlogo : darklogo} alt="Elektron Kundalik" />
          <LogoText>{t("login.subtitle")}</LogoText>
        </LogoWrapper>

        <form onSubmit={handleLogin}>
          {error && (
            <p style={{ color: "#ef4444", textAlign: "center", marginBottom: "15px" }}>
              {error}
            </p>
          )}

          <Inputs>
            <Input
              type="text"
              placeholder={t("login.username")}
              value={username}
              onFocus={() => {
                setIsPasswordFocused(false);
                if (rive) rive.play("look_idle");
              }}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
            />

            <PasswordWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={t("login.password")}
                value={password}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                style={{ paddingRight: "45px" }}
              />

              <EyeIcon
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </EyeIcon>
            </PasswordWrapper>

            <Button type="submit" disabled={loading}>
              {loading ? t("login.loading") : t("login.submit")}
            </Button>
          </Inputs>
        </form>
      </Card>
    </Wrapper>
  );
}