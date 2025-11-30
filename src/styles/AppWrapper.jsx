import styled from "styled-components";

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  background: ${(p) => p.theme.bg};
  color: ${(p) => p.theme.text};
  transition: background 0.3s ease, color 0.3s ease;
`;

export default AppWrapper;
