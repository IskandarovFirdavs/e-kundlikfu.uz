import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaPlus,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaUniversity,
  FaUser,
  FaBuilding,
  FaDirections,
  FaUsers,
  FaCalendarAlt,
  FaTimes,
  FaSave,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
  FaEye,
  FaFilter,
  FaSync,
  FaCaretDown,
  FaFileAlt,
  FaDownload,
  FaEyeSlash,
} from "react-icons/fa";
import api from "../services/api";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Modern gradient animation
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const slideIn = keyframes`
  from { transform: translateY(-10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Components - Modernized
const DashboardContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
  background: ${(p) => p.theme.backgroundGradient || p.theme.background};
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  animation: ${fadeIn} 0.3s ease-out;
  z-index: 0;
`;

const Sidebar = styled.div`
  width: 280px;
  background: ${(p) => p.theme.cardBg};
  backdrop-filter: blur(10px);
  border-right: 1px solid ${(p) => p.theme.border};
  padding: 24px 0;
  position: absolute;
  height: 100%;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    width: 240px;
  }

  @media (max-width: 768px) {
    width: 70px;
    padding: 20px 0;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.primary}40;
    border-radius: 10px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 280px;
  padding: 32px;
  max-width: calc(100vw - 280px);
  z-index: -1;
  @media (max-width: 1024px) {
    margin-left: 240px;
    padding: 24px;
    max-width: calc(100vw - 240px);
  }

  @media (max-width: 768px) {
    margin-left: 70px;
    padding: 16px;
    max-width: calc(100vw - 70px);
  }
`;

const SidebarHeader = styled.div`
  padding: 0 24px 24px;
  border-bottom: 1px solid ${(p) => p.theme.border}40;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    padding: 0 16px 16px;
  }
`;

const AppTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;

  -webkit-background-clip: text;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.3rem;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 4px;
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  color: ${(p) => p.theme.text}90;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 4px solid transparent;
  gap: 16px;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${(p) => p.theme.primary}08;
    color: ${(p) => p.theme.primary};
    transform: translateX(4px);

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background: ${(p) => p.theme.primary};
    }
  }

  &.active {
    background: ${(p) => p.theme.primary}12;
    color: ${(p) => p.theme.primary};
    border-left-color: ${(p) => p.theme.primary};

    &:after {
      content: "";
      position: absolute;
      right: 24px;
      width: 8px;
      height: 8px;
      background: ${(p) => p.theme.primary};
      border-radius: 50%;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 16px;

    &:after {
      display: none;
    }

    span {
      display: none;
    }
  }
`;

const MenuIcon = styled.div`
  font-size: 18px;
  width: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 20px;
  animation: ${slideIn} 0.4s ease-out;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(p) => p.theme.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  &:before {
    content: "";
    width: 4px;
    height: 24px;
    background: ${(p) => p.theme.primary};
    border-radius: 2px;
  }
`;

const ActionButton = styled.button`
  background: linear-gradient(
    135deg,
    ${(p) => p.theme.primary},
    ${(p) => p.theme.secondary || "#667eea"}
  );
  background-size: 200% 200%;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${(p) => p.theme.primary}40;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px ${(p) => p.theme.primary}60;
    animation: ${gradientAnimation} 2s ease infinite;
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const RefreshButton = styled(ActionButton)`
  background: ${(p) => p.theme.cardBg};
  color: ${(p) => p.theme.text};
  border: 1px solid ${(p) => p.theme.border};
  box-shadow: none;

  &:hover {
    background: ${(p) => p.theme.background};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Toolbar = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  align-items: center;
  animation: ${slideIn} 0.5s ease-out;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.cardBg};
  border: 2px solid ${(p) => p.theme.border}60;
  border-radius: 12px;
  padding: 12px 16px;
  flex: 1;
  max-width: 400px;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:focus-within {
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 4px 20px ${(p) => p.theme.primary}20;
  }
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  color: ${(p) => p.theme.text};
  font-size: 15px;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${(p) => p.theme.text}60;
  }
`;

const DataTable = styled.div`
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.border}40;
  border-radius: 16px;
  overflow: hidden;
  overflow-x: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  animation: ${slideIn} 0.6s ease-out;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1000px;
`;

const TableHeader = styled.thead`
  background: ${(p) => p.theme.background};
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${(p) => p.theme.border}20;
  transition: all 0.2s ease;

  &:hover {
    background: ${(p) => p.theme.primary}05;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const TableHeaderCell = styled.th.withConfig({
  shouldForwardProp: (prop) => prop !== "$sortable",
})`
  padding: 18px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: ${(p) => p.theme.text}90;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: ${(p) => (p.$sortable ? "pointer" : "default")};
  user-select: none;
  position: relative;

  &:hover {
    background: ${(p) => p.theme.background};

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: ${(p) => p.theme.primary}40;
    }
  }
`;

const TableCell = styled.td`
  padding: 16px;
  font-size: 14px;
  color: ${(p) => p.theme.text}80;
`;

const ActionCell = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
`;

