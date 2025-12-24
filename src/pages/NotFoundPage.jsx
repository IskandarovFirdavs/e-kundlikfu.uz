import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaSearch } from "react-icons/fa";
import { lightTheme, darkTheme } from "../styles/theme.js";

const MinimalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  padding: 40px 20px;
  text-align: center;
  z-index: 0;
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const ErrorCode = styled.div`
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 10px;
  opacity: 0.9;

  @media (max-width: 480px) {
    font-size: 60px;
  }
`;

const ErrorTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 15px 0;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto 30px;
  line-height: 1.5;
`;



export default function NotFoundPage({ isDark = false }) {
  const theme = isDark ? darkTheme : lightTheme;

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/home";
    }
  };

  return (
    <MinimalContainer theme={theme}>
      <ErrorCode theme={theme}>404</ErrorCode>

      <ErrorTitle theme={theme}>Sahifa topilmadi</ErrorTitle>

      <ErrorMessage theme={theme}>
        Uzr, siz izlayotgan sahifa mavjud emas. Manzil noto'g'ri yoki sahifa
        o'chirilgan bo'lishi mumkin.
      </ErrorMessage>
    </MinimalContainer>
  );
}
