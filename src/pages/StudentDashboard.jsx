import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import { FaUserGraduate } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api.js";

const DashboardContainer = styled.div`
  color: ${(p) => p.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  background-size: 200% 100%;
  margin-top: -3px;
  position: relative;
  z-index: 0;

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

  h2 {
    margin: 0;
  }
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

const TableRow = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  flex-direction: column-reverse;
  gap: 15px;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #64646444;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px ${(props) => props.theme.cardShadow};
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 860px) {
    padding: 12px 8px;
    border: 1px solid ${(props) => props.theme.inputBorder};
    border-radius: 6px;
    display: flex;
    align-items: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
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
  background-color: ${(props) => props.badgeColor};
  color: ${(props) => props.textColor};
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

  @media (max-width: 860px) {
    display: none;
  }
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
  }
`;

const ScoreBadge2 = styled.div`
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
    width: 40%;
    font-size: 12px;
  }
`;

const Count = styled.div``;

const DaysMap = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: ${(props) => props.theme.text};
  opacity: 0.7;
  svg {
    font-size: 48px;
    margin-bottom: 16px;
  }
`;

const RoleBadge = styled.span`
  background-color: ${(props) => props.badgeColor};
  color: ${(props) => props.textColor};
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  margin-left: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const UserInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const UserInfoText = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.text}80;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${(props) => props.theme.text}60;

  svg {
    font-size: 64px;
    margin-bottom: 20px;
    opacity: 0.5;
  }

  p {
    margin: 10px 0;
    font-size: 16px;
  }
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 60px;
  color: ${(props) => props.theme.primary};

  svg {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function StudentDashboard({ isDark = false }) {
  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let aborded = false;
    const controller = new AbortController();

    async function loadCurrentUser() {
      setLoading(true);
      setError(null);
      try {
        const data = await api.getCurrentUser({
          signal: controller.signal,
        });
        if (!aborded) {
          setUserData(data);
        }
      } catch (err) {
        if (err.name === "AbortError") return;
        if (!aborded) {
          setError(err.message || String(err));
        }
      } finally {
        if (!aborded) setLoading(false);
      }
    }

    loadCurrentUser();
    return () => {
      aborded = true;
      controller.abort();
    };
  }, []);

  const getStatusColors = (status) => {
    switch (status) {
      case "success":
        return {
          badge: "#10b981",
          text: "#d1fae5",
          icon: "✓",
          cursor: "not-allowed",
        };
      case "no_permission":
        return {
          badge: "#6b7280",
          text: "#f3f4f6",
          icon: <FaEyeSlash />,
          cursor: "not-allowed",
        };
      case "pending":
        return {
          badge: "#f59e0b",
          text: "#fef3c7",
          icon: "!",
          cursor: "pointer",
        };
      case "rejected":
        return {
          badge: "#ef4444",
          text: "#fff",
          icon: "X",
          cursor: "not-allowed",
        };
      default:
        return {
          badge: "#6b7280",
          text: "#e5e7eb",
          icon: <FaEyeSlash />,
          cursor: "not-allowed",
        };
    }
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "admin":
        return { badge: "#3b82f6", text: "#ffffff" };
      case "teacher":
        return { badge: "#10b981", text: "#ffffff" };
      case "student":
        return { badge: "#f59e0b", text: "#ffffff" };
      case "rector":
        return { badge: "#8b5cf6", text: "#ffffff" };
      case "dean":
        return { badge: "#ec4899", text: "#ffffff" };
      default:
        return { badge: "#6b7280", text: "#ffffff" };
    }
  };

  const getRoleDisplay = (role) => {
    const roleMap = {
      admin: "Admin",
      teacher: "Teacher",
      student: "Student",
      rector: "Rector",
      vice_rector: "Vice Rector",
      dean: "Dean",
      deputy_dean: "Deputy Dean",
      head_of_department: "Head of Department",
    };
    return roleMap[role] || role;
  };

  // Get practice days based on user role
  const getPracticeDays = () => {
    if (!userData) return [];

    // If user is a student, they should have practice_days in their profile
    if (userData.role === "student" && userData.practice_days) {
      return userData.practice_days;
    }

    // If user is not a student but has access to practice days data
    // This could be extended based on your API structure
    return userData.practice_days || [];
  };

  const practiceDays = getPracticeDays();

  if (loading) {
    return (
      <DashboardContainer>
        <LoadingSpinner>
          <FaUserGraduate />
          <p>Boshqaruv paneli yuklanmoqda...</p>
        </LoadingSpinner>
      </DashboardContainer>
    );
  }

  if (error) {
    return (
      <DashboardContainer>
        <EmptyState>
          <FaEyeSlash />
          <p>Boshqaruv panelini yuklashda xatolik yuz berdi</p>
          <p style={{ fontSize: "14px", opacity: 0.7 }}>{error}</p>
        </EmptyState>
      </DashboardContainer>
    );
  }

  if (!userData) {
    return (
      <DashboardContainer>
        <EmptyState>
          <FaUserGraduate />
          <p>Hech qanday foydalanuvchi maʼlumotlari topilmadi</p>
          <p style={{ fontSize: "14px", opacity: 0.7 }}>
            Iltimos, asboblar paneliga kirish uchun tizimga kiring
          </p>
        </EmptyState>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <PracticeDaysSection>
        <HeaderRow>
          <div>
            <SectionTitle>
              {userData.first_name} {userData.last_name}
              <RoleBadge
                badgeColor={getRoleBadgeColor(userData.role).badge}
                textColor={getRoleBadgeColor(userData.role).text}
              >
                {getRoleDisplay(userData.role)}
              </RoleBadge>
            </SectionTitle>

            <UserInfoRow>
              {userData.role === "student" && userData.group && (
                <UserInfoText>
                  Guruh: {userData.group.group_number}
                </UserInfoText>
              )}

              {userData.role === "student" && userData.attached_teacher && (
                <UserInfoText>
                  O'qituvchi: {userData.attached_teacher.first_name}{" "}
                  {userData.attached_teacher.last_name}
                </UserInfoText>
              )}
            </UserInfoRow>
          </div>
          <Count>
            <Counter>{practiceDays.length} amaliyot kunlari</Counter>
          </Count>
        </HeaderRow>

        {practiceDays.length === 0 ? (
          userData.role === "student" ? (
            <EmptyState>
              <FaUserGraduate />
              <p>Amaliyot kunlari hali belgilanmagan</p>
              <p style={{ fontSize: "14px", opacity: 0.7 }}>
                O'qituvchingiz sizga tez orada amaliyot kunlarini tayinlaydi
              </p>
            </EmptyState>
          ) : (
            <EmptyState>
              <FaUserGraduate />
              <p>Amaliyot kunlari mavjud emas</p>
              <p style={{ fontSize: "14px", opacity: 0.7 }}>
                {getRoleDisplay(userData.role)}ga tayinlangan amaliyot kunlari
                yo'q
              </p>
            </EmptyState>
          )
        ) : (
          practiceDays.map((prc) => (
            <TableRow
              key={prc.id}
              style={{ cursor: getStatusColors(prc.status).cursor }}
              to={`/student/practise/create/${prc.id}`}
              onClick={(e) => {
                if (getStatusColors(prc.status).cursor !== "pointer")
                  e.preventDefault();
              }}
            >
              <TableCell>
                <CellIcon
                  badgeColor={getStatusColors(prc.status).badge}
                  textColor={getStatusColors(prc.status).text}
                >
                  {getStatusColors(prc.status).icon}
                </CellIcon>
                <CellContent>
                  <CellIconWrapper>
                    <PiStudentBold />
                    <CellLabel>Mas'ul shaxs</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{prc.duty_name}</CellValue>
                </CellContent>
              </TableCell>
              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <FaLocationDot />
                    <CellLabel>Mo'ljal</CellLabel>
                  </CellIconWrapper>
                  <CellValue>
                    {prc.address || prc.location || "Not specified"}
                  </CellValue>
                </CellContent>
              </TableCell>
              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <MdAccessTime />
                    <CellLabel>Boshlanish vaqti</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{prc.start_time}</CellValue>
                </CellContent>
              </TableCell>
              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <MdAccessTime />
                    <CellLabel>Tugash vaqti</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{prc.end_time}</CellValue>
                </CellContent>
              </TableCell>
              <MobileTable>
                <CellIcon
                  badgeColor={getStatusColors(prc.status).badge}
                  textColor={getStatusColors(prc.status).text}
                >
                  {getStatusColors(prc.status).icon}
                </CellIcon>
                <MobileTableCell>
                  <CellContent>
                    <CellIconWrapper>
                      <FaLocationDot />
                      <CellLabel>Tashkilot</CellLabel>
                    </CellIconWrapper>
                    <CellValue>{prc.org_name || "Not specified"}</CellValue>
                  </CellContent>
                </MobileTableCell>
                <ScoreBadge2
                  badgeColor={getStatusColors(prc.status).badge}
                  textColor={getStatusColors(prc.status).text}
                >
                  {prc.date}
                </ScoreBadge2>
              </MobileTable>
              <ScoreBadge
                badgeColor={getStatusColors(prc.status).badge}
                textColor={getStatusColors(prc.status).text}
              >
                {prc.date}
              </ScoreBadge>
            </TableRow>
          ))
        )}
      </PracticeDaysSection>
    </DashboardContainer>
  );
}
