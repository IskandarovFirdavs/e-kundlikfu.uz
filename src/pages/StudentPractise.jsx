import React, { useState } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// MAIN LAYOUT
const Main = styled.div`
  width: 100%;
  padding: 20px 20px 40px;
  a {
    color: blue;
  }
`;

// CONTAINER
const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  z-index: 0;
`;

// CARD RESPONSIVE
const Card = styled.div`
  display: flex;
  border-radius: 16px;
  box-shadow: 0px 4px 20px ${(p) => p.theme.inputBorder};
  padding: 20px;
  width: 90%;
  max-width: 1200px;
  gap: 25px;

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
  }
`;

// MAP WRAPPER
const MapWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 100%;
    gap: 20px;
  }
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const Info = styled.div`
  p {
    margin: 6px 0;
    font-size: 22px;
    letter-spacing: 1px;
  }

  @media (max-width: 500px) {
    p {
      font-size: 16px;
    }
  }
`;

const Location = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: ${(p) => p.theme.buttonBg};
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.25s;
  margin-left: 50%;

  &:hover {
    background-color: ${(p) => p.theme.buttonHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 14px ${(p) => p.theme.buttonBg}50;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -120%;
    width: 120%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent
    );
    transition: 0.6s;
  }

  &:hover::before {
    left: 120%;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 12px;
    margin-left: 0px;
  }

  a {
    color: white;
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

// FAKE DATA
const fakeProject = {
  title: "TashGRES",
  data: "01.06.2023 10:00",
  teacher: "Omonov Sanjar",
  teacher_num: "+998 90 123 45 67",
  status: "!",
  lat: 41.2995,
  lng: 69.2401,
  location:
    "Manzil: TOSHKENT shahar, Yunusobod tuman, Bog’ishamol ko'chasi, 2. Mo'ljal: KORZINKA",
};

export default function StudentPractise() {
  const { id } = useParams();
  const [project] = useState(fakeProject);

  return (
    <Main>
      <Layout>
        <Card>
          {/* MAP SECTION */}
          <MapWrapper>
            <MapContainer
              center={[project.lat, project.lng]}
              zoom={13}
              style={{ width: "100%", height: "280px", borderRadius: "14px" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[project.lat, project.lng]} />
            </MapContainer>

            <Location>{project.location}</Location>
          </MapWrapper>

          {/* DETAILS */}
          <Details>
            <Title>
              <span>
                <FaLocationDot color="#2563eb" /> {project.title}
              </span>
              <span
                style={{
                  background: "#FFB70321",
                  color: "#FFB703",
                  padding: "6px 10px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {id}
              </span>
            </Title>

            <Info>
              <p>
                <strong>Sana:</strong> {project.data}
              </p>
              <p>
                <strong>O'qituvchi:</strong> {project.teacher}
              </p>
              <p>
                <strong>Telefon raqam:</strong> {project.teacher_num}
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <strong>Holat:</strong>
                <StatIcon bgColor="#f59e0b">{project.status}</StatIcon>
              </p>
            </Info>

            <Button>
              <Link to="/student/practise/create">
                Ma'lumotnomani to'ldirish
              </Link>
            </Button>
          </Details>
        </Card>
      </Layout>
    </Main>
  );
}
