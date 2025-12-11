import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import { FaUniversity, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

const DashboardContainer = styled.div`
  color: ${(p) => p.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  z-index: 0;

  /* Clean blue gradient that moves across */
  background-size: 200% 100%;
  margin-top: -3px;
  /* Simple animated top border */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-size: 200% 100%;
  }

  @media (max-width: 1024px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 70px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const StatCard = styled.div`
  background-color: ${(p) => p.theme.statCard};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 1px 3px ${(props) => props.theme.cardShadow};
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => props.theme.cardShadow};
  }

  @media (max-width: 1200px) {
    padding: 15px;
    gap: 12px;
  }

  @media (max-width: 1024px) {
    padding: 18px;
  }
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  @media (max-width: 1200px) {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatLabel = styled.p`
  margin: 0;
  font-size: 16px;
  opacity: 0.7;
  font-weight: 600;
  color: ${(p) => p.theme.text};

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;

const StatNumber = styled.p`
  margin: 8px 0 0 0;
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.text};

  @media (max-width: 1200px) {
    font-size: 24px;
  }
`;

const StatDescription = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
  opacity: 0.6;
  color: ${(props) => props.theme.text};
`;

const SectionTitle = styled.h2`
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const FacultiesSection = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px ${(props) => props.theme.cardShadow};

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    border-radius: 6px;
  }
`;

const HeaderRow = styled.div`
  padding: 0px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};

  @media (max-width: 768px) {
    padding: 0px 20px 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 0px 10px 8px 10px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`;

const Counter = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.text};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 15px;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;

  &:hover {
    background-color: #64646444;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px ${(props) => props.theme.cardShadow};
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 860px) {
    gap: 12px;
    padding: 12px 8px;
    margin: 8px 0;
    border: 1px solid ${(props) => props.theme.inputBorder};
    border-radius: 6px;

    &:hover {
      transform: none;
      box-shadow: 0 2px 4px ${(props) => props.theme.cardShadow};
    }
  }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${(props) => props.theme.text};
  padding: 8px 0;
  @media (max-width: 860px) {
    gap: 10px;
    font-size: 14px;
    display: none;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 13px;
  }
`;

const MobileTableCell = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  color: ${(props) => props.theme.text};
  padding: 8px 0;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 14px;
  }
`;

const MobileTable = styled.div`
  display: none;
  @media (max-width: 860px) {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const CellIconWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: ${(props) => props.theme.text};
  font-size: 13px;
  gap: 3px;

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const CellLabel = styled.span`
  font-size: 13px;
  opacity: 0.7;
  display: block;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const CellValue = styled.span`
  font-weight: 600;
  display: block;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    word-break: break-word;
  }
`;

const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
    width: 100%;
  }
`;

export default function Faculties({ isDark = false, onThemeChange }) {
  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("preferredTheme");
    if (savedTheme === "dark" && !isDark && onThemeChange) {
      onThemeChange(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("preferredTheme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    api.setToken(token);

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await api.getFaculties();
        setFaculties(data);
      } catch (err) {
        console.error("Fakultetlarni olishda xato:", err);
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (loading) {
    return (
      <DashboardContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            color: theme.text,
          }}
        >
          Yuklanmoqda...
        </div>
      </DashboardContainer>
    );
  }

  if (error) {
    return (
      <DashboardContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            color: "#ef4444",
          }}
        >
          {error}
        </div>
      </DashboardContainer>
    );
  }
  return (
    <DashboardContainer>
      {/* Mobile Filter Dropdown */}

      <StatsGrid>
        <StatCard>
          <StatIcon>
            <FaUniversity />
          </StatIcon>
          <StatContent>
            <StatLabel>Fakultetlar</StatLabel>
            <StatNumber>{faculties.length}</StatNumber>
            <StatDescription>Jami fakultetlar soni</StatDescription>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatIcon>
            <FaUsers />
          </StatIcon>
          <StatContent>
            <StatLabel>Kafedralar</StatLabel>
            <StatNumber>
              {faculties.reduce(
                (sum, f) => sum + (f.departments?.length || 0),
                0
              )}
            </StatNumber>
            <StatDescription>Jami kafedralar soni</StatDescription>
          </StatContent>
        </StatCard>
      </StatsGrid>

      {/* Faculties Section */}
      <FacultiesSection>
        <HeaderRow>
          <SectionTitle>FAKULTETLAR RO'YXATI</SectionTitle>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Counter>{faculties.length} ta</Counter>
          </div>
        </HeaderRow>

        {faculties.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              color: theme.text,
              opacity: 0.7,
            }}
          >
            Hech qanday fakultet topilmadi
          </div>
        ) : (
          faculties.map((f) => (
            <TableRow
              key={f.id}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/faculty/${f.id}`)}
            >
              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <CellLabel>Fakultet</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{f.name}</CellValue>
                  <CellValue>{f.abbr}</CellValue>
                </CellContent>
              </TableCell>

              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <FaUsers />
                    <CellLabel>Dekan</CellLabel>
                  </CellIconWrapper>
                  <CellValue>
                    {f.head?.first_name} {f.head?.last_name}
                  </CellValue>
                </CellContent>
              </TableCell>

              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <FaUsers />
                    <CellLabel>Zam dekan</CellLabel>
                  </CellIconWrapper>
                  <CellValue>
                    {f.vice?.first_name} {f.vice?.last_name}
                  </CellValue>
                </CellContent>
              </TableCell>

              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <FaUniversity />
                    <CellLabel>Kafedralar</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{f.departments?.length || 0} ta</CellValue>
                </CellContent>
              </TableCell>

              {/* Mobile view */}
              <MobileTable>
                <MobileTableCell>
                  <CellContent>
                    <CellIconWrapper>
                      <CellLabel>Fakultet</CellLabel>
                    </CellIconWrapper>
                    <CellValue>{f.name}</CellValue>
                  </CellContent>
                  <CellContent>
                    <CellIconWrapper>
                      <FaUniversity />
                      <CellLabel>Kafedralar</CellLabel>
                    </CellIconWrapper>
                    <CellValue>{f.departments?.length || 0} ta</CellValue>
                  </CellContent>
                </MobileTableCell>
              </MobileTable>
            </TableRow>
          ))
        )}
      </FacultiesSection>
    </DashboardContainer>
  );
}
