"use client";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";
import styled, { keyframes } from "styled-components";
// import { useNavigate } from "react-router-dom"
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
  FaFilter, // Import FaFilter here
  FaSync,
  FaFileAlt,
  FaDownload,
  FaEyeSlash,
  FaInfoCircle, // Import FaInfoCircle here
} from "react-icons/fa";
// import api from "../services/api"
// import { MapContainer, TileLayer, Marker } from "react-leaflet"
// import "leaflet/dist/leaflet.css"
import api from "../services/api";

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

  /* Added responsive flex direction for mobile */
  @media (max-width: 640px) {
    flex-direction: column;
    min-height: 100%;
  }
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

  /* Enhanced responsive breakpoints for tablet and mobile */
  @media (max-width: 1024px) {
    width: 240px;
  }

  @media (max-width: 768px) {
    width: 70px;
    padding: 20px 0;
  }

  @media (max-width: 640px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 16px 0;
    border-right: none;
    border-bottom: 1px solid ${(p) => p.theme.border};
    overflow-y: visible;
    overflow-x: auto;
  }

  @media (max-width: 480px) {
    padding: 12px 0;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 4px;
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

  /* Enhanced responsive padding and margin adjustments */
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

  @media (max-width: 640px) {
    margin-left: 0;
    padding: 12px;
    max-width: 100%;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

const SidebarHeader = styled.div`
  padding: 0 24px 24px;
  border-bottom: 1px solid ${(p) => p.theme.border}40;
  margin-bottom: 24px;

  /* Added responsive padding for mobile */
  @media (max-width: 768px) {
    padding: 0 16px 16px;
  }

  @media (max-width: 640px) {
    padding: 0 8px 12px;
    margin-bottom: 12px;
  }
`;

const AppTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  /* Added responsive font sizing and centering */
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.3rem;
    gap: 8px;
  }

  @media (max-width: 640px) {
    font-size: 1.1rem;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  /* Added horizontal scroll for mobile sidebar */
  @media (max-width: 640px) {
    display: flex;
    overflow-x: auto;
    gap: 8px;
    padding: 0 8px;
  }
`;

const MenuItem = styled.li`
  margin-bottom: 4px;

  /* Responsive margin for mobile horizontal menu */
  @media (max-width: 640px) {
    margin-bottom: 0;
    flex-shrink: 0;
  }
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

  /* Added responsive styles for tablet and mobile */
  @media (max-width: 1024px) {
    padding: 14px 18px;
    gap: 12px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 16px;
    gap: 0;

    &:after {
      display: none;
    }

    span {
      display: none;
    }
  }

  @media (max-width: 640px) {
    padding: 12px 16px;
    border-left: none;
    border-bottom: 3px solid transparent;
    border-radius: 0;
    flex-shrink: 0;
    white-space: nowrap;

    &:hover {
      transform: translateY(-2px);
      border-bottom-color: ${(p) => p.theme.primary};
    }

    &.active {
      border-bottom-color: ${(p) => p.theme.primary};
      border-left: none;
    }

    span {
      display: inline;
    }
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 12px;
  }
`;

const MenuIcon = styled.div`
  font-size: 18px;
  width: 24px;
  text-align: center;

  /* Added responsive font sizing */
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    width: auto;
  }

  @media (max-width: 480px) {
    font-size: 14px;
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

  /* Added responsive gap and margin */
  @media (max-width: 1024px) {
    margin-bottom: 24px;
    gap: 16px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    gap: 12px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 640px) {
    margin-bottom: 16px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    margin-bottom: 12px;
    gap: 8px;
  }
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

  /* Added responsive font sizing and bar dimensions */
  @media (max-width: 1024px) {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    gap: 10px;

    &:before {
      height: 20px;
      width: 3px;
    }
  }

  @media (max-width: 640px) {
    font-size: 1.25rem;
    gap: 8px;

    &:before {
      height: 18px;
      width: 3px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    gap: 6px;

    &:before {
      height: 16px;
    }
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

  /* Added responsive padding and font size */
  @media (max-width: 1024px) {
    padding: 11px 22px;
    font-size: 14px;
    gap: 8px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
    gap: 6px;
    width: 100%;
  }

  @media (max-width: 640px) {
    padding: 9px 16px;
    font-size: 12px;
    gap: 5px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 11px;
    gap: 4px;
    border-radius: 8px;
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

  /* Added responsive gap and layout adjustments */
  @media (max-width: 1024px) {
    gap: 12px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 16px;
    flex-direction: column;
    align-items: stretch;
  }

  @media (max-width: 640px) {
    gap: 8px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 10px;
  }
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

  /* Added responsive max-width and padding */
  @media (max-width: 1024px) {
    max-width: 350px;
    padding: 11px 14px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px 12px;
    gap: 10px;
  }

  @media (max-width: 640px) {
    max-width: 100%;
    padding: 9px 10px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    border-radius: 8px;
    gap: 8px;
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

  /* Added responsive font sizing */
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 640px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
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

  /* Added responsive border radius */
  @media (max-width: 768px) {
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 640px) {
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1000px;

  /* Added responsive min-width for mobile */
  @media (max-width: 1024px) {
    min-width: 900px;
  }

  @media (max-width: 768px) {
    min-width: 800px;
    font-size: 14px;
  }

  @media (max-width: 640px) {
    min-width: 700px;
    font-size: 12px;
  }
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

  /* Added responsive padding and font sizing */
  @media (max-width: 1024px) {
    padding: 16px 12px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    padding: 14px 10px;
    font-size: 12px;
    letter-spacing: 0.3px;
  }

  @media (max-width: 640px) {
    padding: 12px 8px;
    font-size: 11px;
    letter-spacing: 0;
  }
`;

const TableCell = styled.td`
  padding: 16px;
  font-size: 14px;
  color: ${(p) => p.theme.text}80;

  /* Added responsive padding and font sizing */
  @media (max-width: 1024px) {
    padding: 14px 12px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    padding: 12px 10px;
    font-size: 12px;
  }

  @media (max-width: 640px) {
    padding: 10px 8px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 8px 6px;
    font-size: 10px;
  }
`;

const ActionCell = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;

  /* Added responsive gap and flex wrapping for mobile */
  @media (max-width: 768px) {
    gap: 6px;
    flex-wrap: wrap;
  }

  @media (max-width: 640px) {
    gap: 4px;
  }
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

  /* Added responsive padding and font sizing */
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (max-width: 640px) {
    padding: 6px;
    font-size: 10px;
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

  /* Added responsive padding and font sizing */
  @media (max-width: 768px) {
    padding: 5px 12px;
    font-size: 11px;
  }

  @media (max-width: 640px) {
    padding: 4px 10px;
    font-size: 10px;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-top: 1px solid ${(p) => p.theme.border}30;
  background: ${(p) => p.theme.background};

  /* Added responsive padding and flex direction */
  @media (max-width: 768px) {
    padding: 16px 20px;
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 640px) {
    padding: 12px 16px;
    gap: 8px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    gap: 6px;
  }
`;

const PaginationInfo = styled.div`
  font-size: 14px;
  color: ${(p) => p.theme.text}60;
  font-weight: 500;

  /* Added responsive font sizing */
  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 640px) {
    font-size: 12px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  /* Added responsive gap and flex wrapping */
  @media (max-width: 768px) {
    gap: 6px;
    flex-wrap: wrap;
  }

  @media (max-width: 640px) {
    gap: 4px;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 3px;
  }
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

  /* Added responsive padding and sizing */
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
    min-width: 36px;
  }

  @media (max-width: 640px) {
    padding: 6px 10px;
    font-size: 12px;
    min-width: 32px;
  }

  @media (max-width: 480px) {
    padding: 5px 8px;
    font-size: 11px;
    min-width: 28px;
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

  /* Added responsive padding and icon sizing */
  @media (max-width: 768px) {
    padding: 60px 16px;

    svg {
      font-size: 48px;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 640px) {
    padding: 40px 12px;

    svg {
      font-size: 40px;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 30px 10px;

    svg {
      font-size: 32px;
      margin-bottom: 10px;
    }
  }
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 60px;
  color: ${(p) => p.theme.primary};

  svg {
    animation: ${spin} 1s linear infinite;
  }

  /* Added responsive padding */
  @media (max-width: 768px) {
    padding: 48px;
  }

  @media (max-width: 640px) {
    padding: 36px;
  }

  @media (max-width: 480px) {
    padding: 24px;
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

  /* Added responsive padding and gap */
  @media (max-width: 768px) {
    padding: 14px 16px;
    margin-bottom: 20px;
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 640px) {
    padding: 12px 14px;
    margin-bottom: 16px;
    gap: 8px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    margin-bottom: 12px;
    gap: 6px;
    font-size: 12px;
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

  /* Added responsive padding for smaller screens */
  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 640px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
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

  /* Enhanced responsive padding and max-width */
  @media (max-width: 1024px) {
    padding: 28px;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    padding: 24px;
    max-width: 95%;
    max-height: 80vh;
    border-radius: 14px;
  }

  @media (max-width: 640px) {
    padding: 20px;
    max-width: 100%;
    max-height: 85vh;
    border-radius: 12px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    padding: 16px;
    max-height: 90vh;
    border-radius: 10px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  /* Added responsive margin for mobile */
  @media (max-width: 640px) {
    margin-bottom: 18px;
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 480px) {
    margin-bottom: 14px;
    gap: 8px;
  }
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: ${(p) => p.theme.text};
  font-size: 1.5rem;
  font-weight: 700;

  /* Added responsive font sizing */
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
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

  /* Added responsive padding for mobile */
  @media (max-width: 640px) {
    padding: 6px;
  }
`;

// Report Detail Components
const ReportDetailContainer = styled.div`
  padding: 20px 0;

  /* Added responsive padding */
  @media (max-width: 768px) {
    padding: 16px 0;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
  }
`;

const ReportSection = styled.div`
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${(p) => p.theme.border}30;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  /* Added responsive margin and padding */
  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding-bottom: 14px;
  }

  @media (max-width: 640px) {
    margin-bottom: 16px;
    padding-bottom: 12px;
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

  /* Added responsive font sizing */
  @media (max-width: 768px) {
    font-size: 1.1rem;
    gap: 8px;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    gap: 6px;
    margin: 0 0 12px 0;
  }
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

  /* Added responsive flex direction for mobile */
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 6px;
    margin-bottom: 10px;
  }
`;

const ReportLabel = styled.span`
  font-weight: 600;
  color: ${(p) => p.theme.text}80;
  min-width: 120px;

  /* Added responsive sizing for mobile */
  @media (max-width: 768px) {
    min-width: 100px;
    font-size: 14px;
  }

  @media (max-width: 640px) {
    min-width: auto;
    font-size: 13px;
  }
`;

const ReportValue = styled.span`
  flex: 1;
  color: ${(p) => p.theme.text};
  line-height: 1.6;

  /* Added responsive font sizing */
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 640px) {
    font-size: 13px;
  }
`;

const ReportTextArea = styled.div`
  background: ${(p) => p.theme.background};
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  border: 1px solid ${(p) => p.theme.border}30;
  white-space: pre-wrap;
  line-height: 1.6;

  /* Added responsive padding and font sizing */
  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 6px;
    font-size: 14px;
  }

  @media (max-width: 640px) {
    padding: 10px;
    border-radius: 6px;
    font-size: 13px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
  position: relative;

  /* Added responsive margin for mobile */
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    margin-bottom: 16px;
  }
`;

// Styled components qismiga qo'shing:
const FormGroupWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;

  /* Added responsive margin for mobile */
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    margin-bottom: 16px;
  }
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

  /* Added responsive padding and font sizing */
  @media (max-width: 768px) {
    padding: 12px;
    padding-right: ${(props) => (props.$hasPasswordToggle ? "40px" : "12px")};
    font-size: 14px;
    border-radius: 8px;
  }

  @media (max-width: 640px) {
    padding: 10px;
    padding-right: ${(props) => (props.$hasPasswordToggle ? "36px" : "10px")};
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    padding-right: ${(props) => (props.$hasPasswordToggle ? "32px" : "8px")};
    font-size: 12px;
    border-radius: 6px;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${(p) => p.theme.text}90;
  font-size: 14px;

  /* Added responsive font sizing and margin */
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 8px;
  }

  @media (max-width: 640px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
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
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
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

  /* Added responsive padding and font sizing */
  @media (max-width: 768px) {
    padding: 12px;
    padding-right: 36px;
    font-size: 14px;
    border-radius: 8px;
    background-position: right 12px center;
    background-size: 14px;
  }

  @media (max-width: 640px) {
    padding: 10px;
    padding-right: 32px;
    font-size: 13px;
    background-position: right 10px center;
  }

  @media (max-width: 480px) {
    padding: 8px;
    padding-right: 28px;
    font-size: 12px;
    border-radius: 6px;
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

  /* Added responsive padding, font sizing, and height */
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
    min-height: 100px;
    border-radius: 8px;
  }

  @media (max-width: 640px) {
    padding: 10px;
    font-size: 13px;
    min-height: 80px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
    min-height: 60px;
    border-radius: 6px;
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

  /* Added responsive gap, margin, and flex direction */
  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 28px;
    padding-top: 20px;
  }

  @media (max-width: 640px) {
    gap: 8px;
    margin-top: 20px;
    padding-top: 16px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-top: 16px;
    padding-top: 12px;
  }
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

  /* Added responsive padding and font sizing */
  @media (max-width: 768px) {
    padding: 11px 22px;
    font-size: 14px;
    border-radius: 8px;
  }

  @media (max-width: 640px) {
    padding: 10px 20px;
    font-size: 13px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
    border-radius: 6px;
  }
`;

const DeleteConfirmModal = styled.div`
  text-align: center;
  padding: 24px;

  /* Added responsive padding */
  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 640px) {
    padding: 16px;
  }
`;

const DeleteIcon = styled.div`
  font-size: 64px;
  color: #ef4444;
  margin-bottom: 24px;
  opacity: 0.8;

  /* Added responsive icon sizing and margin */
  @media (max-width: 768px) {
    font-size: 56px;
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    font-size: 48px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    margin-bottom: 12px;
  }
`;

const DeleteText = styled.p`
  margin-bottom: 32px;
  color: ${(p) => p.theme.text};
  font-size: 16px;
  line-height: 1.6;

  /* Added responsive font sizing and margin */
  @media (max-width: 768px) {
    margin-bottom: 28px;
    font-size: 15px;
  }

  @media (max-width: 640px) {
    margin-bottom: 24px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
    font-size: 13px;
  }
`;

const DeleteActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  /* Added responsive gap and flex wrapping */
  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 640px) {
    gap: 8px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
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

  /* Added responsive padding and font sizing */
  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 14px;
    border-radius: 8px;
  }

  @media (max-width: 640px) {
    padding: 10px 24px;
    font-size: 13px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
    border-radius: 6px;
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

  /* Added responsive padding and margin */
  @media (max-width: 768px) {
    padding: 14px 12px;

    div {
      margin-right: 12px;
    }
  }

  @media (max-width: 640px) {
    padding: 12px 8px;

    div {
      margin-right: 8px;
      border-radius: 4px;
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

  /* Added responsive gap and flex direction */
  @media (max-width: 1024px) {
    gap: 14px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-top: 6px;
  }
`;

export const MediaBox = styled.div`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.border || "#ddd"};
  border-radius: 8px;
  padding: 10px;

  /* Added responsive padding and border radius */
  @media (max-width: 768px) {
    padding: 8px;
    border-radius: 6px;
  }

  @media (max-width: 640px) {
    padding: 6px;
  }

  @media (max-width: 480px) {
    border-radius: 4px;
  }
`;

export const MediaLabel = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;

  /* Added responsive font sizing and margin */
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 6px;
  }

  @media (max-width: 640px) {
    font-size: 12px;
    margin-bottom: 5px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 4px;
  }
`;

export const ReportImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;

  /* Added responsive height and border radius */
  @media (max-width: 768px) {
    height: 250px;
    border-radius: 5px;
  }

  @media (max-width: 640px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
    border-radius: 4px;
  }
`;

const NavbarWrapper = styled.nav`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  overflow-x: auto; /* horizontal scroll */
  white-space: nowrap; /* row */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  display: inline-block;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.primary || "#eee"};
    color: #000;
    animation: all 0.2s ease-in-out;
  }

  &.active {
    background-color: ${({ theme }) => theme.primary || "#ccc"};
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const navItems = [
  { name: "Faculties", path: "/faculties" },
  { name: "Departments", path: "/departments" },
  { name: "Directions", path: "/directions" },
  { name: "Groups", path: "/groups" },
  { name: "Students", path: "/students" },
  { name: "Admin Dashboard", path: "/admin/dashboard" },
];

// Main Component
export default function AdminDashboard() {
  // const navigate = useNavigate() // Removed - not needed in this setup
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
  const [showFilters, setShowFilters] = useState(false); // State for showing filters
  const [selectedReport, setSelectedReport] = useState(null);
  const [showReportDetail, setShowReportDetail] = useState(false);
  const [reportDetailLoading, setReportDetailLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState({});
  const location = useLocation();

  // Mock navigation function
  const navigate = (path) => {
    console.log("Navigating to:", path);
    // In a real app, this would navigate using react-router-dom or Next.js router
    setActiveMenu(path.split("/").pop() || "users"); // Basic update for menu highlighting
  };

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
    } catch (err) {
      console.error("Error fetching related data:", err); // Log error for debugging
      // Optionally set an error message for the user
    }
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
          console.error("Cache parsing error:", e);
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
        console.error(`Error fetching ${activeMenu}:`, err); // Log error
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
    setError(null); // Clear previous errors
    try {
      const report = await api.getMyReport(reportId);
      setSelectedReport(report);
      setShowReportDetail(true);
    } catch (err) {
      setError(`Failed to fetch report details: ${err.message}`);
      console.error(`Error fetching report ${reportId}:`, err);
    } finally {
      setReportDetailLoading(false);
    }
  }, []);

  // Handle create/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null); // Clear previous success messages

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
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle delete
  const handleDelete = async () => {
    if (!deleteItemId) return;

    setIsDeleting(true);
    setError(null);
    setSuccess(null);

    try {
      switch (activeMenu) {
        case "users":
          // Assuming an "is_active" flag for soft delete for users
          await api.updateUser(deleteItemId, { is_active: false });
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
      console.error("Error deleting item:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  // Handle edit
  const handleEdit = (item) => {
    if (activeMenu === "reports") return; // Reports are read-only
    setEditingItem(item);
    // Deep clone the item to avoid mutating original data
    setFormData(JSON.parse(JSON.stringify(item)));
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
Ismi: ${report.student?.first_name || "Mavjud emas"}
Familiyasi: ${report.student?.last_name || "Mavjud emas"}
Guruh: ${report.student?.group || "Mavjud emas"}
Yo‘nalish: ${report.student?.direction || "Mavjud emas"}

HISOBOT MA’LUMOTLARI
===================
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
      [name]: type === "number" ? Number.parseInt(value) || "" : value,
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

        // Handle object values by stringifying them
        if (typeof value === "object") {
          try {
            return JSON.stringify(value).toLowerCase().includes(searchLower);
          } catch {
            return false; // Ignore if stringification fails
          }
        }

        // Convert other types to string for searching
        return String(value).toLowerCase().includes(searchLower);
      })
    );
  }, [data, searchQuery]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      // Handle object values for sorting - try to get a displayable string
      if (typeof aValue === "object" && aValue !== null) {
        aValue =
          aValue.name ||
          aValue.title ||
          aValue.group_number ||
          aValue.first_name ||
          aValue.username ||
          aValue.id ||
          "";
      }
      if (typeof bValue === "object" && bValue !== null) {
        bValue =
          bValue.name ||
          bValue.title ||
          bValue.group_number ||
          bValue.first_name ||
          bValue.username ||
          bValue.id ||
          "";
      }

      // Convert to strings for comparison, handling potential nulls
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

  // Get columns based on the active menu
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
        { key: "is_active", label: "Status", sortable: true },
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
        { key: "head_id", label: "Kafedra mudiri", sortable: true },
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
        { key: "student", label: "Talaba", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "actions", label: "Amallar", sortable: false },
      ],
    };

    return baseColumns[activeMenu] || baseColumns.users;
  };

  // Form templates with foreign key support
  const getFormFields = () => {
    const userOptions = Object.values(relatedData.users || {})
      .filter((user) => user && user.id && user.first_name) // Ensure user and id exist
      .map((user) => ({
        value: user.id,
        label: `${user.first_name} ${user.last_name}`.trim(), // Trim to avoid leading/trailing spaces
        role: user.role,
      }));

    const teacherOptions = Object.values(relatedData.users || {})
      .filter((user) => user && user.id && user.role === "teacher")
      .map((user) => ({
        value: user.id,
        label: `${user.first_name} ${user.last_name}`.trim(),
      }));

    const studentOptions = Object.values(relatedData.users || {})
      .filter((user) => user && user.id && user.role === "student")
      .map((user) => ({
        value: user.id,
        label: `${user.first_name} ${user.last_name}`.trim(),
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
        label: `${dept.name} (${dept.abbr || "no code"})`.trim(),
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
            { value: "rector", label: "Rektor" },
            { value: "vice_rector", label: "Rektor o'rinbosari" },
            { value: "dean", label: "Dekan" },
            { value: "deputy_dean", label: "Zam dekan" },
            { value: "head_of_department", label: "Kafedra mudiri" },
            { value: "teacher", label: "O'qituvchi" },
            { value: "student", label: "Talaba" },
          ],
        },
        // Conditional fields for students
        ...(formData?.role === "student"
          ? [
              {
                name: "attached_teacher", // Renamed from 'teacher_id' to 'attached_teacher'
                label: "O'qituvchi",
                type: "select",
                required: true,
                options: teacherOptions,
              },
              {
                name: "group", // Renamed from 'group_id' to 'group' for consistency with model
                label: "Guruh",
                type: "select",
                required: true,
                options: groupOptions,
              },
            ]
          : []),
        // Password field only for creation, not for editing existing users
        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "password",
          required: true, // Password is required for new users
        },
      ].filter(Boolean), // Filter out null/undefined values from the array
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
          required: false, // Vice dean might be optional
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
          name: "student_id", // Changed to student_id to match API
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
          placeholder: "POINT(00.0000 00.0000)", // Example format
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

  // Render status badge for other entities
  const renderStatusBadge = (status) => {
    // Handle boolean values from 'is_active'
    const isActive = status === true || status === "true";
    const isInactive = status === false || status === "false";

    if (isActive) {
      return <StatusBadge className="active">Active</StatusBadge>;
    } else if (isInactive) {
      return <StatusBadge className="inactive">Inactive</StatusBadge>;
    } else if (status === "pending") {
      return <StatusBadge className="pending">Pending</StatusBadge>;
    }
    // Default for undefined or unknown status
    return <StatusBadge className="inactive">-</StatusBadge>;
  };

  // Handle sort
  const handleSort = (field) => {
    if (field === "actions") return; // Don't sort on actions column

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
      return null; // Reports are read-only, so no form is rendered
    }

    return (
      <form onSubmit={handleSubmit}>
        {fields.map((field) => {
          // Password input requires special handling for visibility toggle
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
                    $hasPasswordToggle={true} // Pass prop for styling adjustment
                  />
                  <PasswordToggle
                    type="button"
                    onClick={() => togglePasswordVisibility(field.name)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%", // Center vertically
                      transform: "translateY(-50%)", // Adjust for vertical centering
                      background: "none",
                      border: "none",
                      color: "var(--text-secondary)", // Use theme color
                      cursor: "pointer",
                      padding: "8px",
                      fontSize: "18px",
                      zIndex: 1, // Ensure it's above the input
                    }}
                    aria-label="Toggle password visibility"
                  >
                    {passwordVisible[field.name] ? <FaEyeSlash /> : <FaEye />}
                  </PasswordToggle>
                </div>
              </FormGroupWrapper>
            );
          }

          // Standard form fields (text, select, textarea)
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
                  } // Disable if no options
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
                  rows="4" // Default rows
                  disabled={field.disabled}
                />
              ) : (
                // Text, date, time inputs
                <FormInput
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  onChange={handleInputChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  disabled={field.disabled}
                  value={formData[field.name] || ""}
                  $hasPasswordToggle={false} // Not a password field
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
            <FaUser /> Talaba ma'lumotlari
          </ReportSectionTitle>
          <ReportField>
            <ReportLabel>Talaba:</ReportLabel>
            <ReportValue>
              {selectedReport.student?.first_name || ""}{" "}
              {selectedReport.student?.last_name || ""}
            </ReportValue>
          </ReportField>
          <ReportField>
            <ReportLabel>Guruh:</ReportLabel>
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
            <FaFileAlt /> Hisobot tafsilotlari
          </ReportSectionTitle>
          <ReportField>
            <ReportLabel>Matn:</ReportLabel>
            <ReportValue>{selectedReport.text || "N/A"}</ReportValue>
          </ReportField>
          <ReportField>
            <ReportLabel>Yaratilgan vaqt:</ReportLabel>
            <ReportValue>
              {new Date(selectedReport.created_at).toLocaleString()}
            </ReportValue>
          </ReportField>
          {selectedReport.updated_at && (
            <ReportField>
              <ReportLabel>Oxirgi yangilangan :</ReportLabel>
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
                <ReportImage src={selectedReport.image} alt="Report Image" />
              ) : (
                <ReportValue>N/A</ReportValue>
              )}
            </MediaBox>

            {/* MAP PLACEHOLDER */}
            <MediaBox>
              <MediaLabel>Lokatsiya:</MediaLabel>
              {position ? (
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                    borderRadius: "6px",
                    background: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#999",
                    fontSize: "14px",
                  }}
                >
                  Map: {position[0].toFixed(4)}, {position[1].toFixed(4)}
                </div>
              ) : (
                <ReportValue>N/A</ReportValue>
              )}
            </MediaBox>
          </MediaRow>
        </ReportSection>

        {selectedReport.content && (
          <ReportSection>
            <ReportSectionTitle>
              <FaEdit /> Hisobot mazmuni
            </ReportSectionTitle>
            <ReportTextArea>{selectedReport.content}</ReportTextArea>
          </ReportSection>
        )}

        {selectedReport.additional_info && (
          <ReportSection>
            <ReportSectionTitle>
              <FaInfoCircle /> Qo'shimcha ma'lumot
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
            <span>Admin</span>
          </AppTitle>
        </SidebarHeader>
        <NavbarWrapper>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.name}
            </NavLink>
          ))}
        </NavbarWrapper>
        <SidebarMenu>
          {menuItems.map((item) => (
            <MenuItem key={item.id}>
              <MenuLink
                className={activeMenu === item.id ? "active" : ""}
                onClick={() => {
                  setActiveMenu(item.id);
                  setCurrentPage(1); // Reset to first page on menu change
                  setSearchQuery(""); // Clear search on menu change
                  setShowFilters(false); // Hide filters
                  setSelectedReport(null); // Clear selected report
                  setShowReportDetail(false); // Hide report detail
                  // Navigate using mock function
                  navigate(item.path);
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
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {/* Refresh Button */}
            <RefreshButton onClick={() => fetchData(true)} disabled={loading}>
              <FaSync />
              Yangilash
            </RefreshButton>
            {/* Add New Button - only visible for non-report sections */}
            {activeMenu !== "reports" && (
              <ActionButton onClick={handleAddNew}>
                <FaPlus />
                Yangi qo'shish
              </ActionButton>
            )}
            {/* Filter Button - Toggle visibility of filters */}
          </div>
        </ContentHeader>

        {/* Messages: Error, Success */}
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

        {/* Toolbar: Search */}
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
            // Loading Spinner while data is being fetched
            <LoadingSpinner>
              <FaSpinner size={32} />
              <div style={{ marginTop: "16px" }}>Yuklanmoqda...</div>
            </LoadingSpinner>
          ) : (
            // Render table if data is loaded
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
                    // Render rows for paginated data
                    paginatedData.map((item) => (
                      <TableRow key={item.id || Math.random()}>
                        {getColumns().map((column) => (
                          <TableCell key={column.key}>
                            {column.key === "actions" ? (
                              // Action buttons column
                              <ActionCell>
                                {activeMenu === "reports" ? (
                                  // Actions for Reports
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
                                  // Actions for other modules (Edit, Delete)
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
                              // Status badge column
                              activeMenu === "reports" ? (
                                renderReportStatusBadge(item[column.key]) // Specific for reports
                              ) : (
                                renderStatusBadge(item[column.key])
                              ) // General status badge
                            ) : column.key === "created_at" ? (
                              // Format date for created_at
                              new Date(item[column.key]).toLocaleDateString()
                            ) : (
                              // Render other cell data
                              (() => {
                                const value = item[column.key];

                                // Special handling for foreign key displays
                                if (
                                  [
                                    "faculty_id",
                                    "department_id",
                                    "direction_id",
                                    "head_id",
                                    "vice_id",
                                    "attached_teacher",
                                    "student_id", // Use the correct key for student ID in practices
                                    "group_id", // Use the correct key for group ID in practices
                                  ].includes(column.key)
                                ) {
                                  // Use the getForeignKeyDisplay helper
                                  return getForeignKeyDisplay(item, column.key);
                                }

                                // Handle object values more gracefully
                                if (
                                  typeof value === "object" &&
                                  value !== null
                                ) {
                                  try {
                                    // Prioritize common display fields
                                    if (value.name) return value.name;
                                    if (value.group_number)
                                      return value.group_number;
                                    if (value.first_name && value.last_name) {
                                      return `${value.first_name} ${value.last_name}`.trim();
                                    }
                                    if (value.username) return value.username;
                                    if (value.title) return value.title;
                                    // Fallback to stringifying if no specific field is found
                                    return JSON.stringify(value);
                                  } catch {
                                    return "-"; // Return hyphen if stringification fails
                                  }
                                }

                                // Display string value or hyphen if null/undefined
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
                    // Empty state if no data found
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

              {/* Pagination Controls */}
              {sortedData.length > itemsPerPage && ( // Only show pagination if needed
                <Pagination>
                  <PaginationInfo>
                    {startIndex + 1}-
                    {Math.min(startIndex + itemsPerPage, sortedData.length)} dan{" "}
                    {sortedData.length} ko'rsatilmoqda
                  </PaginationInfo>
                  <PaginationControls>
                    <PageButton
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Oldingi
                    </PageButton>
                    {/* Dynamic page number rendering */}
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1; // Show all pages if less than or equal to 5
                      } else if (currentPage <= 3) {
                        pageNum = i + 1; // Show first few pages
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i; // Show last few pages
                      } else {
                        pageNum = currentPage - 2 + i; // Show pages around current page
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
      {showModal &&
        activeMenu !== "reports" && ( // Don't show modal for read-only reports
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
      {showDeleteModal &&
        activeMenu !== "reports" && ( // Don't show for reports
          <ModalOverlay
            onClick={() => !isDeleting && setShowDeleteModal(false)}
          >
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
