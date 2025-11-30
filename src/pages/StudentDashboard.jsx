import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import { FaEyeSlash } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
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

  @media (max-width: 1200px) {
    padding: 15px;
    gap: 12px;
  }

  @media (max-width: 1024px) {
    padding: 18px;
  }
`;

const StatIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  color: ${(p) => p.theme.statCard};

  @media (max-width: 1200px) {
    width: 18px;
    height: 18px;
    font-size: 12px;
  }
`;

const StatContent = styled.div`
  flex: 1;
`;

const SmallStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

const Statdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatLabel = styled.p`
  margin: 0;
  font-size: 18px;
  opacity: 0.7;
  font-weight: 600;
  color: ${(p) => p.theme.text};

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

const StatNumber = styled.p`
  margin: 5px 0 0 0;
  font-size: 24px;
  font-weight: bold;
  width: 35%;
  text-align: center;
  border-radius: 10px;
  color: ${(props) => props.numberColor};
  background-color: ${(props) => props.bgColor};

  @media (max-width: 1200px) {
    font-size: 20px;
    width: 40%;
  }

  @media (max-width: 1024px) {
    font-size: 22px;
  }
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

const PracticeDaysSection = styled.div`
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
    display: flex;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.buttonBg};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${(props) => props.theme.buttonBg}40;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 14px;
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
  grid-template-columns: 1fr 1fr 1fr 1.2fr 80px;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
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

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 14px;
    display: none;
  }
`;
const MobileTableCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const CellIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: ${(props) => props.bgColor};
  color: white;
  flex-shrink: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    font-size: 12px;
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

const CellIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

