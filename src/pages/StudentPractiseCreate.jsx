import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import api from "../services/api.js";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

// Leaflet icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 85vh;
  padding: 20px;
  box-sizing: border-box;
  z-index: 0;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px ${(p) => p.theme.inputBorder || "rgba(0,0,0,0.1)"};
  overflow: hidden;
`;

const RowContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }
`;

const Side = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PracticeDayInfo = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;

  h3 {
    margin: 0 0 16px 0;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .info-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      font-weight: 600;
      margin-bottom: 4px;
      font-size: 14px;
    }

    span {
      word-break: break-word;
      line-height: 1.5;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

const BigButton = styled.button`
  background: ${(p) => p.theme.buttonBg};
  color: white;
  width: 100%;
  max-width: 300px;
  padding: 14px 20px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-end;

  &:hover {
    background: ${(p) => p.theme.buttonHover};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    max-width: none;
    align-self: stretch;
  }
`;

const ImageUploadBox = styled.label`
  width: 100%;
  height: 320px;
  border-radius: 16px;
  border: 2px dashed #90c2ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 48px;
  color: #3a8dfd;
  margin-bottom: 15px;
  border-color: ${(props) => (props.hasError ? "#ef4444" : "#90c2ff")};
  background: ${(props) => (props.hasError ? "#fef2f2" : "transparent")};

  &:hover {
    background: #d9ebff51;
    border-color: #3b82f6;
  }

  input {
    display: none;
  }

  .placeholder {
    text-align: center;
    font-size: 16px;
    color: #6b7280;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    height: 280px;
    font-size: 40px;
  }
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 220px;
  padding: 16px;
  border: 1.6px solid #d0d7e2;
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  border-color: ${(props) => (props.hasError ? "#ef4444" : "#d0d7e2")};
  background: none;
  color: ${(props) => props.theme.text};
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Btn = styled.button`
  background: ${(p) => p.theme.buttonBg};
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(p) => p.theme.buttonHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StatusBadge = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;

  &.pending {
    background: #fef3c7;
    color: #d97706;
  }
  &.completed {
    background: #d1fae5;
    color: #065f46;
  }
  &.approved {
    background: #dbeafe;
    color: #1e40af;
  }
  &.rejected {
    background: #fee2e2;
    color: #991b1b;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const getStatusDisplay = (status, language) => {
  const labels = {
    uz: {
      pending: "Kutilmoqda",
      completed: "Yakunlangan",
      approved: "Tasdiqlangan",
      rejected: "Rad etilgan",
    },
    ru: {
      pending: "Ожидает",
      completed: "Завершено",
      approved: "Одобрено",
      rejected: "Отклонено",
    },
    en: {
      pending: "Pending",
      completed: "Completed",
      approved: "Approved",
      rejected: "Rejected",
    },
  };
  return labels[language]?.[status] || status;
};

const getStatusClass = (status) => {
  switch (status) {
    case "pending":
      return "pending";
    case "completed":
      return "completed";
    case "approved":
      return "approved";
    case "rejected":
      return "rejected";
    default:
      return "pending";
  }
};

const parseLocation = (locationString) => {
  if (!locationString) return null;
  const match = locationString.match(/POINT\s*\(([^)]+)\)/);
  if (match) {
    const coords = match[1].trim().split(" ");
    if (coords.length >= 2) {
      return { lng: parseFloat(coords[0]), lat: parseFloat(coords[1]) };
    }
  }
  return null;
};