const IconButton = styled.button`
  border: none;
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text}70;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  &.view {
    background: ${(p) => p.theme.primary}10;
    color: ${(p) => p.theme.primary};

    &:hover {
      background: ${(p) => p.theme.primary};
      color: white;
      transform: scale(1.05);
    }
  }

  &.edit {
    background: #3b82f610;
    color: #3b82f6;

    &:hover {
      background: #3b82f6;
      color: white;
      transform: scale(1.05);
    }
  }

  &.delete {
    background: #ef444410;
    color: #ef4444;

    &:hover {
      background: #ef4444;
      color: white;
      transform: scale(1.05);
    }
  }

  &.download {
    background: #10b98110;
    color: #10b981;

    &:hover {
      background: #10b981;
      color: white;
      transform: scale(1.05);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const StatusBadge = styled.span`
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;

  &.active {
    background: #10b98120;
    color: #10b981;
    border: 1px solid #10b98140;
  }

  &.inactive {
    background: #6b728020;
    color: #6b7280;
    border: 1px solid #6b728040;
  }

  &.pending {
    background: #f59e0b20;
    color: #f59e0b;
    border: 1px solid #f59e0b40;
  }

  &.approved {
    background: #10b98120;
    color: #10b981;
    border: 1px solid #10b98140;
  }

  &.rejected {
    background: #ef444420;
    color: #ef4444;
    border: 1px solid #ef444440;
  }

  &.submitted {
    background: #3b82f620;
    color: #3b82f6;
    border: 1px solid #3b82f640;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-top: 1px solid ${(p) => p.theme.border}30;
  background: ${(p) => p.theme.background};
`;

const PaginationInfo = styled.div`
  font-size: 14px;
  color: ${(p) => p.theme.text}60;
  font-weight: 500;
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const PageButton = styled.button`
  padding: 10px 16px;
  border: 1px solid ${(p) => p.theme.border};
  background: ${(p) => p.theme.cardBg};
  color: ${(p) => p.theme.text};
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    border-color: ${(p) => p.theme.primary};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 4px 12px ${(p) => p.theme.primary}40;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: ${(p) => p.theme.text}60;

  svg {
    font-size: 64px;
    margin-bottom: 20px;
    opacity: 0.5;
  }
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 60px;
  color: ${(p) => p.theme.primary};

  svg {
    animation: ${spin} 1s linear infinite;
  }
`;

const Message = styled.div`
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  animation: ${slideIn} 0.3s ease-out;

  &.error {
    background: #ef444415;
    color: #ef4444;
    border: 1px solid #ef444440;
  }

  &.success {
    background: #10b98115;
    color: #10b981;
    border: 1px solid #10b98140;
  }

  &.info {
    background: #3b82f615;
    color: #3b82f6;
    border: 1px solid #3b82f640;
  }
`;

// Modal Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
  animation: ${fadeIn} 0.2s ease-out;
`;

const ModalContent = styled.div`
  background: ${(p) => p.theme.cardBg};
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  max-width: 800px;
  max-height: 70vh;
  overflow-y: auto;
  animation: ${slideIn} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 24px;
    max-width: 95%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: ${(p) => p.theme.text};
  font-size: 1.5rem;
  font-weight: 700;
`;

const ModalCloseButton = styled.button`
  background: ${(p) => p.theme.background};
  border: none;
  color: ${(p) => p.theme.text}70;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: ${(p) => p.theme.text};
    background: ${(p) => p.theme.border}40;
  }
`;

// Report Detail Components
const ReportDetailContainer = styled.div`
  padding: 20px 0;
`;

const ReportSection = styled.div`
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${(p) => p.theme.border}30;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const ReportSectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(p) => p.theme.primary};
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ReportField = styled.div`
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ReportLabel = styled.span`
  font-weight: 600;
  color: ${(p) => p.theme.text}80;
  min-width: 120px;
`;

const ReportValue = styled.span`
  flex: 1;
  color: ${(p) => p.theme.text};
  line-height: 1.6;
`;

const ReportTextArea = styled.div`
  background: ${(p) => p.theme.background};
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  border: 1px solid ${(p) => p.theme.border}30;
  white-space: pre-wrap;
  line-height: 1.6;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
  position: relative;
`;

// Styled components qismiga qo'shing:
const FormGroupWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;
`;

// FormInput ni yangilang:
const FormInput = styled.input`
  background: none;
  width: 100%;
  padding: 14px;
  padding-right: ${(props) => (props.$hasPasswordToggle ? "45px" : "14px")};
  border: 2px solid ${(p) => p.theme.border}60;
  border-radius: 10px;
  color: ${(p) => p.theme.text};
  font-size: 15px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 4px 20px ${(p) => p.theme.primary}20;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${(p) => p.theme.text}90;
  font-size: 14px;
`;

const FormSelect = styled.select`
  background: ${(p) => p.theme.inputBorder};
  width: 100%;
  padding: 14px;
  border: 2px solid ${(p) => p.theme.border}60;
  border-radius: 10px;
  color: ${(p) => p.theme.text};
  font-size: 15px;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 4px 20px ${(p) => p.theme.primary}20;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const FormTextArea = styled.textarea`
  background: none;
  width: 100%;
  padding: 14px;
  border: 2px solid ${(p) => p.theme.border}60;
  border-radius: 10px;
  color: ${(p) => p.theme.text};
  font-size: 15px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 4px 20px ${(p) => p.theme.primary}20;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PasswordToggle = styled.button`
  &:hover {
    color: ${(p) => p.theme.primary};
    background: ${(p) => p.theme.background};
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid ${(p) => p.theme.border}40;
`;

const SecondaryButton = styled.button`
  background: ${(p) => p.theme.cardBg};
  color: ${(p) => p.theme.text};
  border: 2px solid ${(p) => p.theme.border}60;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${(p) => p.theme.background};
    border-color: ${(p) => p.theme.primary}60;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const DeleteConfirmModal = styled.div`
  text-align: center;
  padding: 24px;
`;

const DeleteIcon = styled.div`
  font-size: 64px;
  color: #ef4444;
  margin-bottom: 24px;
  opacity: 0.8;
`;

const DeleteText = styled.p`
  margin-bottom: 32px;
  color: ${(p) => p.theme.text};
  font-size: 16px;
  line-height: 1.6;
