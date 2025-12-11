import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../public/logog.png";
import api from "../services/api";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";

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

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

const Left = styled.div`
  img {
    height: 70px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
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

const Langs = styled.div`
  display: flex;
  gap: 6px;

  span {
    padding: 4px 6px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    background: ${(p) => (p.dark ? "#374151" : "#e5e7eb")};

    &:hover {
      opacity: 0.7;
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
  position: fixed;
  top: 90px;
  right: 40px;
  background: ${(p) =>
    p.dark ? "rgba(31,41,55,0.8)" : "rgba(255,255,255,0.8)"};
  color: ${(p) => (p.dark ? "#f9fafb" : "#111")};
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 12px 0;
  width: 230px;
  box-shadow: 0 10px 40px #00000040;
  z-index: 9999;
  animation: ${fadeIn} 0.2s ease;

  @media (max-width: 768px) {
    right: 10px;
    top: 80px;
  }
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

const ExitItem = styled.div`
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
  justify-content: left;
  gap: 10px;
  svg {
    font-size: 18px;
    font-weight: 700;
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
  align-items: center;
`;

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("uz");
  const menuRef = useRef(null);

  // FAKE USER (o'z JSONdan olasan)
  const user = {
    username: "Firdavs",
    first_name: "Firdavs",
    last_name: "Iskandarov",
  };

  const getLetter = () => {
    if (user.username) return user.username[0].toUpperCase();
    if (user.first_name) return user.first_name[0].toUpperCase();
    if (user.last_name) return user.last_name[0].toUpperCase();
    return "?";
  };

  // tashqi click — menu yopilsin
  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <Nav>
      <Left>
        <img src={logo} alt="Logo" />
      </Left>

      <Right>
        {/* Avatar */}
        <Avatar onClick={() => setOpen(!open)}>{getLetter()}</Avatar>

        {open && (
          <>
            <MenuBackdrop onClick={() => setOpen(false)} />

            <Menu dark={dark} ref={menuRef}>
              <MenuItem dark={dark}>
                Til
                <Langs dark={dark}>
                  <span onClick={() => setLang("uz")}>UZ</span>
                  <span onClick={() => setLang("ru")}>RU</span>
                  <span onClick={() => setLang("en")}>EN</span>
                </Langs>
              </MenuItem>

              <SwitchWrapper dark={dark}>
                <span>Rejim </span>
                <Switcher>
                  <MdLightMode size={20} style={{ opacity: dark ? 0.4 : 1 }} />
                  <IOSSwitch dark={dark} onClick={() => setDark(!dark)}>
                    <Thumb dark={dark} />
                  </IOSSwitch>
                  <MdDarkMode size={20} style={{ opacity: dark ? 1 : 0.4 }} />
                </Switcher>
              </SwitchWrapper>

              <ExitItem dark={dark} onClick={() => api.logout()}>
                Chiqish <IoExitOutline />
              </ExitItem>
            </Menu>
          </>
        )}
      </Right>
    </Nav>
  );
}

export default Navbar;
