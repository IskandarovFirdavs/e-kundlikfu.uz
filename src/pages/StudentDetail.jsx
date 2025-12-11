import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import { FaUserGraduate } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate, useParams, Link } from "react-router-dom";
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
    grid-template-columns: 1fr 1fr 1fr;
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
const TableCellInside = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;
const TableCellAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
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

const Count = styled.div``;

export default function StudentDetail({ isDark = false }) {
  const { id } = useParams();
  const studentId = id;

  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();

  const [day, setDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!studentId) return;
    let aborded = false;
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await api.getUserById(studentId, {
          signal: controller.signal,
        });
        if (!aborded) setDay(data);
      } catch (err) {
        if (err.name === "AbortError") return;
        if (!aborded) setError(err.message || String(err));
      } finally {
        if (!aborded) setLoading(false);
      }
    }
    load();
    return () => {
      aborded = true;
      controller.abort();
    };
  }, [studentId]);

  const getStatusColors = (status) => {
    switch (status) {
      case "success":
        return {
          badge: "#10b981",
          text: "#d1fae5",
          icon: "✓",
          cursor: "pointer",
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
          cursor: "not-allowed",
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

  // render
  if (!studentId) return <div className="p-4">No id provided .</div>;
  if (loading) return <div className="p-4">Loading . .</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (!day) return <div className="p-4">No data found for id: {studentId}</div>;

  return (
    <DashboardContainer>
      <PracticeDaysSection>
        <HeaderRow>
          <SectionTitle>
            {day.first_name} {day.last_name}
            <br />
            <p style={{ fontSize: "16px", opacity: 0.7, margin: "0px" }}>
              {day.attached_teacher.first_name} {day.attached_teacher.last_name}{" "}
              || {day.group.group_number} - guruhi
            </p>
          </SectionTitle>
          <Count>
            <Counter>{day.practice_days?.length || 0} ta amalyot</Counter>
          </Count>
        </HeaderRow>

        {day.practice_days?.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              color: theme.text,
              opacity: 0.7,
            }}
          >
            <FaUserGraduate
              style={{ fontSize: "48px", marginBottom: "16px" }}
            />
            <p>Hozircha amaliyotlar mavjud emas</p>
          </div>
        ) : (
          day.practice_days.map((prc) => (
            <TableRow
              key={prc.id}
              onClick={() => navigate(`/student/practise/${prc.id}`)}
              style={{ cursor: getStatusColors(prc.status).cursor }}
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
                    <CellLabel>Mas'ul Shaxs</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{prc.duty_name}</CellValue>
                </CellContent>
              </TableCell>
              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <FaLocationDot />
                    <CellLabel>Joylashuv</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{prc.address}</CellValue>
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
                {" "}
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
                      <CellLabel>Location</CellLabel>
                    </CellIconWrapper>
                    <CellValue>{prc.address}</CellValue>
                  </CellContent>
                </MobileTableCell>
                <ScoreBadge
                  style={{ display: "flex", justifyContent: "center" }}
                  badgeColor={getStatusColors(prc.status).badge}
                  textColor={getStatusColors(prc.status).text}
                >
                  {prc.date}
                </ScoreBadge>
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