`;

const DeleteActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const DeleteButton = styled.button`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(239, 68, 68, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Loading skeleton
const SkeletonRow = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${(p) => p.theme.border}20;

  div {
    background: linear-gradient(
      90deg,
      ${(p) => p.theme.border}40,
      ${(p) => p.theme.border}60,
      ${(p) => p.theme.border}40
    );
    background-size: 200% 100%;
    animation: ${gradientAnimation} 1.5s ease-in-out infinite;
    border-radius: 6px;
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

// Cache keys
const CACHE_KEYS = {
  users: "users_cache",
  faculties: "faculties_cache",
  departments: "departments_cache",
  directions: "directions_cache",
  groups: "groups_cache",
  practices: "practices_cache",
  reports: "reports_cache",
};

export const MediaRow = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MediaBox = styled.div`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.border || "#ddd"};
  border-radius: 8px;
  padding: 10px;
`;

export const MediaLabel = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const ReportImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
`;

// Main Component
export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("users");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});
  const [relatedData, setRelatedData] = useState({});
  const [cacheTimestamp, setCacheTimestamp] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [showReportDetail, setShowReportDetail] = useState(false);
  const [reportDetailLoading, setReportDetailLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState({});

  function parseWKTPoint(wkt) {
    if (!wkt) return null;

    const point = wkt.split("POINT")[1];
    if (!point) return null;

    const [lng, lat] = point.replace(/[()]/g, "").trim().split(" ").map(Number);

    return [lat, lng]; // Leaflet uchun
  }
  const togglePasswordVisibility = (fieldName) => {
    setPasswordVisible((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  // Menu Items - Added reports
  const menuItems = [
    {
      id: "users",
      label: "Foydalanuvchilar",
      icon: <FaUser />,
      path: "/admin/users",
    },
    {
      id: "faculties",
      label: "Fakultetlar",
      icon: <FaUniversity />,
      path: "/admin/faculties",
    },
    {
      id: "departments",
      label: "Kafedralar",
      icon: <FaBuilding />,
      path: "/admin/departments",
    },
    {
      id: "directions",
      label: "Yo'nalishlar",
      icon: <FaDirections />,
      path: "/admin/directions",
    },
    {
      id: "groups",
      label: "Guruhlar",
      icon: <FaUsers />,
      path: "/admin/groups",
    },
    {
      id: "practices",
      label: "Amalyot kunlari",
      icon: <FaCalendarAlt />,
      path: "/admin/practices",
    },
    {
      id: "reports",
      label: "Hisobotlar",
      icon: <FaFileAlt />,
      path: "/admin/reports",
    },
  ];

  // Fetch related data for foreign keys
  const fetchRelatedData = useCallback(async () => {
    try {
      const [users, faculties, departments, directions, groups] =
        await Promise.all([
          api.getUsers().catch(() => []),
          api.getFaculties().catch(() => []),
          api.getDepartments().catch(() => []),
          api.getDirections().catch(() => []),
          api.getGroups().catch(() => []),
        ]);

      setRelatedData({
        users: Array.isArray(users)
          ? users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {})
          : {},
        faculties: Array.isArray(faculties)
          ? faculties.reduce(
              (acc, faculty) => ({ ...acc, [faculty.id]: faculty }),
              {}
            )
          : {},
        departments: Array.isArray(departments)
          ? departments.reduce((acc, dept) => ({ ...acc, [dept.id]: dept }), {})
          : {},
        directions: Array.isArray(directions)
          ? directions.reduce((acc, dir) => ({ ...acc, [dir.id]: dir }), {})
          : {},
        groups: Array.isArray(groups)
          ? groups.reduce((acc, group) => ({ ...acc, [group.id]: group }), {})
          : {},
      });
    } catch (err) {}
  }, []);

  // Fetch data with caching
  const fetchData = useCallback(
    async (forceRefresh = false) => {
      setLoading(true);
      setError(null);

      const cacheKey = CACHE_KEYS[activeMenu];
      const cached = localStorage.getItem(cacheKey);
      const cachedTimestamp = cacheTimestamp[activeMenu];
      const now = Date.now();

      // Use cache if less than 5 minutes old and not forcing refresh
      if (
        !forceRefresh &&
        cached &&
        cachedTimestamp &&
        now - cachedTimestamp < 5 * 60 * 1000
      ) {
        try {
          const parsedData = JSON.parse(cached);
          setData(Array.isArray(parsedData) ? parsedData : []);
          setLoading(false);
          return;
        } catch (e) {
          // Cache invalid, continue with API call
        }
      }

      try {
        let response;
        switch (activeMenu) {
          case "users":
            response = await api.getUsers();
            break;
          case "faculties":
            response = await api.getFaculties();
            break;
          case "departments":
            response = await api.getDepartments();
            break;
          case "directions":
            response = await api.getDirections();
            break;
          case "groups":
            response = await api.getGroups();
            break;
          case "practices":
            response = await api.getPracticeDays();
            break;
          case "reports":
            response = await api.getMyReports();
            break;
          default:
            response = [];
        }

        if (Array.isArray(response)) {
          setData(response);
          // Cache the response
          localStorage.setItem(cacheKey, JSON.stringify(response));
          setCacheTimestamp((prev) => ({ ...prev, [activeMenu]: now }));
        } else {
          setData([]);
        }
      } catch (err) {
        setError(`Failed to fetch ${activeMenu}: ${err.message}`);
        setData([]);
      } finally {
        setLoading(false);
      }
    },
    [activeMenu, cacheTimestamp]
  );

  // Initial fetch and fetch related data
  useEffect(() => {
    fetchData();
    if (activeMenu !== "reports") {
      fetchRelatedData();
    }
  }, [activeMenu, fetchData, fetchRelatedData]);

  // Fetch report detail
  const fetchReportDetail = useCallback(async (reportId) => {
    setReportDetailLoading(true);
    try {
      const report = await api.getMyReport(reportId);
      setSelectedReport(report);
      setShowReportDetail(true);
    } catch (err) {
      setError(`Failed to fetch report details: ${err.message}`);
    } finally {
      setReportDetailLoading(false);
    }
  }, []);

  // Handle create/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (editingItem) {
        // Update
        switch (activeMenu) {
          case "users":
            await api.updateUser(editingItem.id, formData);
            break;
          case "faculties":
            await api.updateFaculty(editingItem.id, formData);
            break;
          case "departments":
            await api.updateDepartment(editingItem.id, formData);
            break;
          case "directions":
            await api.updateDirection(editingItem.id, formData);
            break;
          case "groups":
            await api.updateGroup(editingItem.id, formData);
            break;
          case "practices":
            await api.updatePracticeDay(editingItem.id, formData);
            break;
          case "reports":
            // Reports are read-only
            break;
        }
        setSuccess(`${getFormTemplate()?.title} muvaffaqiyatli yangilandi!`);
      } else {
        // Create
        switch (activeMenu) {
          case "users":
            await api.createUser(formData);
            break;
          case "faculties":
            await api.createFaculty(formData);
            break;
          case "departments":
            await api.createDepartment(formData);
            break;
          case "directions":
            await api.createDirection(formData);
            break;
          case "groups":
            await api.createGroup(formData);
            break;
          case "practices":
            await api.createPracticeDay(formData);
            break;
          case "reports":
            // Reports are read-only
            break;
        }
        setSuccess(`${getFormTemplate()?.title} muvaffaqiyatli yaratildi!`);
      }

      setShowModal(false);
      setFormData({});
      setEditingItem(null);
      // Clear cache and refetch
      localStorage.removeItem(CACHE_KEYS[activeMenu]);
      fetchData(true);

      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      const errorMsg = err.message || "Failed to save";
      setError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle delete
  const handleDelete = async () => {
    if (!deleteItemId) return;

    setIsDeleting(true);
    try {
      switch (activeMenu) {
        case "users":
          await api.deleteUser(deleteItemId, { is_active: false });
          break;
        case "faculties":
          await api.deleteFaculty(deleteItemId);
          break;
        case "departments":
          await api.deleteDepartment(deleteItemId);
          break;
        case "directions":
          await api.deleteDirection(deleteItemId);
          break;
        case "groups":
          await api.deleteGroup(deleteItemId);
          break;
        case "practices":
          await api.deletePracticeDay(deleteItemId);
          break;
        case "reports":
          // Reports are read-only, no delete
          break;
      }

      setSuccess(`${getFormTemplate()?.title} muvaffaqiyatli o'chirildi!`);
      setShowDeleteModal(false);
      setDeleteItemId(null);
      // Clear cache and refetch
      localStorage.removeItem(CACHE_KEYS[activeMenu]);
      fetchData(true);

      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message || "Failed to delete");
    } finally {
      setIsDeleting(false);
    }
  };

  // Handle edit
  const handleEdit = (item) => {
    if (activeMenu === "reports") return; // Reports are read-only
    setEditingItem(item);
    setFormData(item);
    setShowModal(true);
  };

  // Handle add new
  const handleAddNew = () => {
    if (activeMenu === "reports") return; // Reports are read-only
    setEditingItem(null);
    setFormData({});
    setShowModal(true);
  };

  // Handle view report
  const handleViewReport = (reportId) => {
    fetchReportDetail(reportId);
  };

  // Hisobotni yuklab olish
  const handleDownloadReport = (report) => {
    const reportText = `
TALABA MA’LUMOTLARI
===================
Talaba ID: ${report.student?.id || "Mavjud emas"}
Ismi: ${report.student?.first_name || "Mavjud emas"}
Familiyasi: ${report.student?.last_name || "Mavjud emas"}
Guruh: ${report.student?.group || "Mavjud emas"}
Yo‘nalish: ${report.student?.direction || "Mavjud emas"}

HISOBOT MA’LUMOTLARI
===================
Amaliyot kuni ID: ${report.practice_day || "Mavjud emas"}
Matn:
${report.text || "Mavjud emas"}

Yaratilgan sana: ${
      report.created_at
        ? new Date(report.created_at).toLocaleString()
        : "Mavjud emas"
    }
${
  report.updated_at
    ? `Oxirgi yangilanish: ${new Date(report.updated_at).toLocaleString()}`
    : ""
}
`;

    const blob = new Blob([reportText.trim()], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `report_${report.id || "unknown"}_${
      report.student?.last_name || "student"
    }.txt`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value) || "" : value,
    }));
  };

  // Get form template
  const getFormTemplate = () => {
    const templates = {
      users: { title: "User" },
      faculties: { title: "Faculty" },
      departments: { title: "Department" },
      directions: { title: "Direction" },
      groups: { title: "Group" },
      practices: { title: "Practice Day" },
      reports: { title: "Report" },
    };
    return templates[activeMenu] || templates.users;
  };

  function getForeignKeyDisplay(item, key) {
    switch (key) {
      case "student":
      case "student_data":
        if (item.student_data) {
          const s = item.student_data;
          return `${s.first_name ?? ""} ${s.last_name ?? ""}`.trim() || "-";
        }
        return "-";
      case "faculty_id":
        return item.faculty?.name || "-";
      case "department_id":
        return item.department?.name || "-";
      case "direction_id":
        return item.direction?.name || "-";
      case "head_id":
        return item.head?.first_name
          ? `${item.head.first_name} ${item.head.last_name}`
          : "-";
      case "vice_id":
        return item.vice?.first_name
          ? `${item.vice.first_name} ${item.vice.last_name}`
          : "-";
      case "attached_teacher":
        return item.attached_teacher?.first_name
          ? `${item.attached_teacher.first_name} ${item.attached_teacher.last_name}`
          : "-";
      case "group":
      case "group_data":
        return item.group?.group_number || item.group_data?.group_number || "-";
      case "teacher":
      case "teacher_data":
        if (item.teacher_data) {
          const t = item.teacher_data;
          return `${t.first_name ?? ""} ${t.last_name ?? ""}`.trim() || "-";
        }
        return "-";
      default:
        return "-";
    }
  }

  // Filter and sort
  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    const searchLower = searchQuery.toLowerCase();
    return data.filter((item) =>
      Object.entries(item).some(([key, value]) => {
        if (value === null || value === undefined) return false;

        // Handle object values
        if (typeof value === "object") {
          try {
            return JSON.stringify(value).toLowerCase().includes(searchLower);
          } catch {
            return false;
          }
        }

        return String(value).toLowerCase().includes(searchLower);
      })
    );
  }, [data, searchQuery]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      // Handle object values for sorting
      if (typeof aValue === "object" && aValue !== null) {
        aValue = aValue.name || aValue.title || aValue.id || "";
      }
      if (typeof bValue === "object" && bValue !== null) {
        bValue = bValue.name || bValue.title || bValue.id || "";
      }

      // Convert to strings for comparison
      const aStr = String(aValue || "").toLowerCase();
      const bStr = String(bValue || "").toLowerCase();

      if (aStr < bStr) return sortDirection === "asc" ? -1 : 1;
      if (aStr > bStr) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  // Get columns
  const getColumns = () => {
    const baseColumns = {
      users: [
        { key: "id", label: "ID", sortable: true },
        { key: "username", label: "Username", sortable: true },
        { key: "first_name", label: "Ism", sortable: true },
        { key: "last_name", label: "Familiya", sortable: true },
        { key: "role", label: "Roli", sortable: true },
        { key: "attached_teacher", label: "O'qituvchi", sortable: true },
        { key: "group", label: "Guruh", sortable: true },
        { key: "actions", label: "Amallar", sortable: false },
      ],
      faculties: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Nomi", sortable: true },
        { key: "head_id", label: "Dekan", sortable: true },
        { key: "vice_id", label: "Zam dekan", sortable: true },
        { key: "actions", label: "Amallar", sortable: false },
      ],
      departments: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Nomi", sortable: true },
        { key: "abbr", label: "Abbr", sortable: true },
        { key: "faculty_id", label: "Fakultet", sortable: true },
        { key: "head_id", label: "Dekan", sortable: true },
        { key: "actions", label: "Amallar", sortable: false },
      ],
      directions: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Nomi", sortable: true },
        { key: "department_id", label: "Kafedra", sortable: true },
        { key: "actions", label: "Amallar", sortable: false },
      ],
      groups: [
        { key: "id", label: "ID", sortable: true },
        { key: "group_number", label: "Guruh", sortable: true },
        { key: "direction_id", label: "Yo'nalish", sortable: true },
        { key: "actions", label: "Amallar", sortable: false },
      ],
      practices: [
        { key: "id", label: "ID", sortable: true },
        { key: "student", label: "Talaba", sortable: true },
        { key: "date", label: "Sana", sortable: true },
        { key: "org_name", label: "Tashkilot", sortable: true },
        { key: "duty_name", label: "Mas’ul shaxs", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "actions", label: "Amallar", sortable: false },
      ],
      reports: [
        { key: "id", label: "ID", sortable: true },
        { key: "created_at", label: "Yaratilgan", sortable: true },
        { key: "actions", label: "Amallar", sortable: false },
      ],
    };

    return baseColumns[activeMenu] || baseColumns.users;
  };

  // Form templates with foreign key support
  const getFormFields = () => {
    const userOptions = Object.values(relatedData.users || {})
      .filter((user) => user && user.id && user.first_name)
      .map((user) => ({
        value: user.id,
        label: `${user.first_name} ${user.last_name}`,
        role: user.role,
      }));

    const teacherOptions = Object.values(relatedData.users || {})
      .filter((user) => user && user.role === "teacher")
      .map((user) => ({
        value: user.id,
        label: `${user.first_name} ${user.last_name}`,
      }));

    const studentOptions = Object.values(relatedData.users || {})
      .filter((user) => user && user.role === "student")
      .map((user) => ({
        value: user.id,
        label: `${user.first_name} ${user.last_name}`,
      }));

    const facultyOptions = Object.values(relatedData.faculties || {})
      .filter((faculty) => faculty && faculty.id)
      .map((faculty) => ({
        value: faculty.id,
        label: faculty.name,
      }));

    const departmentOptions = Object.values(relatedData.departments || {})
      .filter((dept) => dept && dept.id)
      .map((dept) => ({
        value: dept.id,
        label: `${dept.name} (${dept.abbr || "no code"})`,
      }));

    const directionOptions = Object.values(relatedData.directions || {})
      .filter((dir) => dir && dir.id)
      .map((dir) => ({
        value: dir.id,
        label: dir.name,
      }));

    const groupOptions = Object.values(relatedData.groups || {})
      .filter((group) => group && group.id)
      .map((group) => ({
        value: group.id,
        label: group.group_number,
      }));

    const baseFields = {
      users: [
        { name: "username", label: "Username", type: "text", required: true },
        {
          name: "first_name",
          label: "Ism",
          type: "text",
          required: true,
        },
        { name: "last_name", label: "Familiya", type: "text", required: true },
        {
          name: "role",
          label: "Roli",
          type: "select",
          required: true,
          options: [
            { value: "admin", label: "Admin" },
            { value: "rector", label: "Rektor" },
            { value: "vice_rector", label: "Rektor o'rinbosari" },
            { value: "dean", label: "Dekan" },
            { value: "deputy_dean", label: "Zam dekan" },
            { value: "head_of_department", label: "Kafedra mudiri" },
            { value: "teacher", label: "O'qituvchi" },
            { value: "student", label: "Talaba" },
          ],
        },
        ...(formData?.role === "student"
          ? [
              {
                name: "attached_teacher",
                label: "O'qituvchi",
                type: "select",
                required: true,
                options: teacherOptions,
              },
              {
                name: "group",
                label: "Guruh",
                type: "select",
                required: true,
                options: groupOptions,
              },
            ]
          : []),
        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "password",
          required: !editingItem,
        },
      ],
      faculties: [
        { name: "name", label: "Fakultet nomi", type: "text", required: true },
        {
          name: "head_id",
          label: "Dekan",
          type: "select",
          required: true,
          options: userOptions.filter((u) => u.role === "dean"),
        },
        {
          name: "vice_id",
          label: "Zam dekan",
          type: "select",
          required: false,
          options: userOptions.filter((u) => u.role === "deputy_dean"),
        },
      ],
      departments: [
        {
          name: "name",
          label: "Kafedra nomi",
          type: "text",
          required: true,
        },
        { name: "abbr", label: "Abbreviation", type: "text", required: false },
        {
          name: "faculty_id",
          label: "Fakultet",
          type: "select",
          required: true,
          options: facultyOptions,
        },
        {
          name: "head_id",
          label: "Kafedra mudiri",
          type: "select",
          required: true,
          options: userOptions.filter((u) => u.role === "head_of_department"),
        },
      ],
      directions: [
        { name: "name", label: "Yo'nalish nomi", type: "text", required: true },
        {
          name: "department_id",
          label: "Kafedra",
          type: "select",
          required: true,
          options: departmentOptions,
        },
      ],
      groups: [
        {
          name: "group_number",
          label: "Guruh nomi",
          type: "text",
          required: true,
        },
        {
          name: "direction_id",
          label: "Yo'nalish",
          type: "select",
          required: true,
          options: directionOptions,
        },
      ],
      practices: [
        {
          name: "student",
          label: "Talaba",
          type: "select",
          required: true,
          options: studentOptions,
        },
        { name: "date", label: "Sana", type: "date", required: true },
        {
          name: "duty_name",
          label: "Mas'ul shaxs",
          type: "text",
          required: true,
        },
        {
          name: "org_name",
          label: "Tashkilot nomi",
          type: "text",
          required: true,
        },
        { name: "address", label: "Manzil", type: "text", required: true },
        {
          name: "location",
          label: "Lokatsiya",
          type: "text",
          required: true,
          placeholder: "POINT(00.0000 00.0000)",
        },
        { name: "target", label: "Mo'ljal", type: "textarea", required: true },
        {
          name: "start_time",
          label: "Boshlanish vaqti",
          type: "time",
          required: true,
        },
        {
          name: "end_time",
          label: "Tugash vaqti",
          type: "time",
          required: true,
        },
      ],
      reports: [], // Reports are read-only, no form fields
    };

    return baseFields[activeMenu] || baseFields.users;
  };

  // Render status badge for reports
  const renderReportStatusBadge = (status) => {
    if (!status) return <StatusBadge className="inactive">-</StatusBadge>;

    const statusStr = String(status).toLowerCase();
    let statusClass = "inactive";

    if (statusStr === "approved" || statusStr === "completed") {
      statusClass = "approved";
    } else if (statusStr === "rejected" || statusStr === "cancelled") {
      statusClass = "rejected";
    } else if (statusStr === "pending" || statusStr === "submitted") {
      statusClass = "submitted";
    } else if (statusStr === "active") {
      statusClass = "active";
    }

    return (
      <StatusBadge className={statusClass}>
        {statusStr.charAt(0).toUpperCase() + statusStr.slice(1)}
      </StatusBadge>
    );
  };

  // Render status badge
  const renderStatusBadge = (status) => {
    if (status === undefined || status === null) {
      return <StatusBadge className="inactive">-</StatusBadge>;
    }

    const statusStr = String(status).toLowerCase();
    let statusClass = "inactive";

    if (statusStr === "active" || statusStr === "true") {
      statusClass = "active";
    } else if (statusStr === "pending") {
      statusClass = "pending";
    } else if (statusStr === "inactive" || statusStr === "false") {
      statusClass = "inactive";
    }

    return (
      <StatusBadge className={statusClass}>
        {statusStr.charAt(0).toUpperCase() + statusStr.slice(1)}
      </StatusBadge>
    );
  };

  // Handle sort
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return <FaSort />;
    return sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  const renderForm = () => {
    const fields = getFormFields();

    if (activeMenu === "reports") {
      return null; // Reports are read-only
    }

    return (
      <form onSubmit={handleSubmit}>
        {fields.map((field) => {
          if (field.type === "password") {
            return (
              <FormGroupWrapper key={field.name}>
                <FormLabel htmlFor={field.name}>
                  {field.label}
                  {field.required && " *"}
                </FormLabel>
                <div style={{ position: "relative" }}>
                  <FormInput
                    id={field.name}
                    name={field.name}
                    type={passwordVisible[field.name] ? "text" : "password"}
                    value={formData[field.name] || ""}
                    onChange={handleInputChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    disabled={field.disabled}
                    $hasPasswordToggle={true}
                  />
                  <PasswordToggle
                    type="button"
                    onClick={() => togglePasswordVisibility(field.name)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "10px",
                      background: "none",
                      border: "none",
                      color: "#666",
                      cursor: "pointer",
                      padding: "8px",
                      fontSize: "18px",
                    }}
                  >
                    {passwordVisible[field.name] ? <FaEyeSlash /> : <FaEye />}
                  </PasswordToggle>
                </div>
              </FormGroupWrapper>
            );
          }

          return (
            <FormGroup key={field.name}>
              <FormLabel htmlFor={field.name}>
                {field.label}
                {field.required && " *"}
              </FormLabel>
              {field.type === "select" ? (
                <FormSelect
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  required={field.required}
                  disabled={
                    field.disabled ||
                    (field.options && field.options.length === 0)
                  }
                >
                  <option value="">{field.label}ni tanlang</option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </FormSelect>
              ) : field.type === "textarea" ? (
                <FormTextArea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  required={field.required}
                  rows="4"
                  disabled={field.disabled}
                />
              ) : (
                <FormInput
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  onChange={handleInputChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  disabled={field.disabled}
                  value={formData[field.name] || ""}
                  $hasPasswordToggle={false}
                />
              )}
            </FormGroup>
          );
        })}

        <FormActions>
          <SecondaryButton
            type="button"
            onClick={() => setShowModal(false)}
            disabled={isSubmitting}
          >
            Bekor qilish
          </SecondaryButton>
          <ActionButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <FaSpinner
                  style={{
                    animation: "spin 1s linear infinite",
                    marginRight: "8px",
                  }}
                />
                Saqlanmoqda...
              </>
            ) : (
              <>
                <FaSave />
                {editingItem ? "Yangilash" : "Yaratish"}
              </>
            )}
          </ActionButton>
        </FormActions>
      </form>
    );
  };

  // Render report detail
  const renderReportDetail = () => {
    if (!selectedReport) return null;
    const position = parseWKTPoint(selectedReport.location);

    return (
      <ReportDetailContainer>
        <ReportSection>
          <ReportSectionTitle>
            <FaUser /> Student Information
          </ReportSectionTitle>
          <ReportField>
            <ReportLabel>
              Student ({selectedReport.student?.id || ""}):
            </ReportLabel>
            <ReportValue>
              {selectedReport.student?.first_name || ""}{" "}
              {selectedReport.student?.last_name || ""}
            </ReportValue>
          </ReportField>
          <ReportField>
            <ReportLabel>Group:</ReportLabel>
            <ReportValue>{selectedReport.student?.group || "N/A"}</ReportValue>
          </ReportField>
          <ReportField>
            <ReportLabel>Yo'nalish:</ReportLabel>
            <ReportValue>
              {selectedReport.student?.direction || "N/A"}
            </ReportValue>
          </ReportField>
        </ReportSection>

        <ReportSection>
          <ReportSectionTitle>
            <FaFileAlt /> Report Details
          </ReportSectionTitle>
          <ReportField>
            <ReportLabel>Practise Day ID:</ReportLabel>
            <ReportValue>{selectedReport.practice_day || "N/A"}</ReportValue>
          </ReportField>
          <ReportField>
            <ReportLabel>Text:</ReportLabel>
            <ReportValue>{selectedReport.text || "N/A"}</ReportValue>
          </ReportField>
          <ReportField>
            <ReportLabel>Created:</ReportLabel>
            <ReportValue>
              {new Date(selectedReport.created_at).toLocaleString()}
            </ReportValue>
          </ReportField>
          {selectedReport.updated_at && (
            <ReportField>
              <ReportLabel>Last Updated:</ReportLabel>
              <ReportValue>
                {new Date(selectedReport.updated_at).toLocaleString()}
              </ReportValue>
            </ReportField>
          )}
          <MediaRow>
            {/* IMAGE */}
            <MediaBox>
              <MediaLabel>Rasm:</MediaLabel>
              {selectedReport.image ? (
                <ReportImage src={selectedReport.image} />
              ) : (
                <ReportValue>N/A</ReportValue>
              )}
            </MediaBox>

            {/* MAP */}
            <MediaBox>
              <MediaLabel>Lokatsiya:</MediaLabel>

              {position ? (
                <MapContainer
                  center={position}
                  zoom={15}
                  style={{
                    height: "300px",
                    width: "100%",
                    borderRadius: "6px",
                  }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={position} />
                </MapContainer>
              ) : (
                <ReportValue>N/A</ReportValue>
              )}
            </MediaBox>
          </MediaRow>
        </ReportSection>

        {selectedReport.content && (
          <ReportSection>
            <ReportSectionTitle>
              <FaEdit /> Report Content
            </ReportSectionTitle>
            <ReportTextArea>{selectedReport.content}</ReportTextArea>
          </ReportSection>
        )}

        {selectedReport.additional_info && (
          <ReportSection>
            <ReportSectionTitle>
              <FaInfoCircle /> Additional Information
            </ReportSectionTitle>
            <ReportTextArea>{selectedReport.additional_info}</ReportTextArea>
          </ReportSection>
        )}
      </ReportDetailContainer>
    );
  };

  return (
    <DashboardContainer>
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>
          <AppTitle>
            <FaUniversity />
            <span>UniAdmin</span>
          </AppTitle>
        </SidebarHeader>

        <SidebarMenu>
          {menuItems.map((item) => (
            <MenuItem key={item.id}>
              <MenuLink
                className={activeMenu === item.id ? "active" : ""}
                onClick={() => {
                  setActiveMenu(item.id);
                  setCurrentPage(1);
                  setSearchQuery("");
                  setShowFilters(false);
                  setSelectedReport(null);
                  setShowReportDetail(false);
                }}
              >
                <MenuIcon>{item.icon}</MenuIcon>
                <span>{item.label}</span>
              </MenuLink>
            </MenuItem>
          ))}
        </SidebarMenu>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        <ContentHeader>
          <PageTitle>
            {menuItems.find((item) => item.id === activeMenu)?.label}
          </PageTitle>
          <div style={{ display: "flex", gap: "12px" }}>
            <RefreshButton onClick={() => fetchData(true)} disabled={loading}>
              <FaSync />
              Yangilash
            </RefreshButton>
            {activeMenu !== "reports" && (
              <ActionButton onClick={handleAddNew}>
                <FaPlus />
                Yangi qo'shish
              </ActionButton>
            )}
          </div>
        </ContentHeader>

        {/* Messages */}
        {error && (
          <Message className="error">
            <FaExclamationCircle />
            {error}
          </Message>
        )}

        {success && (
          <Message className="success">
            <FaCheckCircle />
            {success}
          </Message>
        )}

        {/* Toolbar */}
        <Toolbar>
          <SearchBox>
            <FaSearch size={16} />
            <SearchInput
              placeholder="Qidirish..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBox>
        </Toolbar>

        {/* Data Table */}
        <DataTable>
          {loading ? (
            <LoadingSpinner>
              <FaSpinner size={32} />
              <div style={{ marginTop: "16px" }}>Yuklanmoqda...</div>
            </LoadingSpinner>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    {getColumns().map((column) => (
                      <TableHeaderCell
                        key={column.key}
                        $sortable={column.sortable}
                        onClick={() =>
                          column.sortable && handleSort(column.key)
                        }
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          {column.label}
                          {column.sortable && getSortIcon(column.key)}
                        </div>
                      </TableHeaderCell>
                    ))}
                  </TableRow>
                </TableHeader>
                <tbody>
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item) => (
                      <TableRow key={item.id}>
                        {getColumns().map((column) => (
                          <TableCell key={column.key}>
                            {column.key === "actions" ? (
                              <ActionCell>
                                {activeMenu === "reports" ? (
                                  <>
                                    <IconButton
                                      className="view"
                                      title="View Details"
                                      onClick={() => handleViewReport(item.id)}
                                    >
                                      <FaEye />
                                    </IconButton>
                                    <IconButton
                                      className="download"
                                      title="Download Report"
                                      onClick={() => handleDownloadReport(item)}
                                    >
                                      <FaDownload />
                                    </IconButton>
                                  </>
                                ) : (
                                  <>
                                    <IconButton
                                      className="edit"
                                      title="Edit"
                                      onClick={() => handleEdit(item)}
                                    >
                                      <FaEdit />
                                    </IconButton>
                                    <IconButton
                                      className="delete"
                                      title="Delete"
                                      onClick={() => {
                                        setDeleteItemId(item.id);
                                        setShowDeleteModal(true);
                                      }}
                                    >
                                      <FaTrash />
                                    </IconButton>
                                  </>
                                )}
                              </ActionCell>
                            ) : column.key === "is_active" ||
                              column.key === "status" ? (
                              activeMenu === "reports" ? (
                                renderReportStatusBadge(item[column.key])
                              ) : (
                                renderStatusBadge(item[column.key])
                              )
                            ) : column.key === "created_at" ? (
                              new Date(item[column.key]).toLocaleDateString()
                            ) : (
                              // Fix: Always convert to string to avoid object rendering errors
                              (() => {
                                const value = item[column.key];

                                // Special handling for foreign keys
                                if (
                                  [
                                    "faculty_id",
                                    "department_id",
                                    "direction_id",
                                    "head_id",
                                    "vice_id",
                                    "attached_teacher",
                                    "student",
                                    "student_data",
                                    "group",
                                    "group_data",
                                    "teacher_data",
                                  ].includes(column.key)
                                ) {
                                  return getForeignKeyDisplay(item, column.key);
                                }

                                // Handle object values
                                if (
                                  typeof value === "object" &&
                                  value !== null
                                ) {
                                  try {
                                    if (value.name) return value.name;
                                    if (value.group_number)
                                      return value.group_number;
                                    if (value.first_name && value.last_name) {
                                      return `${value.first_name} ${value.last_name}`;
                                    }
                                    if (value.title) return value.title;
                                    return JSON.stringify(value);
                                  } catch {
                                    return "-";
                                  }
                                }

                                return value !== undefined && value !== null
                                  ? String(value)
                                  : "-";
                              })()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={getColumns().length}>
                        <EmptyState>
                          <FaExclamationCircle />
                          <div
                            style={{
                              fontSize: "18px",
                              fontWeight: "600",
                              marginBottom: "8px",
                            }}
                          >
                            Hech qanday {activeMenu} topilmadi
                          </div>
                          {searchQuery && (
                            <div>
                              Hech qanday natija topilmadi "
                              <strong>{searchQuery}</strong>"
                            </div>
                          )}
                        </EmptyState>
                      </TableCell>
                    </TableRow>
                  )}
                </tbody>
              </Table>

              {/* Pagination */}
              {sortedData.length > 0 && (
                <Pagination>
                  <PaginationInfo>
                    {sortedData.length > 0 && (
                      <PaginationInfo>
                        {startIndex + 1}-
                        {Math.min(startIndex + itemsPerPage, sortedData.length)}{" "}
                        dan {sortedData.length} ko'rsatilmoqda
                      </PaginationInfo>
                    )}
                  </PaginationInfo>
                  <PaginationControls>
                    <PageButton
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Oldingi
                    </PageButton>
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <PageButton
                          key={pageNum}
                          className={currentPage === pageNum ? "active" : ""}
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </PageButton>
                      );
                    })}
                    <PageButton
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Keyingi
                    </PageButton>
                  </PaginationControls>
                </Pagination>
              )}
            </>
          )}
        </DataTable>
      </MainContent>

      {/* Create/Edit Modal */}
      {showModal && activeMenu !== "reports" && (
        <ModalOverlay onClick={() => !isSubmitting && setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                {editingItem ? "Edit" : "Add New"} {getFormTemplate()?.title}
              </ModalTitle>
              <ModalCloseButton
                onClick={() => !isSubmitting && setShowModal(false)}
                disabled={isSubmitting}
              >
                <FaTimes />
              </ModalCloseButton>
            </ModalHeader>
            {renderForm()}
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Report Detail Modal */}
      {showReportDetail && (
        <ModalOverlay
          onClick={() => !reportDetailLoading && setShowReportDetail(false)}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "800px" }}
          >
            <ModalHeader>
              <ModalTitle>
                <FaFileAlt /> Hisobot tafsilotlari
              </ModalTitle>
              <ModalCloseButton
                onClick={() => setShowReportDetail(false)}
                disabled={reportDetailLoading}
              >
                <FaTimes />
              </ModalCloseButton>
            </ModalHeader>
            {reportDetailLoading ? (
              <LoadingSpinner>
                <FaSpinner size={32} />
                <div style={{ marginTop: "16px" }}>
                  Hisobot tafsilotlari yuklanmoqda...
                </div>
              </LoadingSpinner>
            ) : (
              renderReportDetail()
            )}
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && activeMenu !== "reports" && (
        <ModalOverlay onClick={() => !isDeleting && setShowDeleteModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <DeleteConfirmModal>
              <DeleteIcon>
                <FaExclamationCircle />
              </DeleteIcon>
              <DeleteText>
                Haqiqatan ham buni oʻchirib tashlamoqchimisiz{" "}
                {getFormTemplate()?.title.toLowerCase()}? Bu amalni ortga
                qaytarib bo‘lmaydi.
              </DeleteText>
              <DeleteActions>
                <SecondaryButton
                  onClick={() => !isDeleting && setShowDeleteModal(false)}
                  disabled={isDeleting}
                >
                  Bekor qilish
                </SecondaryButton>
                <DeleteButton onClick={handleDelete} disabled={isDeleting}>
                  {isDeleting ? (
                    <>
                      <FaSpinner
                        style={{
                          animation: "spin 1s linear infinite",
                          marginRight: "8px",
                        }}
                      />
                      Oʻchirilmoqda...
                    </>
                  ) : (
                    "Oʻchirish"
                  )}
                </DeleteButton>
              </DeleteActions>
            </DeleteConfirmModal>
          </ModalContent>
        </ModalOverlay>
      )}
    </DashboardContainer>
  );
}
