import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaUser,
  FaCalendar,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaSpinner,
  FaExclamationCircle,
  FaBuilding,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaHourglassHalf,
} from "react-icons/fa";
import api from "../services/api";

// Leaflet icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Styled components
const Container = styled.div`
  padding: 20px;
  z-index: 0;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
  z-index: 1;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #fff;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1;

  &:hover {
    background: #f3f4f6;
    border-color: #d1d5db;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ReportCard = styled.div`
  z-index: 1;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.div`
  margin-bottom: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e5e7eb;
  z-index: 1;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #3b82f6;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  z-index: 1;
  gap: 10px;
  justify-content: space-between;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  z-index: 1;
  margin-bottom: 25px;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  gap: 6px;
`;

const InfoLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  z-index: 1;
`;

const InfoValue = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const ReportContent = styled.div`
  z-index: 1;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  white-space: pre-wrap;
  line-height: 1.6;
  font-size: 16px;
  margin-top: 10px;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MediaBox = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
  height: 400px;
`;

const MediaHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1;
`;

const MediaContent = styled.div`
  padding: 20px;
  height: calc(400px - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
`;

const ReportImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  z-index: 1;
  border-radius: 4px;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  z-index: 1;
  overflow: hidden;

  .leaflet-container {
    width: 100%;
    z-index: 1;
    height: 100%;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 20px;
  font-size: 16px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 20px;
  text-align: center;
  padding: 40px;
  z-index: 1;
  border-radius: 12px;
  border: 1px solid #fecaca;
  max-width: 600px;
  margin: 0 auto;
`;

const ErrorTitle = styled.h3`
  color: #dc2626;
  margin: 0;
  font-size: 20px;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  gap: 10px;
`;

// Parse WKT point
function parseWKTPoint(wkt) {
  if (!wkt) return null;

  try {
    // Handle different WKT formats
    if (wkt.includes("POINT")) {
      const point = wkt.split("POINT")[1];
      if (!point) return null;

      const coords = point.replace(/[()]/g, "").trim();
      const [lng, lat] = coords.split(" ").map(Number);

      if (isNaN(lat) || isNaN(lng)) return null;

      return [lat, lng];
    } else if (wkt.includes("SRID=4326")) {
      // Handle SRID format
      const match = wkt.match(/POINT\s*\(([^)]+)\)/);
      if (match) {
        const coords = match[1].trim().split(" ");
        if (coords.length >= 2) {
          const lng = parseFloat(coords[0]);
          const lat = parseFloat(coords[1]);
          if (!isNaN(lat) && !isNaN(lng)) {
            return [lat, lng];
          }
        }
      }
    }

    return null;
  } catch (error) {
    return null;
  }
}

// Get status display
function getStatusDisplay(status) {
  if (!status) return "Noma'lum";

  const statusStr = String(status).toLowerCase();

  switch (statusStr) {
    case "approved":
    case "completed":
    case "success": // Yangi qo'shildi: "success" statusi uchun
      return "Tasdiqlangan";
    case "rejected":
    case "cancelled":
      return "Rad etilgan";
    case "pending":
    case "submitted":
      return "Kutilmoqda";
    case "active":
      return "Faol";
    default:
      return statusStr.charAt(0).toUpperCase() + statusStr.slice(1);
  }
}

function formatDate(dateString) {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  if (isNaN(date)) return dateString;

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export default function StudentReportDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [practiceDay, setPracticeDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPracticeDay();
  }, [id]);

  const fetchPracticeDay = async () => {
    try {
      setLoading(true);
      setError(null);

      // API dan practice_day ni olish
      const data = await api.getPracticeDay(id);

      if (!data) {
        throw new Error("Amaliyot kuni topilmadi");
      }

      setPracticeDay(data);
    } catch (err) {
      setError(err.message || "Amaliyot kunini yuklab bo'lmadi");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          <FaSpinner
            size={40}
            style={{ animation: "spin 1s linear infinite" }}
          />
          <div>Amaliyot kuni ma'lumotlari yuklanmoqda...</div>
        </LoadingContainer>
      </Container>
    );
  }

  if (error || !practiceDay) {
    return (
      <Container>
        <Header></Header>
        <ErrorContainer>
          <FaExclamationCircle size={48} color="#dc2626" />
          <ErrorTitle>Xatolik yuz berdi</ErrorTitle>
          <p>{error || "Amaliyot kuni topilmadi"}</p>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button
              onClick={fetchPracticeDay}
              style={{
                padding: "10px 20px",
                background: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Qayta yuklash
            </button>
          </div>
        </ErrorContainer>
      </Container>
    );
  }

  // reports.location ham "SRID=4326;POINT (69.205079 41.286777)" formatda
  const reportsData = practiceDay.reports || {};
  const position = parseWKTPoint(practiceDay.location); // "SRID=4326;POINT (69.205321 41.287049)"
  const reportPosition = parseWKTPoint(reportsData.location); // "SRID=4326;POINT (69.205079 41.286777)"
  return (
    <Container>
      <ReportCard>
        {/* Report Information (agar mavjud bo'lsa) */}
        {reportsData && Object.keys(reportsData).length > 0 && (
          <Section>
            <InfoGrid>
              <InfoItem>
                <InfoLabel>Yaratilgan sana</InfoLabel>
                <InfoValue>{formatDate(reportsData.created_at)}</InfoValue>
              </InfoItem>{" "}
            </InfoGrid>

            {reportsData.text && (
              <div style={{ marginTop: "25px" }}>
                <InfoLabel
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Hisobot matni:
                </InfoLabel>
                <ReportContent>{reportsData.text}</ReportContent>
              </div>
            )}

            {/* Media Section */}
            <MediaGrid>
              {/* Image */}
              <MediaBox>
                <MediaHeader>
                  <FaFileAlt />
                  Hisobot rasmi
                </MediaHeader>
                <MediaContent>
                  {reportsData.image ? (
                    <ReportImage
                      src={api.getImageUrl(reportsData.image)}
                      alt="Hisobot rasmi"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <EmptyState>
                      <FaFileAlt size={48} color="#9ca3af" />
                      <div>Rasm yuklanmagan</div>
                    </EmptyState>
                  )}
                </MediaContent>
              </MediaBox>

              {/* Map - report location yoki practice day location */}
              <MediaBox>
                <MediaHeader>
                  <FaMapMarkerAlt />
                  Joylashuv
                </MediaHeader>
                <MediaContent>
                  {position ? (
                    <MapWrapper>
                      <MapContainer
                        center={position}
                        zoom={15}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />

                        {/* 500 metr radiusda qizil dumaloq */}
                        <Circle
                          center={position}
                          radius={500}
                          pathOptions={{
                            fillColor: "red",
                            color: "red",
                            weight: 2,
                            opacity: 0.5,
                            fillOpacity: 0.2,
                          }}
                        />

                        {/* Faqat report joylashuvi - marker */}
                        {reportPosition && <Marker position={reportPosition} />}
                      </MapContainer>
                    </MapWrapper>
                  ) : (
                    <EmptyState>
                      <FaMapMarkerAlt size={48} color="#9ca3af" />
                      <div>Joylashuv ko'rsatilmagan</div>
                    </EmptyState>
                  )}
                </MediaContent>
              </MediaBox>
            </MediaGrid>
          </Section>
        )}

        {/* No Report State */}
        {(!reportsData || Object.keys(reportsData).length === 0) && (
          <Section>
            <SectionTitle>
              <FaFileAlt />
              Hisobot
            </SectionTitle>
            <div style={{ textAlign: "center", padding: "40px" }}>
              <FaExclamationCircle size={48} color="#9ca3af" />
              <h3 style={{ color: "#6b7280", margin: "20px 0 10px 0" }}>
                Hisobot hali yuklanmagan
              </h3>
              <p style={{ color: "#9ca3af" }}>
                Talaba hali bu amaliyot kuni uchun hisobot yuklamagan
              </p>
            </div>
          </Section>
        )}
      </ReportCard>
    </Container>
  );
}
