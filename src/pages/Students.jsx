import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import { PiStudentBold } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { FaUserGraduate, FaSchool } from "react-icons/fa";
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
  grid-template-columns: 1fr 1fr 1fr;
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
    gap: 12px;
  }

  @media (max-width: 860px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 8px;
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
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 13px;
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
`;

const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
    margin-left: 10px;
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

export default function Students({ isDark = false, onThemeChange }) {
  const { id } = useParams();
  const groupId = id;

  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

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
    let aborted = false;
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);

      try {
        let data;

        if (groupId) {
          data = await api.getGroup(groupId, { signal: controller.signal });
          if (!aborted) setGroup(data);
        } else {
          data = await api.getUsers();
          if (!aborted)
            setGroup({
              group_number: null,
              students: data,
            });
        }
      } catch (err) {
        if (!aborted) setError(err.message || String(err));
      } finally {
        if (!aborted) setLoading(false);
      }
    }

    load();
    return () => {
      aborted = true;
      controller.abort();
    };
  }, [groupId]);

  // render
  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (!group) return <div className="p-4">No data</div>;

  const groupNumber =
    group?.group_number ?? group?.students?.[0]?.group?.group_number ?? "";

  return (
    <DashboardContainer>
      {/* Student Practice Days Section */}
      <PracticeDaysSection>
        <HeaderRow>
          <SectionTitle>
            {groupId ? `${group.group_number}` : groupNumber}-guruh talabalari
          </SectionTitle>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "100%",
            }}
          >
            <Counter>{group.students?.length || 0} ta talaba</Counter>
          </div>
        </HeaderRow>

        {group.students.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "40px 20px",
              opacity: 0.7,
            }}
          >
            <FaUserGraduate
              style={{ fontSize: "48px", marginBottom: "16px" }}
            />
            <p>Hozircha talabalar mavjud emas</p>
          </div>
        ) : (
          group.students.map((student) => (
            <TableRow
              key={student.id}
              onClick={() => navigate(`/student/${student.id}`)}
            >
              <TableCell>
                <TableCellInside>
                  <CellContent>
                    <CellIconWrapper>
                      <PiStudentBold />
                      <CellLabel>Talaba</CellLabel>
                    </CellIconWrapper>
                    <CellValue>
                      {student.first_name} {student.last_name}
                    </CellValue>
                  </CellContent>
                </TableCellInside>
              </TableCell>
            </TableRow>
          ))
        )}
      </PracticeDaysSection>
    </DashboardContainer>
  );
}
