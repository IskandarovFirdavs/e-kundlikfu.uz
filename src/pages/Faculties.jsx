import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import { FaUniversity, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const colorFlow = keyframes`
  0% {
    background-position: -100% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: -100% 0%;
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #10b981;
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
  z-index: 1000;
  animation: ${slideIn} 0.3s ease-out;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  &.closing {
    animation: ${slideOut} 0.3s ease-in;
  }

  &::before {
    content: "✓";
    background: white;
    color: #10b981;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    left: 10px;
    padding: 12px 16px;
  }
`;

const DashboardContainer = styled.div`
  color: ${(p) => p.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;

  /* Clean blue gradient that moves across */
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(66, 153, 225, 0.15) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: ${colorFlow} 4s linear infinite;
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
    background: linear-gradient(90deg, transparent, #4299e1, transparent);
    background-size: 200% 100%;
    animation: ${colorFlow} 2s linear infinite;
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
  background-color: ${(props) => props.bg};
  color: white;
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
    grid-template-columns: 1fr 1fr 1fr;
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
  width: 15%;
  align-items: center;
  color: ${(props) => props.theme.text};
  font-size: 16px;

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

const MobileFilterDropdown = styled.select`
  display: none;

  @media (max-width: 640px) {
    display: block;
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.inputBorder};
    background-color: ${(props) => props.theme.cardBg};
    color: ${(props) => props.theme.text};
    font-size: 16px;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme.buttonBg};
    }
  }
`;

const MobileFilterOption = styled.option`
  background-color: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
  padding: 10px;
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
// Mock data for faculties
const facultiesData = [
  {
    id: 1,
    name: "Kompyuter Texnologiyalari Fakulteti",
    code: "KTF",
    dean: "Prof. Toshmatov A.",
    departments: 8,
    students: 2850,
    teachers: 145,
    budget: "12.5 mlrd",
    performance: 94,
    status: "active",
    icon: "💻",
    iconColor: "#3B82F6",
    established: "2010",
  },
  {
    id: 2,
    name: "Iqtisodiyot va Menejment Fakulteti",
    code: "IMF",
    dean: "Prof. Qodirova M.",
    departments: 6,
    students: 3200,
    teachers: 132,
    budget: "9.8 mlrd",
    performance: 88,
    status: "active",
    icon: "📊",
    iconColor: "#10B981",
    established: "2008",
  },
  {
    id: 3,
    name: "Tabiiy Fanlar Fakulteti",
    code: "TFF",
    dean: "Prof. Yusupov S.",
    departments: 7,
    students: 1850,
    teachers: 118,
    budget: "7.2 mlrd",
    performance: 82,
    status: "active",
    icon: "🔬",
    iconColor: "#F59E0B",
    established: "2012",
  },
  {
    id: 4,
    name: "Gumanitar Fanlar Fakulteti",
    code: "GFF",
    dean: "Prof. Karimova Z.",
    departments: 5,
    students: 2100,
    teachers: 98,
    budget: "6.5 mlrd",
    performance: 79,
    status: "active",
    icon: "📚",
    iconColor: "#EF4444",
    established: "2005",
  },
];

const getPerformanceColors = (rate) => {
  if (rate >= 90) return { bg: "#d1fae5", text: "#059669" };
  if (rate >= 80) return { bg: "#fef3c7", text: "#d97706" };
  if (rate >= 70) return { bg: "#fee2e2", text: "#dc2626" };
  return { bg: "#f3f4f6", text: "#374151" };
};

export default function Faculties({ isDark = false, onThemeChange }) {
  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(facultiesData);
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

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
    if (activeFilter === "all") {
      setFilteredData(facultiesData);
    } else {
      const filtered = facultiesData.filter(
        (item) => item.status === activeFilter
      );
      setFilteredData(filtered);
    }
  }, [activeFilter]);

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

  const handleMobileFilterChange = (event) => {
    setActiveFilter(event.target.value);
  };

  const totalStats = {
    faculties: facultiesData.length,
    departments: facultiesData.reduce(
      (sum, faculty) => sum + faculty.departments,
      0
    ),
    students: facultiesData.reduce((sum, faculty) => sum + faculty.students, 0),
    teachers: facultiesData.reduce((sum, faculty) => sum + faculty.teachers, 0),
    avgPerformance: Math.round(
      facultiesData.reduce((sum, faculty) => sum + faculty.performance, 0) /
        facultiesData.length
    ),
  };
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
      {showNotification && (
        <Notification onClick={handleNotificationClose}>
          Muvaffaqiyatli yuborildi! Ma'lumotlaringiz qabul qilindi.
        </Notification>
      )}

      {/* Mobile Filter Dropdown */}
      <MobileFilterDropdown
        value={activeFilter}
        onChange={handleMobileFilterChange}
      >
        <MobileFilterOption value="all">Barcha Fakultetlar</MobileFilterOption>
        <MobileFilterOption value="active">Faol Fakultetlar</MobileFilterOption>
        <MobileFilterOption value="inactive">Faol Emas</MobileFilterOption>
      </MobileFilterDropdown>

      <StatsGrid>
        <StatCard>
          <StatIcon $bgColor="#3B82F6">
            <FaUniversity />
          </StatIcon>
          <StatContent>
            <StatLabel>Fakultetlar</StatLabel>
            <StatNumber>{totalStats.faculties}</StatNumber>
            <StatDescription>Jami fakultetlar soni</StatDescription>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatIcon $bgColor="#10B981">
            <FaUsers />
          </StatIcon>
          <StatContent>
            <StatLabel>Kafedralar</StatLabel>
            <StatNumber>{totalStats.departments}</StatNumber>
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
              onClick={() => navigate(`/departments?faculty=${f.id}`)}
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
