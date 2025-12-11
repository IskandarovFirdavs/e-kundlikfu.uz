import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 85vh;
  padding: 20px;
  box-sizing: border-box;
  z-index: 0;

  @media (max-width: 768px) {
    padding: 15px;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Breadcrumb = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: left;
  margin-bottom: 20px;
  font-size: 14px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 13px;
  }

  a {
    text-decoration: none;
    color: #3b82f6;
    margin-right: 5px;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #2563eb;
    }
  }

  strong {
    color: #111;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  box-shadow: 0px 4px 20px ${(p) => p.theme.inputBorder};
  border-radius: 20px;
  padding: 30px;
  box-sizing: border-box;
  gap: 30px;

  @media (max-width: 1024px) {
    padding: 25px;
    gap: 25px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    gap: 15px;
    border-radius: 12px;
  }
`;

const Side = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 0;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
    gap: 15px;
  }

  h1 {
    margin: 0 0 15px 0;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: #1f2937;

    @media (max-width: 1024px) {
      font-size: 22px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 12px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  p {
    color: #6b7280;
    font-size: 14px;
    margin-top: 10px;
    line-height: 1.5;

    @media (max-width: 768px) {
      font-size: 13px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const ImageUploadBox = styled.label`
  width: 100%;
  height: 280px;
  border-radius: 16px;
  border: 1.8px dashed #90c2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 48px;
  color: #3a8dfd;
  transition: all 0.3s ease;
  overflow: hidden;
  margin-bottom: 10px;
  border-color: ${(props) => (props.hasError ? "#ef4444" : "#90c2ff")};

  &:hover {
    background: #d9ebff51;
    border-color: ${(props) => (props.hasError ? "#ef4444" : "#3b82f6")};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  input {
    display: none;
  }

  @media (max-width: 768px) {
    height: 240px;
    font-size: 42px;
  }

  @media (max-width: 480px) {
    height: 200px;
    font-size: 36px;
    border-radius: 12px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 16px;
  border: 1.6px solid #d0d7e2;
  border-radius: 12px;
  outline: none;
  resize: vertical;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  background-color: ${(p) => p.theme.inputBorder};
  transition: all 0.3s ease;
  box-sizing: border-box;
  border-color: ${(props) => (props.hasError ? "#ef4444" : "#d0d7e2")};
  background: ${(props) =>
    props.hasError ? "#fef2f2" : props.theme.inputBorder};

  &:focus {
    border-color: ${(props) => (props.hasError ? "#ef4444" : "#3b82f6")};
    box-shadow: ${(props) =>
      props.hasError ? "0 0 8px #ef444455" : "0 0 8px #3b82f655"};
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${(props) => (props.hasError ? "#ef4444" : "#9ca3af")};
  }

  @media (max-width: 768px) {
    height: 180px;
    padding: 14px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    height: 150px;
    padding: 12px;
    font-size: 14px;
    border-radius: 10px;
  }
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Btn = styled.button`
  background: ${(p) => p.theme.buttonBg};
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 12px;
  transition: all 0.3s ease;
  font-family: "Poppins", sans-serif;

  &:hover {
    background: ${(p) => p.theme.buttonHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
    margin-left: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
    margin-left: 8px;
    border-radius: 8px;
    width: 100%;
    margin: 5px 0;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
  }
`;

const LocationInfo = styled.div`
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 10px;
  padding: 15px;
  font-size: 14px;
  color: #0369a1;
  margin: 10px 0;

  strong {
    color: #0c4a6e;
  }

  @media (max-width: 480px) {
    padding: 12px;
    font-size: 13px;
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;

  &::before {
    content: "⚠";
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const RequiredStar = styled.span`
  color: #ef4444;
  margin-left: 4px;
`;
const CENTER = {
  lat: 41.215805,
  lng: 69.226242,
};
function getDistanceFromLatLonInM(lat1, lon1, lat2, lon2) {
  const R = 6371000; // Yer radiusi (m)
  const toRad = (v) => (v * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function Create({ onSubmissionSuccess }) {
  const [isInsideRadius, setIsInsideRadius] = useState(false);
  const [image, setImage] = useState(null);
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Rasm hajmi 5MB dan oshmasligi kerak!");
        return;
      }
      setImage(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, image: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!image) {
      newErrors.image = "Iltimos, surat yuklang";
    }

    if (!notes.trim()) {
      newErrors.notes = "Iltimos, amaliyot haqida ma'lumot kiriting";
    }

    if (!coords.lat || !coords.lng) {
      newErrors.location = "Iltimos, lokatsiyangizni yuboring";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    sessionStorage.setItem("showSubmissionSuccess", "true");

    if (onSubmissionSuccess) {
      onSubmissionSuccess();
    }

    navigate("/home");
  };
  const sendLocation = () => {
    if (!navigator.geolocation) {
      alert("Sizning brauzeringiz geolokatsiyani qo'llab-quvvatlamaydi.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = Number(position.coords.latitude.toFixed(6));
        const lng = Number(position.coords.longitude.toFixed(6));

        setCoords({ lat, lng });

        // masofa hisoblash
        const dist = getDistanceFromLatLonInM(lat, lng, CENTER.lat, CENTER.lng);

        setIsInsideRadius(dist <= 500); // 500 metr radius

        if (dist > 500) {
          alert("Siz 500 metr radiusidan tashqaridasiz!");
        }

        setErrors((prev) => ({ ...prev, location: null }));
      },
      (error) => {
        alert("Lokatsiyani olishda xatolik: " + error.message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  return (
    <Layout>
      <FormContainer>
        {/* CHAP QISMI */}
        <Side>
          <div>
            <h1>
              1. Suratingizni yuklang
              <RequiredStar>*</RequiredStar>
            </h1>

            <ImageUploadBox htmlFor="image-upload" $error={errors.image}>
              {!image ? "+" : <PreviewImg src={image} alt="Ko'rib chiqish" />}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </ImageUploadBox>

            {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}

            <p>
              * Iltimos, yuklangan suratda yuzingiz aniq ko'rinishini
              tekshiring.
            </p>
          </div>
        </Side>

        {/* O'NG QISMI */}
        <Side>
          <div>
            <h1>
              2. Amaliyot davomida bajarilgan ishlar
              <RequiredStar>*</RequiredStar>
            </h1>

            <TextArea
              placeholder="Eslatmalaringizni qo'shing..."
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value);
                if (errors.notes) {
                  setErrors((prev) => ({ ...prev, notes: null }));
                }
              }}
              $error={errors.notes}
            />

            {errors.notes && <ErrorMessage>{errors.notes}</ErrorMessage>}

            <p>
              * Iltimos, lokatsiyangizni biz bilan baham ko'rish uchun quyidagi
              tugmani bosing.
              <RequiredStar>*</RequiredStar>
            </p>

            {errors.location && <ErrorMessage>{errors.location}</ErrorMessage>}
          </div>

          <Buttons>
            <Btn onClick={sendLocation}>Lokatsiyani yuborish</Btn>
            <Btn
              onClick={handleSubmit}
              disabled={!isInsideRadius}
              style={{
                cursor: isInsideRadius ? "pointer" : "not-allowed",
                opacity: isInsideRadius ? 1 : 0.5,
              }}
            >
              Jo'natish
            </Btn>
          </Buttons>
        </Side>
      </FormContainer>
    </Layout>
  );
}
