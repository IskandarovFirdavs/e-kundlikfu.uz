import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import logo from "../../public/logog.png";
import api from "../services/api";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import runaway from "../assets/runaway1.gif";
import runaway2 from "../assets/runaway2.gif";
import { IoReloadOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.92);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 87px;
  background: #007bff;
  position: relative; /* Navbarni relative qildik */
  z-index: 1000; /* Boshqa elementlardan tepada turishi uchun */

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    height: 70px;
  }
  @media (max-width: 768px) {
    img {
      height: 40px;
    }
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${(p) =>
    p.dark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"};
  border: 1px solid
    ${(p) => (p.dark ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.4)")};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background: ${(p) =>
      p.dark ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.3)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    transform: none;

    &:hover {
      background: ${(p) =>
        p.dark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"};
    }
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  position: relative; /* Menyu shu divga nisbatan joylashadi */
`;

const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #ffffff33;
  border: 2px solid #ffffff80;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  font-size: 18px;
  transition: 0.2s;

  &:hover {
    background: #ffffff55;
  }
`;

const UserInfo = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-align: right;

  .full-name {
    font-size: 16px;
    font-weight: 600;
  }

  .role {
    font-size: 12px;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Langs = styled.div`
  display: flex;
  gap: 6px;

  button {
    padding: 5px 7px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    color: ${(p) => (p.dark ? "#f9fafb" : "#1f2937")};
    background: ${(p) => (p.dark ? "#374151" : "#e5e7eb")};
    opacity: 0.68;
    outline: none;

    &[aria-pressed="true"] {
      opacity: 1;
      outline: 2px solid #3b82f6;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  padding: 12px 18px;
`;

const MenuBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
`;

const Menu = styled.div`
  position: absolute; /* Fixed o'rniga Absolute qildik */
  top: 100%; /* Avatarning tagidan boshlanadi */
  right: 0; /* O'ng chetiga tekislanadi */
  margin-top: 15px; /* Avatar bilan orasida ozgina masofa */
  background: ${(p) =>
    p.dark ? "rgba(31,41,55,0.95)" : "rgba(255,255,255,0.95)"};
  color: ${(p) => (p.dark ? "#f9fafb" : "#111")};
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 12px 0;
  width: 230px;
  box-shadow: 0 10px 40px #00000040;
  z-index: 9999;
  animation: ${fadeIn} 0.2s ease;

  /* Kichik ekranlar uchun ham absolute ishlaydi, faqat o'ngdan masofa kerak emas */
`;

const MenuItem = styled.div`
  padding: 12px 18px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: 0.2s;
  align-items: center;
  &:hover {
    background: ${(p) => (p.dark ? "#374151" : "#f3f4f6")};
  }
`;

const IOSSwitch = styled.div`
  width: 50px;
  height: 26px;
  background: ${(p) => (p.dark ? "#4b5563" : "#d1d5db")};
  border-radius: 30px;
  padding: 3px;
  position: relative;
  cursor: pointer;
  transition: 0.25s ease;
`;

const Thumb = styled.div`
  width: 20px;
  height: 20px;
  background: ${(p) => (p.dark ? "#111827" : "white")};
  border-radius: 50%;
  position: absolute;
  left: ${(p) => (p.dark ? "27px" : "3px")};
  transition: 0.25s ease;
  box-shadow: 0 2px 6px #0003;
`;

const Switcher = styled.div`
  height: 100%;
  width: 57%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExitItem = styled.div`
  width: 100%;
  padding: 12px 18px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: 0.2s;
  align-items: center;
  &:hover {
    background: ${(p) => (p.dark ? "#374151" : "#f3f4f6")};
  }
  svg {
    font-size: 18px;
    font-weight: 700;
  }
  img {
    height: 30px;
  }
`;

const Imgs = styled.div`
  display: flex;
`;

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      setLoading(true);
      const userData = await api.getCurrentUser();
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (history.length === 0) {
      setHistory([location.pathname]);
      setCurrentIndex(0);
    } else {
      const isNewLocation = location.pathname !== history[currentIndex];

      if (isNewLocation) {
        const newHistory = history.slice(0, currentIndex + 1);
        newHistory.push(location.pathname);
        setHistory(newHistory);
        setCurrentIndex(newHistory.length - 1);
      }
    }
  }, [location.pathname]);

  const getInitials = () => {
    if (!user) return "?";

    if (user.first_name && user.last_name) {
      return `${user.first_name[0]}${user.last_name[0]}`;
    }

    if (user.username) {
      return user.username[0].toUpperCase();
    }
  };

  const getDisplayName = () => {
    if (!user) return t("user");

    if (user.first_name && user.last_name) {
      return `${user.first_name} ${user.last_name}`;
    }

    if (user.username) {
      return user.username;
    }

    return t("user");
  };

  const getRoleDisplay = () => {
    if (!user || !user.role) return "";

    return t(`role.${user.role}`) || user.role;
  };

  const goBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      navigate(history[newIndex]);
    }
  };

  const goForward = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      navigate(history[newIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key === "ArrowLeft") {
        e.preventDefault();
        goBack();
      }
      if (e.altKey && e.key === "ArrowRight") {
        e.preventDefault();
        goForward();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, history]);

  useEffect(() => {
    const close = (e) => {
      // Agar menyu ochiq bo'lsa va tashqariga bosilsa yopamiz
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]); // open holatiga qarab yangilanadi

  const handleLogout = async () => {
    setOpen(false); // Avval menyuni yopamiz
    try {
      await api.logout();
    } catch (error) {
    } finally {
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      navigate("/");
    }
  };

  const getDashboardLink = () => {
    if (!user) return "/";

    switch (user.role) {
      case "student":
        return "/student/dashboard";
      case "teacher":
        return "/students";
      case "head_of_department":
        return "/directions";
      case "dean":
      case "deputy_dean":
        return "/departments";
      case "rector":
        return "/faculties";
      case "admin":
      case "super_user":
        return "/admin/dashboard";
      default:
        return "/";
    }
  };

  const goToDashboard = () => {
    setOpen(false); // Sahifaga o'tishdan oldin menyuni yopamiz
    navigate(getDashboardLink());
  };

  const renderUserInfo = () => {
    if (!user || loading) return null;

    return (
      <UserInfo>
        <div
          className="full-name"
          style={{ cursor: "pointer" }}
          onClick={goToDashboard}
        >
          {getDisplayName()}
        </div>
        <div className="role">{getRoleDisplay()}</div>
      </UserInfo>
    );
  };

  return (
    <Nav>
      <Left>
        <img
          src={logo}
          alt="Logo"
          style={{ cursor: "pointer" }}
          onClick={goToDashboard}
        />
      </Left>

      <Right>
        {renderUserInfo()}{" "}
        {/* Buni ham chaqirdik, shunda o'ng tomonda ism chiqadi */}
        <NavButtons>
          <NavButton
            dark={dark ? true : undefined}
            onClick={goBack}
            disabled={currentIndex <= 0}
            title="Orqaga (Alt + ←)"
          >
            <IoChevronBack />
          </NavButton>

          <NavButton
            dark={dark ? true : undefined}
            onClick={goForward}
            disabled={currentIndex >= history.length - 1}
            title="Oldinga (Alt + →)"
          >
            <IoChevronForward />
          </NavButton>
        </NavButtons>
        <Avatar onClick={() => setOpen(!open)}>
          {loading ? <IoReloadOutline /> : getInitials() || <FaRegUserCircle />}
        </Avatar>
        {open && (
          <>
            <MenuBackdrop onClick={() => setOpen(false)} />

            <Menu dark={dark} ref={menuRef}>
              {!loading && user && (
                <MenuItem
                  dark={dark}
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    cursor: "default",
                    opacity: dark ? 0.8 : 0.9,
                    fontSize: "14px",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600 }}>{getDisplayName()}</div>
                    <div style={{ fontSize: "12px", marginTop: "4px" }}>
                      {getRoleDisplay()}
                    </div>
                  </div>
                </MenuItem>
              )}

              <MenuItem dark={dark}>
                {t("language")}
                <Langs dark={dark}>
                  {[
                    ["uz", "UZ"],
                    ["ru", "RU"],
                    ["en", "EN"],
                  ].map(([code, label]) => (
                    <button
                      key={code}
                      type="button"
                      aria-pressed={language === code}
                      onClick={() => {
                        setLanguage(code);
                        setOpen(false); // Til tanlanganda yopiladi
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </Langs>
              </MenuItem>

              <SwitchWrapper dark={dark}>
                <span>{t("theme")} </span>
                <Switcher>
                  <MdLightMode size={20} style={{ opacity: dark ? 0.4 : 1 }} />
                  <IOSSwitch
                    dark={dark}
                    onClick={() => {
                      setDark(!dark);
                      setOpen(false); // Tema o'zgarganda yopiladi
                    }}
                  >
                    <Thumb dark={dark} />
                  </IOSSwitch>
                  <MdDarkMode size={20} style={{ opacity: dark ? 1 : 0.4 }} />
                </Switcher>
              </SwitchWrapper>

              <ExitItem dark={dark} onClick={handleLogout}>
                {t("logout")}
                <Imgs>
                  {dark ? (
                    <>
                      <IoExitOutline />
                    </>
                  ) : (
                    <>
                      <img src={runaway} alt="Run away..." />
                      <img src={runaway2} alt="Run away..." />
                    </>
                  )}
                </Imgs>
              </ExitItem>
            </Menu>
          </>
        )}
      </Right>
    </Nav>
  );
}

export default Navbar;
