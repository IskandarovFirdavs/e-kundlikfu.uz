import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import { PiStudentBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill, BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaEyeSlash,
  FaUserGraduate,
  FaSchool,
  FaCalendarCheck,
} from "react-icons/fa";

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
  @media (max-width: 860px) {
    width: 80vw;
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
  background-color: #f59e0b;
  color: #fef3c7;
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
  background-color: #f59e0b13;
  color: #f59e0b;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  min-width: 60px;
  border: 1px solid ${(props) => props.textColor}20;

  @media (max-width: 860px) {
    padding: 6px 10px;
    font-size: 13px;
    min-width: 50px;
    display: none;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
    min-width: 60px;
    justify-self: start;
    margin-top: 4px;
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

const teacherData = [
  {
    id: 1,
    student: "Karimova Zuhra",
    group: "941-22",
    location: "TashGRES",
    date: "11/10/2023",
    phone: "+998901234568",
    score: 44,
    status: "pending_review",
    submitted: true,
    approved: false,
  },
  {
    id: 2,
    student: "Qodirova Malika",
    group: "941-22",
    location: "TashGRES",
    date: "15/10/2023",
    phone: "+998901234572",
    score: 43,
    status: "pending_review",
    submitted: true,
    approved: false,
  },
];

const getBadgeColors = (score, status) => {
  if (status === "completed") return { bg: "#d1fae5", text: "#059669" };
  if (status === "pending_review") return { bg: "#fef3c7", text: "#d97706" };
  if (status === "not_submitted") return { bg: "#fee2e2", text: "#dc2626" };

  if (score >= 45) return { bg: "#d1fae5", text: "#059669" };
  if (score >= 44) return { bg: "#fef3c7", text: "#d97706" };
  if (score >= 43) return { bg: "#fee2e2", text: "#dc2626" };
  return { bg: "#f3f4f6", text: "#374151" };
};

const getStatusFromData = (item) => {
  if (item.approved) return "completed";
  if (item.submitted && !item.approved) return "pending_review";
  return "not_submitted";
};

const getStatusText = (status) => {
  switch (status) {
    case "completed":
      return "Tasdiqlangan";
    case "pending_review":
      return "Ko'rib chiqilmoqda";
    case "not_submitted":
      return "Topshirilmagan";
    default:
      return "Noma'lum";
  }
};

export default function Students({ isDark = false, onThemeChange }) {
  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(teacherData);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      setFilteredData(teacherData);
    } else {
      const filtered = teacherData.filter(
        (item) => getStatusFromData(item) === activeFilter
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

  const handleActionClick = (id, action) => {
    setActiveDropdown(null);
    // Handle different actions here
    switch (action) {
      case "review":
        navigate(`/review/${id}`);
        break;
      case "contact":
        // Handle contact logic
        break;
      case "details":
        navigate(`/student/${id}`);
        break;
      default:
        break;
    }
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const statusCounts = {
    completed: teacherData.filter(
      (item) => getStatusFromData(item) === "completed"
    ).length,
    pending_review: teacherData.filter(
      (item) => getStatusFromData(item) === "pending_review"
    ).length,
    not_submitted: teacherData.filter(
      (item) => getStatusFromData(item) === "not_submitted"
    ).length,
    all: teacherData.length,
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
        <MobileFilterOption value="completed">Tasdiqlangan</MobileFilterOption>
        <MobileFilterOption value="pending_review">
          Ko'rib chiqilmoqda
        </MobileFilterOption>
        <MobileFilterOption value="not_submitted">
          Topshirilmagan
        </MobileFilterOption>
      </MobileFilterDropdown>

      <StatsGrid>
        <StatCard
          onClick={() => handleStatClick("completed")}
          style={{
            cursor: "pointer",
            border: activeFilter === "completed" ? `2px solid #10b981` : "none",
            transform:
              activeFilter === "completed" ? "translateY(-2px)" : "none",
            boxShadow:
              activeFilter === "completed"
                ? "0 4px 12px rgba(16, 185, 129, 0.3)"
                : "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <StatContent>
            <Statdiv>
              <StatLabel>Tasdiqlangan </StatLabel>
              <StatIcon bgColor="#10b981">
                <FaCalendarCheck />
              </StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#10b98134" numberColor="#10b981">
                {statusCounts.completed}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard
          onClick={() => handleStatClick("pending_review")}
          style={{
            cursor: "pointer",
            border:
              activeFilter === "pending_review" ? `2px solid #f59e0b` : "none",
            transform:
              activeFilter === "pending_review" ? "translateY(-2px)" : "none",
            boxShadow:
              activeFilter === "pending_review"
                ? "0 4px 12px rgba(245, 158, 11, 0.3)"
                : "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <StatContent>
            <Statdiv>
              <StatLabel>Ko'rib chiqilmoqda</StatLabel>
              <StatIcon bgColor="#f59e0b">!</StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#f59f0b2c" numberColor="#f59e0b">
                {statusCounts.pending_review}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard
          onClick={() => handleStatClick("not_submitted")}
          style={{
            cursor: "pointer",
            border:
              activeFilter === "not_submitted" ? `2px solid #ef4444` : "none",
            transform:
              activeFilter === "not_submitted" ? "translateY(-2px)" : "none",
            boxShadow:
              activeFilter === "not_submitted"
                ? "0 4px 12px rgba(239, 68, 68, 0.3)"
                : "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <StatContent>
            <Statdiv>
              <StatLabel>Topshirilmagan</StatLabel>
              <StatIcon bgColor="#ef4444">
                <FaEyeSlash />
              </StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#ef44442c" numberColor="#ef4444">
                {statusCounts.not_submitted}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard
          onClick={() => handleStatClick("all")}
          style={{
            cursor: "pointer",
            border: activeFilter === "all" ? `2px solid #3b82f6` : "none",
            transform: activeFilter === "all" ? "translateY(-2px)" : "none",
            boxShadow:
              activeFilter === "all"
                ? "0 4px 12px rgba(59, 130, 246, 0.3)"
                : "0 1px 3px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          <StatContent>
            <Statdiv>
              <StatLabel>Jami Talabalar</StatLabel>
              <StatIcon bgColor="#3b82f6">
                <FaUserGraduate />
              </StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#3b82f62c" numberColor="#3b82f6">
                {statusCounts.all}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>
      </StatsGrid>

      {/* Student Practice Days Section */}
      <PracticeDaysSection>
        <HeaderRow>
          <SectionTitle>TALABALAR AMALIYOTI</SectionTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "100%",
            }}
          >
            <Counter>
              {filteredData.length}/{teacherData.length}
            </Counter>
          </div>
        </HeaderRow>

        {filteredData.map((row, index) => {
          const badgeColors = getBadgeColors(row.score, row.status);
          const statusText = getStatusText(row.status);

          return (
            <TableRow
              key={row.id}
              style={{
                cursor: "pointer",
                gridTemplateColumns: "2fr 1.5fr 1fr 1fr 10px 10px",
              }}
              onClick={() => navigate(`/student/1`)}
            >
              <TableCell>
                <CellIcon>!</CellIcon>
                <CellContent>
                  <CellIconWrapper>
                    <PiStudentBold />
                    <CellLabel>Talaba</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{row.student}</CellValue>
                </CellContent>
              </TableCell>
              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <FaSchool />
                    <CellLabel>Guruh</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{row.group}</CellValue>
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
                <CellIcon bgColor={row.iconBg}>{row.icon}!</CellIcon>
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
                >
                  {row.score} / 45
                </ScoreBadge>
              </MobileTable>
              <ScoreBadge>{row.score} / 45</ScoreBadge>
            </TableRow>
          );
        })}
      </PracticeDaysSection>
    </DashboardContainer>
  );
}
