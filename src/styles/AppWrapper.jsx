import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background: ${(p) => p.theme.bg};
  color: ${(p) => p.theme.text};
  transition: background 0.3s ease, color 0.3s ease;
  position: relative;
  overflow: hidden;

  /* 🔥 Gradientni overlay qilish */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(66, 153, 225, 0.15) 50%,
      transparent 100%
    );
    background-size: 400% 400%;
    animation: ${gradient} 8s ease infinite;
    z-index: 0;
  }

  /* Ichidagi kontent yuqorida turadi */
  > * {
    position: relative;
    z-index: 1;
  }
`;

export default AppWrapper;
