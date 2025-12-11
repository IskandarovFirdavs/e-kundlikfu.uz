import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import { FaBuilding } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
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

const DepartmentsSection = styled.div`
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
  grid-template-columns: 2.5fr 1fr 1fr;
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
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 13px;
    width: 100%;
  }
`;

const CellIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: ${(props) => props.bgColor || "#f59e0b"};
  color: white;
  flex-shrink: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
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
  }
`;

export default function Departments({ isDark = false, onThemeChange }) {
  const { id } = useParams();
  const departmentId = id;

  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();
  const [department, setDepartment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    if (!departmentId) return;
    let aborded = false;
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await api.getFaculty(departmentId, {
          signal: controller.signal,
        });
        if (!aborded) setDepartment(data);
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
  }, [departmentId]);

  // render
  if (!departmentId) return <div className="p-4">No id provided .</div>;
  if (loading) return <div className="p-4">Loading . .</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (!department)
    return <div className="p-4">No data found for id: {departmentId}</div>;
  return (
    <DashboardContainer>
      {/* Mobile Filter Dropdown */}
      <DepartmentsSection>
        <HeaderRow>
          <SectionTitle>{department.name} — Kafedralar ro‘yxati</SectionTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "100%",
            }}
          >
            <Counter>{department.departments?.length || 0} ta</Counter>
          </div>
        </HeaderRow>
        {department.departments?.length === 0 && (
          <p style={{ padding: "20px", color: theme.text }}>
            Hozircha kafedralar mavjud emas.
          </p>
        )}
        {department.departments?.map((dep) => (
          <TableRow
            key={dep.id}
            onClick={() => navigate(`/department/${dep.id}`)}
          >
            <TableCell>
              <CellIcon bgColor="#3B82F6">
                <FaBuilding />
              </CellIcon>

              <CellContent>
                <CellLabel>Kafedra</CellLabel>
                <CellValue>{dep.name}</CellValue>{" "}
                <CellLabel>{dep.abbr}</CellLabel>
              </CellContent>
            </TableCell>
          </TableRow>
        ))}
      </DepartmentsSection>
    </DashboardContainer>
  );
}
