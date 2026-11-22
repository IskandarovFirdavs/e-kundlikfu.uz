import { useEffect, useMemo, useState, useRef } from "react";
import styled from "styled-components";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { FaMapMarkerAlt, FaSearch, FaCheckCircle } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext.jsx";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const DEFAULT_CENTER = [41.311081, 69.279737];
const MAP_TILE_URL =
  import.meta.env.VITE_MAP_TILE_URL ||
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const Picker = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const SearchRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg.search-icon {
    position: absolute;
    left: 12px;
    color: ${({ theme }) => theme.text}80;
  }

  input {
    width: 100%;
    padding: 11px 12px 11px 36px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 9px;
    background: ${({ theme }) => theme.inputBg || theme.background};
    color: ${({ theme }) => theme.text};
    outline: none;
  }

  input:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  .searching-text {
    position: absolute;
    right: 12px;
    font-size: 12px;
    color: ${({ theme }) => theme.text}60;
  }
`;

const Results = styled.div`
  display: grid;
  gap: 6px;
  margin-bottom: 10px;
  max-height: 220px;
  overflow-y: auto;
`;

const ResultButton = styled.button`
  padding: 9px 11px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  text-align: left;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const MapFrame = styled.div`
  height: 330px;
  width: 100%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  position: relative;
  z-index: 0;

  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: 10px;
  }
  .leaflet-control-attribution {
    font-size: 10px;
  }
`;

const MapConfirmBtn = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 10px 20px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.1);
    transform: translateX(-50%) translateY(-2px);
  }
`;

const Hint = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.secondary || theme.text + "80"};
`;

const Selected = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 9px;
  font-size: 13px;
  color: ${({ theme }) => theme.text};
  word-break: break-word;
  svg {
    color: ${({ theme }) => theme.primary};
    flex: 0 0 auto;
    margin-top: 2px;
  }
