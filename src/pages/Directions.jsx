import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import {
  FaDirections,
  FaUsers,
  FaUserGraduate,
  FaSchool,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
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

const DashboardContainer = styled.div`
  color: ${(p) => p.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(66, 153, 225, 0.15) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: ${colorFlow} 4s linear infinite;
  margin-top: -3px;
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

const DirectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 0;
`;

const DirectionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const DirectionIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8b5cf6;
  color: white;
  font-size: 18px;
`;

const DirectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DirectionName = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;

const DirectionMeta = styled.span`
  font-size: 13px;
  opacity: 0.7;
  color: ${(props) => props.theme.text};
`;

const GroupsContainer = styled.div`
  margin-top: 15px;
  padding-left: 55px;
  display: ${(props) => (props.isOpen ? "block" : "none")};

  @media (max-width: 480px) {
    padding-left: 20px;
  }
`;

const GroupRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme.statCard};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #64646444;
    transform: translateX(5px);
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 12px;
  }
`;

const GroupIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b82f6;
  color: white;
  font-size: 14px;
`;

const GroupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
`;

const GroupName = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.text};
`;

const GroupStats = styled.span`
  font-size: 12px;
  opacity: 0.7;
  color: ${(props) => props.theme.text};
`;

const ChevronIcon = styled.div`
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: ${(props) => props.theme.text};
  opacity: 0.7;
`;

// Mock data for Head of Department
const hodData = {
  directions: [
    {
      id: 1,
      name: "Axborot Texnologiyalari",
      code: "AT",
      totalGroups: 3,
      totalStudents: 75,
      groups: [
        {
          id: 1,
          name: "941-22",
          studentCount: 25,
          activePractices: 18,
          completedPractices: 7,
        },
        {
          id: 2,
          name: "942-22",
          studentCount: 25,
          activePractices: 22,
          completedPractices: 3,
        },
        {
          id: 3,
          name: "943-22",
          studentCount: 25,
          activePractices: 15,
          completedPractices: 10,
        },
      ],
    },
    {
      id: 2,
      name: "Kompyuter Muhandisligi",
      code: "KM",
      totalGroups: 2,
      totalStudents: 50,
      groups: [
        {
          id: 4,
          name: "951-22",
          studentCount: 25,
          activePractices: 20,
          completedPractices: 5,
        },
        {
          id: 5,
          name: "952-22",
          studentCount: 25,
          activePractices: 12,
          completedPractices: 13,
        },
      ],
    },
    {
      id: 3,
      name: "Dasturiy Injiniring",
      code: "DI",
      totalGroups: 1,
      totalStudents: 25,
      groups: [
        {
          id: 6,
          name: "961-22",
          studentCount: 25,
          activePractices: 8,
          completedPractices: 17,
        },
      ],
    },
  ],
};

// Calculate stats from data
const calculateStats = (directions) => {
  let totalDirections = directions.length;
  let totalGroups = 0;
  let totalStudents = 0;
  let totalPractices = 0;

  directions.forEach((direction) => {
    totalGroups += direction.totalGroups;
    totalStudents += direction.totalStudents;
    direction.groups.forEach((group) => {
      totalPractices += group.activePractices + group.completedPractices;
    });
  });

  return {
    totalDirections,
    totalGroups,
    totalStudents,
    totalPractices,
  };
};

export default function Directions({ isDark = false }) {
  const theme = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();
  const location = useLocation();
  const [openDirections, setOpenDirections] = useState({});
  const stats = calculateStats(hodData.directions);

  const toggleDirection = (directionId) => {
    setOpenDirections((prev) => ({
      ...prev,
      [directionId]: !prev[directionId],
    }));
  };

  const handleGroupClick = (groupName) => {
    navigate(`/students`);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/file.png";
    link.download = "hod_report.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardContainer>
      <StatsGrid>
        <StatCard>
          <StatContent>
            <Statdiv>
              <StatLabel>Yo'nalishlar</StatLabel>
              <StatIcon bgColor="#8b5cf6">
                <FaDirections />
              </StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#8b5cf634" numberColor="#8b5cf6">
                {stats.totalDirections}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatContent>
            <Statdiv>
              <StatLabel>Guruhlar</StatLabel>
              <StatIcon bgColor="#3b82f6">
                <FaUsers />
              </StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#3b82f634" numberColor="#3b82f6">
                {stats.totalGroups}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatContent>
            <Statdiv>
              <StatLabel>Talabalar</StatLabel>
              <StatIcon bgColor="#10b981">
                <FaUserGraduate />
              </StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#10b98134" numberColor="#10b981">
                {stats.totalStudents}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatContent>
            <Statdiv>
              <StatLabel>Amaliyotlar</StatLabel>
              <StatIcon bgColor="#f59e0b">
                <FaSchool />
              </StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#f59f0b34" numberColor="#f59e0b">
                {stats.totalPractices}
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>
      </StatsGrid>

      {/* Directions Section */}
      <DirectionsSection>
        <HeaderRow>
          <SectionTitle>YO'NALISHLAR VA GURUHLAR</SectionTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "100%",
            }}
          >
            <Counter>{hodData.directions.length} ta yo'nalish</Counter>
          </div>
        </HeaderRow>

        {hodData.directions.map((direction) => (
          <DirectionRow key={direction.id}>
            <DirectionHeader onClick={() => toggleDirection(direction.id)}>
              <DirectionInfo>
                <DirectionIcon>
                  <FaDirections />
                </DirectionIcon>
                <DirectionContent>
                  <DirectionName>
                    {direction.name} ({direction.code})
                  </DirectionName>
                  <DirectionMeta>
                    {direction.totalGroups} guruh • {direction.totalStudents}{" "}
                    talaba
                  </DirectionMeta>
                </DirectionContent>
              </DirectionInfo>
              <ChevronIcon isOpen={openDirections[direction.id]}>
                <FaChevronDown />
              </ChevronIcon>
            </DirectionHeader>

            <GroupsContainer isOpen={openDirections[direction.id]}>
              {direction.groups.map((group) => (
                <GroupRow
                  key={group.id}
                  onClick={() => handleGroupClick(group.name)}
                >
                  <GroupIcon>
                    <FaUsers />
                  </GroupIcon>
                  <GroupContent>
                    <GroupName>{group.name} guruhi</GroupName>
                    <GroupStats>
                      {group.studentCount} talaba • {group.activePractices} faol
                      • {group.completedPractices} tugatilgan
                    </GroupStats>
                  </GroupContent>
                  <ChevronIcon isOpen={false}>
                    <FaChevronRight />
                  </ChevronIcon>
                </GroupRow>
              ))}
            </GroupsContainer>
          </DirectionRow>
        ))}
      </DirectionsSection>
    </DashboardContainer>
  );
}