const getDistanceFromLatLonInM = (lat1, lon1, lat2, lon2) => {
  const R = 6371000;
  const toRad = (v) => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export default function Create({ onSubmissionSuccess }) {
  const { practiceDayId } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const [practiceDay, setPracticeDay] = useState(null);
  const [practiceDayLoading, setPracticeDayLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [notes, setNotes] = useState("");
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [isInsideRadius, setIsInsideRadius] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);

  useEffect(() => {
    const loadPracticeDay = async () => {
      if (!practiceDayId) return;
      try {
        setPracticeDayLoading(true);
        const fetched = await api.getPracticeDay(practiceDayId);
        setPracticeDay(fetched);
      } catch (err) {
        setErrors({ load: "load" });
      } finally {
        setPracticeDayLoading(false);
      }
    };
    loadPracticeDay();
  }, [practiceDayId]);

  const targetCoords = practiceDay ? parseLocation(practiceDay.location) : null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: t("report.imageTooLarge"),
        }));
        return;
      }
      setImageFile(file);
      setImage(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, image: null }));
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setErrors((prev) => ({
        ...prev,
        location: t("report.locationUnsupported"),
      }));
      return;
    }

    setLocationLoading(true);
    setErrors((prev) => ({ ...prev, location: null, radius: null }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = Number(position.coords.latitude.toFixed(6));
        const lng = Number(position.coords.longitude.toFixed(6));
        setCoords({ lat, lng });
        setLocationLoading(false);

        if (targetCoords) {
          const dist = getDistanceFromLatLonInM(
            lat,
            lng,
            targetCoords.lat,
            targetCoords.lng,
          );
          const inside = dist <= 500;
          setIsInsideRadius(inside);
          if (!inside) {
            setErrors((prev) => ({
              ...prev,
              radius: t("report.radiusError"),
            }));
          } else {
            setErrors((prev) => ({ ...prev, radius: null }));
          }
        }
      },
      (error) => {
        setLocationLoading(false);
        let msg = t("report.locationFailed");
        switch (error.code) {
          case error.PERMISSION_DENIED:
            msg = t("report.locationDenied");
            break;
          case error.POSITION_UNAVAILABLE:
            msg = t("report.locationUnavailable");
            break;
          case error.TIMEOUT:
            msg = t("report.locationTimeout");
            break;
          default:
            msg = t("report.locationUnknown") + " " + error.message;
        }
        setErrors((prev) => ({ ...prev, location: msg }));
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 60000,
      },
    );
  };

  const validateForm = () => {
    const newErrors = {};
    if (!imageFile) newErrors.image = t("report.uploadImage");
    if (!notes.trim()) newErrors.notes = t("report.writeNote");
    if (!coords.lat) newErrors.location = t("report.getLocationError");
    if (targetCoords && !isInsideRadius)
      newErrors.radius = t("report.outsideRadius");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("practice_day", practiceDay.id);
      formData.append("text", notes);
      formData.append("location", `POINT(${coords.lng} ${coords.lat})`);
      if (imageFile) formData.append("image", imageFile);

      await api.createReport(formData);
      if (onSubmissionSuccess) onSubmissionSuccess();
      navigate("/student/dashboard");
    } catch (err) {
      let msg = t("report.submitError");
      if (err.response?.status === 409) msg = t("report.duplicate");
      setErrors({ submit: msg });
    } finally {
      setLoading(false);
    }
  };

  const targetIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  if (practiceDayLoading) {
    return (
      <Layout>
        <p>{t("report.loading")}</p>
      </Layout>
    );
  }

  if (!practiceDay) {
    return (
      <Layout>
        <ErrorMessage>{t("report.notFound")}</ErrorMessage>
      </Layout>
    );
  }

  return (
    <Layout>
      {!showForm ? (
        <FormContainer>
          <RowContainer>
            <Side>
              <PracticeDayInfo>
                <h3>
                  {t("report.practiceDay")} #{practiceDay.id}
                  <StatusBadge className={getStatusClass(practiceDay.status)}>
                    {getStatusDisplay(practiceDay.status, language)}
                  </StatusBadge>
                </h3>
                <div className="info-row">
                  <strong>{t("report.date")}</strong>
                  <span>{practiceDay.date}</span>
                </div>
                <div className="info-row">
                  <strong>{t("report.supervisor")}</strong>
                  <span>{practiceDay.duty_name}</span>
                </div>
                <div className="info-row">
                  <strong>{t("report.organization")}</strong>
                  <span>{practiceDay.org_name}</span>
                </div>
                <div className="info-row">
                  <strong>{t("report.address")}</strong>
                  <span>{practiceDay.address || t("report.notSpecified")}</span>
                </div>
                <div className="info-row">
                  <strong>{t("report.time")}</strong>
                  <span>
                    {practiceDay.start_time} - {practiceDay.end_time}
                  </span>
                </div>
              </PracticeDayInfo>
            </Side>

            <Side>
              {targetCoords?.lat && targetCoords?.lng ? (
                <MapWrapper>
                  <MapContainer
                    center={[targetCoords.lat, targetCoords.lng]}
                    zoom={15}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker
                      position={[targetCoords.lat, targetCoords.lng]}
                      icon={targetIcon}
                    >
                      <Popup>
                        <strong>{practiceDay.org_name}</strong>
                        <br />
                        {practiceDay.address || "Manzil ko'rsatilmagan"}
                      </Popup>
                    </Marker>
                    <Circle
                      center={[targetCoords.lat, targetCoords.lng]}
                      radius={500}
                      pathOptions={{ color: "#3b82f6", fillOpacity: 0.1 }}
                    />
                  </MapContainer>
                </MapWrapper>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px",
                    color: "#6b7280",
                  }}
                >
                  {t("report.noLocation")}
                </div>
              )}
              <BigButton onClick={() => setShowForm(true)}>
                {t("report.upload")}
              </BigButton>
            </Side>
          </RowContainer>
        </FormContainer>
      ) : (
        <FormContainer>
          <RowContainer>
            <Side>
              <h2>{t("report.uploadPhoto")}</h2>
              <ImageUploadBox htmlFor="image-upload" hasError={errors.image}>
                {!image ? (
                  <Center>
                    <div>+</div>
                    <div className="placeholder">{t("report.choosePhoto")}</div>
                  </Center>
                ) : (
                  <PreviewImg src={image} alt={t("report.preview")} />
                )}
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  capture="environment"
                />
              </ImageUploadBox>
              {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}
            </Side>

            <Side>
              <h2>{t("report.work")}</h2>
              <TextArea
                placeholder={t("report.workPlaceholder")}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                hasError={errors.notes}
              />
              {errors.notes && <ErrorMessage>{errors.notes}</ErrorMessage>}

              <Buttons>
                <Btn onClick={getLocation} disabled={locationLoading}>
                  {locationLoading
                    ? t("report.gettingLocation")
                    : t("report.getLocation")}
                </Btn>
                <Btn
                  onClick={handleSubmit}
                  disabled={loading || !coords.lat || !isInsideRadius}
                >
                  {loading ? t("report.sending") : t("report.send")}
                </Btn>
              </Buttons>

              {errors.location && (
                <ErrorMessage>⚠ {errors.location}</ErrorMessage>
              )}
              {errors.radius && <ErrorMessage>⚠ {errors.radius}</ErrorMessage>}
              {errors.submit && <ErrorMessage>⚠ {errors.submit}</ErrorMessage>}
              {coords.lat && !errors.radius && (
                <p style={{ color: "#10b981", marginTop: "10px" }}>
                  ✓ {t("report.locationSuccess")}
                </p>
              )}
            </Side>
          </RowContainer>
        </FormContainer>
      )}
    </Layout>
  );
}