`;

function parseLocation(value) {
  if (!value) return null;

  // 1. GeoJSON obyekt
  if (typeof value === "object" && value !== null) {
    if (
      value.type === "Point" &&
      Array.isArray(value.coordinates) &&
      value.coordinates.length >= 2
    ) {
      const lng = Number(value.coordinates[0]);
      const lat = Number(value.coordinates[1]);
      return Number.isFinite(lat) && Number.isFinite(lng) ? [lat, lng] : null;
    }
    if (Array.isArray(value.coordinates) && value.coordinates.length >= 2) {
      const lng = Number(value.coordinates[0]);
      const lat = Number(value.coordinates[1]);
      return Number.isFinite(lat) && Number.isFinite(lng) ? [lat, lng] : null;
    }
    return null;
  }

  // 2. WKT matn: "POINT(69.27 41.31)"
  if (typeof value === "string") {
    const match = value.match(
      /POINT\s*\(\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*\)/i,
    );
    if (match) {
      const lng = Number(match[1]);
      const lat = Number(match[2]);
      return Number.isFinite(lat) && Number.isFinite(lng) ? [lat, lng] : null;
    }
    // 3. "lng,lat" formatini ham sinab ko'ramiz
    const parts = value.split(",").map((p) => Number(p.trim()));
    if (parts.length === 2 && parts.every(Number.isFinite)) {
      const [a, b] = parts;
      if (a > 68 && a < 71 && b > 40 && b < 42) return [b, a];
      if (a > 40 && a < 42 && b > 68 && b < 71) return [a, b];
    }
  }

  return null;
}

// Mualammo yechimi: invalidateSize va setView
function MapCenter({ position }) {
  const map = useMap();

  useEffect(() => {
    // Modal ichida xarita ochilganda o'lchamini to'g'rilash
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    if (position && Array.isArray(position)) {
      map.setView(position, 16, { animate: true });
    }
  }, [map, position]);

  return null;
}

function MapEvents({ onChoose }) {
  useMapEvents({
    click: (event) => onChoose(event.latlng.lat, event.latlng.lng),
  });
  return null;
}

export default function PracticeLocationPicker({
  value,
  onChange,
  autoDefault = true,
}) {
  const { t } = useLanguage();
  const initialPosition = useMemo(() => parseLocation(value), [value]);
  const [position, setPosition] = useState(initialPosition);
  const [tempPosition, setTempPosition] = useState(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

  const isSelectedRef = useRef(false);
  const didInit = useRef(false);

  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const parsed = parseLocation(value);
    if (parsed) {
      setPosition(parsed);
    } else if (!value && !didInit.current && autoDefault) {
      didInit.current = true;
      setPosition(DEFAULT_CENTER);
      onChangeRef.current?.({
        location: `POINT(${DEFAULT_CENTER[1]} ${DEFAULT_CENTER[0]})`,
        address: "Temir xiyobini, Toshkent",
      });
    }
  }, [value, autoDefault]);

  const setPoint = (lat, lng, address = "") => {
    const safeLat = Number(Number(lat).toFixed(6));
    const safeLng = Number(Number(lng).toFixed(6));
    setPosition([safeLat, safeLng]);
    onChangeRef.current?.({
      location: `POINT(${safeLng} ${safeLat})`,
      address,
    });
    setResults([]);
    setSearchError("");
  };

  const searchPlaces = async (text) => {
    if (!text.trim()) return;
    setSearching(true);
    setSearchError("");

    try {
      const tashkentBbox = "68.5,40.3,70.6,41.7";

      const params = new URLSearchParams({
        q: text,
        limit: "10",
        bbox: tashkentBbox,
      });

      const response = await fetch(
        `https://photon.komoot.io/api/?${params.toString()}`,
      );
      if (!response.ok) throw new Error("Search request failed");

      const data = await response.json();
      const features = Array.isArray(data.features) ? data.features : [];

      const places = features
        .filter((feature) => Array.isArray(feature.geometry?.coordinates))
        .map((feature, index) => {
          const [lng, lat] = feature.geometry.coordinates;
          const props = feature.properties || {};
          const name = props.name || props.street || props.city || text;

          const details = [
            props.street,
            props.housenumber,
            props.city,
            props.state,
            props.country,
          ]
            .filter(Boolean)
            .filter((part, i, arr) => arr.indexOf(part) === i)
            .join(", ");

          return {
            id: `${index}-${lat}-${lng}`,
            lat,
            lng,
            label: details && details !== name ? `${name} — ${details}` : name,
          };
        });

      if (!places.length) {
        setSearchError(
          "Toshkent shahri va viloyatidan hech qanday joy topilmadi.",
        );
      }
      setResults(places);
    } catch (error) {
      console.error("Qidiruv xatosi:", error);
      setSearchError("Qidiruvda xatolik yuz berdi.");
    } finally {
      setSearching(false);
    }
  };

  useEffect(() => {
    if (isSelectedRef.current) {
      isSelectedRef.current = false;
      return;
    }
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(() => {
      searchPlaces(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const handleChooseResult = (place) => {
    isSelectedRef.current = true;
    setQuery(place.label);
    setPoint(place.lat, place.lng, place.label);
  };

  const handleMapClick = (lat, lng) => {
    if (lat >= 40.3 && lat <= 41.7 && lng >= 68.5 && lng <= 70.6) {
      setTempPosition([lat, lng]);
    } else {
      setTempPosition(null);
    }
  };

  const handleConfirmMapPoint = () => {
    if (tempPosition) {
      setPoint(tempPosition[0], tempPosition[1], "Xaritadan tanlandi");
      setTempPosition(null);
    }
  };

  return (
    <Picker>
      <SearchRow>
        <FaSearch className="search-icon" size={16} />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={
            t("practice.searchPlaceholder") || "Toshkentdan joy qidiring..."
          }
          aria-label={t("practice.searchPlaceholder")}
        />
        {searching && <span className="searching-text">Qidirilmoqda...</span>}
      </SearchRow>

      {results.length > 0 && (
        <Results>
          {results.map((place) => (
            <ResultButton
              key={place.id}
              type="button"
              onClick={() => handleChooseResult(place)}
            >
              <FaMapMarkerAlt
                style={{ marginRight: 7, color: "var(--text-secondary)" }}
              />{" "}
              {place.label}
            </ResultButton>
          ))}
        </Results>
      )}

      {searchError && (
        <Hint role="status" style={{ color: "#ef4444" }}>
          {searchError}
        </Hint>
      )}

      <MapFrame>
        {/* MUHIM: position massiv ekanligiga ishonch hosil qilamiz */}
        <MapContainer
          center={Array.isArray(position) ? position : DEFAULT_CENTER}
          zoom={position ? 16 : 12}
          scrollWheelZoom
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url={MAP_TILE_URL}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors'
          />
          <MapCenter position={position} />
          <MapEvents onChoose={handleMapClick} />

          {position && (
            <Marker position={position}>
              <Popup>Tanlangan joy</Popup>
            </Marker>
          )}

          {tempPosition && (
            <Marker position={tempPosition}>
              <Popup>Yangi nuqta</Popup>
            </Marker>
          )}
        </MapContainer>

        {tempPosition && (
          <MapConfirmBtn type="button" onClick={handleConfirmMapPoint}>
            <FaCheckCircle /> Ushbu nuqtani tanlash
          </MapConfirmBtn>
        )}
      </MapFrame>

      <Hint>
        {t("practice.mapHint") ||
          "Xaritani bosib nuqtani belgilashingiz yoki qidiruv orqali tanlashingiz mumkin."}
      </Hint>

      <Selected>
        <FaMapMarkerAlt />
        <span>
          {position
            ? `Tanlangan nuqta: ${position[0].toFixed(6)}, ${position[1].toFixed(6)}`
            : "Hozircha nuqta tanlanmagan"}
        </span>
      </Selected>
    </Picker>
  );
}