const ScoreBadge = styled.div`
  background-color: ${(props) => props.badgeColor};
  color: ${(props) => props.textColor};
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  min-width: 60px;
  border: 1px solid ${(props) => props.textColor}20;

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 13px;
    min-width: 50px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
    min-width: 60px;
    justify-self: start;
    margin-top: 4px;
    display: none;
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

const practiceData = [
  {
    id: 1,
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 45,
    icon: "✓",
    iconBg: "#10b981",
    badgeBg: "#d1fae5",
    status: "bajarilgan",
  },
  {
    id: 2,
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 44,
    icon: "!",
    iconBg: "#f59e0b",
    badgeBg: "#fef3c7",
    status: "topshirish-kerak",
  },
  {
    id: 3,
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 43,
    icon: "✕",
    iconBg: "#ef4444",
    badgeBg: "#fee2e2",
    status: "tasdiqlanmagan",
  },
  {
    id: 4,
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 42,
    icon: "○",
    iconBg: "#6b7280",
    badgeBg: "#f3f4f6",
    status: "kutilayotgan",
  },
  {
    id: 5,
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 41,
    icon: "○",
    iconBg: "#6b7280",
    badgeBg: "#f3f4f6",
    status: "kutilayotgan",
  },
  {
    id: 6,
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 40,
    icon: "○",
    iconBg: "#6b7280",
    badgeBg: "#f3f4f6",
    status: "kutilayotgan",
  },
];

const getBadgeColors = (score) => {
  if (score >= 45) return { bg: "#d1fae5", text: "#059669" };
  if (score >= 44) return { bg: "#fef3c7", text: "#d97706" };
  if (score >= 43) return { bg: "#fee2e2", text: "#dc2626" };
  return { bg: "#f3f4f6", text: "#374151" };
};

const getStatusFromScore = (score) => {
  if (score >= 45) return "bajarilgan";
  if (score >= 44) return "topshirish-kerak";
  if (score >= 43) return "tasdiqlanmagan";
  return "kutilayotgan";
};

export default function StudentDashboard({ isDark = false, onThemeChange }) {
  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(practiceData);

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
    const showSuccess = sessionStorage.getItem("showSubmissionSuccess");

    if (showSuccess) {
      setShowNotification(true);
      sessionStorage.removeItem("showSubmissionSuccess");

      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location]);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredData(practiceData);
    } else {
      const filtered = practiceData.filter(
        (item) => getStatusFromScore(item.score) === activeFilter
      );
      setFilteredData(filtered);
    }
  }, [activeFilter]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/file.png";
    link.download = "file.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleStatClick = (status) => {
    if (activeFilter === status) {
      setActiveFilter("all");
    } else {
      setActiveFilter(status);
    }
  };

  const handleMobileFilterChange = (event) => {
    setActiveFilter(event.target.value);
  };

  const statusCounts = {
    bajarilgan: practiceData.filter(
      (item) => getStatusFromScore(item.score) === "bajarilgan"
    ).length,
    "topshirish-kerak": practiceData.filter(
      (item) => getStatusFromScore(item.score) === "topshirish-kerak"
    ).length,
    tasdiqlanmagan: practiceData.filter(
      (item) => getStatusFromScore(item.score) === "tasdiqlanmagan"
    ).length,
    kutilayotgan: practiceData.filter(
      (item) => getStatusFromScore(item.score) === "kutilayotgan"
    ).length,
  };

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
        <MobileFilterOption value="all">Barchasi</MobileFilterOption>
        <MobileFilterOption value="bajarilgan">Bajarilgan</MobileFilterOption>
        <MobileFilterOption value="topshirish-kerak">
          Topshirish kerak
        </MobileFilterOption>
        <MobileFilterOption value="tasdiqlanmagan">
          Tasdiqlanmagan
        </MobileFilterOption>
        <MobileFilterOption value="kutilayotgan">
          Kutilayotgan
        </MobileFilterOption>
      </MobileFilterDropdown>

      <StatsGrid>
        <StatCard
          onClick={() => handleStatClick("bajarilgan")}
          style={{
            cursor: "pointer",
            border:
              activeFilter === "bajarilgan" ? `2px solid #10b981` : "none",
            transform:
              activeFilter === "bajarilgan" ? "translateY(-2px)" : "none",
            boxShadow:
              activeFilter === "bajarilgan"
                ? "0 4px 12px rgba(16, 185, 129, 0.3)"
                : "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <StatContent>
            <Statdiv>
              <StatLabel>Bajarilgan </StatLabel>
              <StatIcon bgColor="#10b981">✓</StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#10b98134" numberColor="#10b981">
                {statusCounts.bajarilgan}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard
          onClick={() => handleStatClick("topshirish-kerak")}
          style={{
            cursor: "pointer",
            border:
              activeFilter === "topshirish-kerak"
                ? `2px solid #f59e0b`
                : "none",
            transform:
              activeFilter === "topshirish-kerak" ? "translateY(-2px)" : "none",
            boxShadow:
              activeFilter === "topshirish-kerak"
                ? "0 4px 12px rgba(245, 158, 11, 0.3)"
                : "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <StatContent>
            <Statdiv>
              <StatLabel>Topshirish kerak</StatLabel>
              <StatIcon bgColor="#f59e0b">!</StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#f59f0b2c" numberColor="#f59e0b">
                {statusCounts["topshirish-kerak"]}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard
          onClick={() => handleStatClick("tasdiqlanmagan")}
          style={{
            cursor: "pointer",
            border:
              activeFilter === "tasdiqlanmagan" ? `2px solid #ef4444` : "none",
            transform:
              activeFilter === "tasdiqlanmagan" ? "translateY(-2px)" : "none",
            boxShadow:
              activeFilter === "tasdiqlanmagan"
                ? "0 4px 12px rgba(239, 68, 68, 0.3)"
                : "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <StatContent>
            <Statdiv>
              <StatLabel>Tasdiqlanmagan </StatLabel>
              <StatIcon bgColor="#ef4444">✕</StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#ef44442c" numberColor="#ef4444">
                {statusCounts.tasdiqlanmagan}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard
          onClick={() => handleStatClick("kutilayotgan")}
          style={{
            cursor: "pointer",
            border:
              activeFilter === "kutilayotgan"
                ? `2px solid ${isDark ? "#1f2937" : "#DEDEDE"}`
                : "none",
            transform:
              activeFilter === "kutilayotgan" ? "translateY(-2px)" : "none",
            boxShadow:
              activeFilter === "kutilayotgan"
                ? `0 4px 12px ${
                    isDark
                      ? "rgba(31, 41, 55, 0.3)"
                      : "rgba(222, 222, 222, 0.3)"
                  }`
                : "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <StatContent>
            <Statdiv>
              <StatLabel>Kutilayotgan</StatLabel>
              <StatIcon bgColor={isDark ? "#1f2937" : "#DEDEDE"}>
                <FaEyeSlash color={isDark ? "#fff" : "#000"} />
              </StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber
                bgColor={isDark ? "#1f29372e" : "#DEDEDE"}
                numberColor={isDark ? "#1f2937" : "black"}
              >
                {statusCounts.kutilayotgan}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>
      </StatsGrid>

      {/* Practice Days Section */}
      <PracticeDaysSection>
        <HeaderRow>
          <SectionTitle>AMALIYOT KUNLARI</SectionTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "100%",
            }}
          >
            <Button onClick={handleDownload}>Hisobot</Button>
            <Counter>{filteredData.length}/45</Counter>
          </div>
        </HeaderRow>

        {filteredData.map((row, index) => {
          const badgeColors = getBadgeColors(row.score);

          return (
            <TableRow
              key={row.id}
              onClick={() => navigate(`/student/practise/${row.id}`)}
              style={{ cursor: "pointer" }}
            >
              <TableCell>
                <CellIcon bgColor={row.iconBg}>{row.icon}</CellIcon>
                <CellContent>
                  <CellIconWrapper>
                    <PiStudentBold />
                    <CellLabel>O'qituvchi</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{row.teacher}</CellValue>
                </CellContent>
              </TableCell>
              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <FaLocationDot />
                    <CellLabel>Joylashuv</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{row.location}</CellValue>
                </CellContent>
              </TableCell>
              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <IoCalendarNumber />
                    <CellLabel>Sana</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{row.date}</CellValue>
                </CellContent>
              </TableCell>
              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <BsFillTelephoneFill />
                    <CellLabel>Telefon raqam</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{row.phone}</CellValue>
                </CellContent>
              </TableCell>
              <MobileTable>
                {" "}
                <CellIcon bgColor={row.iconBg}>{row.icon}</CellIcon>
                <MobileTableCell>
                  <CellContent>
                    <CellIconWrapper>
                      <FaLocationDot />
                      <CellLabel>Location</CellLabel>
                    </CellIconWrapper>
                    <CellValue>{row.location}</CellValue>
                  </CellContent>
                </MobileTableCell>
                <ScoreBadge
                  style={{ display: "flex", justifyContent: "center" }}
                  badgeColor={badgeColors.bg}
                  textColor={badgeColors.text}
                >
                  {row.score}
                </ScoreBadge>
              </MobileTable>
              <ScoreBadge
                badgeColor={badgeColors.bg}
                textColor={badgeColors.text}
              >
                {row.score}
              </ScoreBadge>
            </TableRow>
          );
        })}
      </PracticeDaysSection>
    </DashboardContainer>
  );
}
