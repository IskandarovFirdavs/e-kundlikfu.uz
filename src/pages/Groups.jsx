import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import { HiMiniUserGroup } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api.js";

const DashboardContainer = styled.div`
  color: ${(p) => p.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  background-size: 200% 100%;
  margin-top: -3px;
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

const DirectionsSection = styled.div`
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

const DirectionRow = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;

  &:hover {
    background-color: #64646444;
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    margin: 8px 0;
    border: 1px solid ${(props) => props.theme.inputBorder};
    border-radius: 6px;
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
    word-break: break-word;
  }
`;

export default function Groups({ isDark = false, onThemeChange }) {
  const { id } = useParams();
  const directionId = id;

  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();
  const [direction, setDirection] = useState(null);
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
    if (!directionId) return;
    let aborded = false;
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await api.getDirection(directionId, {
          signal: controller.signal,
        });
        if (!aborded) setDirection(data);
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
  }, [directionId]);

  // render
  if (!directionId) return <div className="p-4">No id provided .</div>;
  if (loading) return <div className="p-4">Loading . .</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (!direction)
    return <div className="p-4">No data found for id: {directionId}</div>;
  return (
    <DashboardContainer>
      {/* Directions Section */}
      <DirectionsSection>
        <HeaderRow>
          <SectionTitle>{direction.abbr} GURUHLARI</SectionTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "100%",
            }}
          >
            <Counter>{direction.groups?.length || 0} ta guruh</Counter>
          </div>
        </HeaderRow>
        {direction.groups?.length === 0 && (
          <p style={{ padding: "20px", color: theme.text }}>
            Hozircha guruhlar mavjud emas.
          </p>
        )}
        {direction.groups?.map((grp) => (
          <DirectionRow
            key={grp.id}
            onClick={() => navigate(`/group/${grp.id}`)}
          >
            <TableCell>
              <CellIcon bgColor="#3B82F6">
                <HiMiniUserGroup />
              </CellIcon>
              <CellContent>
                <CellLabel>Guruh</CellLabel>
                <CellValue>{grp.group_number} guruhi</CellValue>{" "}
              </CellContent>
            </TableCell>
          </DirectionRow>
        ))}
      </DirectionsSection>
    </DashboardContainer>
  );
}
