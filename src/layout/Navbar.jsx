import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../public/logog.png";
import icon from "../../public/seticon.png";
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 38px;
  height: 87px;
  background: #007bff;
  position: relative;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  img {
    height: 100%;
  }
  @media (max-width: 768px) {
    img {
      height: 65%;
    }
  }
  @media (max-width: 368px) {
    img {
      height: 40%;
    }
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
  justify-content: space-around;
  gap: 20px;
`;

function Navbar({ dark, setDark }) {
  return (
    <Nav>
      <Left>
        <img src={logo} alt="Logo" />
      </Left>

      <Right>
        <Toggle
          src={icon}
          onClick={() => setDark(!dark)}
          alt={dark ? "Light mode" : "Dark mode"}
          title={dark ? "Light mode" : "Dark mode"}
        />
      </Right>
    </Nav>
  );
}

export default Navbar;
