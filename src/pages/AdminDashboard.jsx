"use client";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback, useMemo } from "react";
import styled, { keyframes } from "styled-components";
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
  FaFileAlt,
  FaDownload,
  FaEyeSlash,
  FaInfoCircle,
  FaChevronDown,
} from "react-icons/fa";
import api from "../services/api";
import PracticeLocationPicker from "../components/PracticeLocationPicker.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

// Animatsiyalar
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

// --- STYLED COMPONENTS ---

const DashboardContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
  background: ${(p) => p.theme.backgroundGradient || p.theme.background};
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  animation: ${fadeIn} 0.3s ease-out;
  z-index: 0;

  @media (max-width: 768px) {
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

  @media (max-width: 1024px) {
    width: 240px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 16px 0;
    border-right: none;
    border-bottom: 1px solid ${(p) => p.theme.border};
    overflow-y: visible;
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

  @media (max-width: 1024px) {
    margin-left: 240px;
    padding: 24px;
    max-width: calc(100vw - 240px);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 16px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const SidebarHeader = styled.div`
  padding: 0 24px 16px;
  border-bottom: 1px solid ${(p) => p.theme.border}40;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    padding: 0 16px 12px;
    margin-bottom: 12px;
  }
`;

const AppTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(p) => p.theme.text};

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.3rem;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding: 0 16px 8px 16px;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const MenuItem = styled.li`
  margin-bottom: 4px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 24px;
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
    padding: 8px 16px;
    border-left: none;
    border-radius: 8px;
    gap: 8px;
    background: ${(p) => p.theme.background};
    border: 1px solid ${(p) => p.theme.border}60;

    &:hover {
      transform: none;
      border-color: ${(p) => p.theme.primary};
      &:before {
        display: none;
      }
    }

    &.active {
      background: ${(p) => p.theme.primary}15;
      border-color: ${(p) => p.theme.primary};
      border-left: none;
      &:after {
        display: none;
      }
    }
  }
`;

const MenuIcon = styled.div`
  font-size: 18px;
  width: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    width: auto;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
  animation: ${slideIn} 0.4s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const PageTitle = styled.h1`
  font-size: 1.8rem;
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

  @media (max-width: 768px) {
    font-size: 1.5rem;
    gap: 8px;
    &:before {
      height: 20px;
      width: 3px;
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
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${(p) => p.theme.primary}40;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${(p) => p.theme.primary}60;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
    gap: 6px;
    flex: 1;
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

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 8px;
  }
`;

const Toolbar = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 16px;
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.cardBg};
  border: 2px solid ${(p) => p.theme.border}60;
  border-radius: 12px;
  padding: 10px 16px;
  flex: 1;
  max-width: 400px;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  &:focus-within {
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 4px 20px ${(p) => p.theme.primary}20;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px 12px;
  }
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  color: ${(p) => p.theme.text};
  font-size: 14px;
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
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
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
  padding: 16px;
  text-align: left;
  font-weight: 600;
  font-size: 13px;
  color: ${(p) => p.theme.text}90;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: ${(p) => (p.$sortable ? "pointer" : "default")};
  user-select: none;
  position: relative;
  white-space: nowrap;
`;

const TableCell = styled.td`
  padding: 14px 16px;
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
  padding: 8px;
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
    }
  }
  &.edit {
    background: #3b82f610;
    color: #3b82f6;
    &:hover {
      background: #3b82f6;
      color: white;
    }
  }
  &.delete {
    background: #ef444410;
    color: #ef4444;
    &:hover {
      background: #ef4444;
      color: white;
    }
  }
  &.download {
    background: #10b98110;
    color: #10b981;
    &:hover {
      background: #10b981;
      color: white;
    }
  }
`;

const StatusBadge = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  &.active,
  &.approved {
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
  padding: 16px 20px;
  border-top: 1px solid ${(p) => p.theme.border}30;
  background: ${(p) => p.theme.background};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const PaginationInfo = styled.div`
  font-size: 13px;
  color: ${(p) => p.theme.text}60;
  font-weight: 500;
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 640px) {
    gap: 4px;
  }
`;

const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid ${(p) => p.theme.border};
  background: ${(p) => p.theme.cardBg};
  color: ${(p) => p.theme.text};
  cursor: pointer;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    border-color: ${(p) => p.theme.primary};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &.active {
    border-color: ${(p) => p.theme.primary};
    background: ${(p) => p.theme.primary}10;
    color: ${(p) => p.theme.primary};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${(p) => p.theme.text}60;
  svg {
    font-size: 48px;
    margin-bottom: 16px;
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
  padding: 14px 20px;
  border-radius: 12px;
  margin-bottom: 20px;
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
`;

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

  @media (max-width: 640px) {
    padding: 10px;
  }
`;

const ModalContent = styled.div`
  background: ${(p) => p.theme.cardBg};
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${slideIn} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 640px) {
    padding: 16px;
    border-radius: 12px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: ${(p) => p.theme.text};
  font-size: 1.3rem;
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
  &:hover {
    color: ${(p) => p.theme.text};
    background: ${(p) => p.theme.border}40;
  }
`;

const ReportDetailContainer = styled.div`
  padding: 10px 0;
`;

const ReportSection = styled.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${(p) => p.theme.border}30;
  &:last-child {
    border-bottom: none;
  }
`;

const ReportSectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(p) => p.theme.primary};
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ReportField = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const ReportLabel = styled.span`
  font-weight: 600;
  color: ${(p) => p.theme.text}80;
  min-width: 120px;
  font-size: 14px;
`;

const ReportValue = styled.span`
  flex: 1;
  color: ${(p) => p.theme.text};
  line-height: 1.5;
  font-size: 14px;
`;

const ReportTextArea = styled.div`
  background: ${(p) => p.theme.background};
  border-radius: 8px;
  padding: 12px;
  margin-top: 8px;
  border: 1px solid ${(p) => p.theme.border}30;
  white-space: pre-wrap;
  line-height: 1.5;
  font-size: 14px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;
const FormGroupWrapper = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const FormInput = styled.input`
  background: none;
  width: 100%;
  padding: 12px;
  padding-right: ${(props) => (props.$hasPasswordToggle ? "40px" : "12px")};
  border: 1px solid ${(p) => p.theme.border}80;
  border-radius: 8px;
  color: ${(p) => p.theme.text};
  color-scheme: ${(p) => p.theme.mode || "light"};
  font-size: 14px;
  transition: all 0.3s ease;

  &[type="date"] {
    cursor: pointer;
    min-height: 44px;
  }
  &[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.9;
  }
  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 0 0 3px ${(p) => p.theme.primary}20;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${(p) => p.theme.text}90;
  font-size: 13px;
`;

const FormSelect = styled.select`
  background: ${(p) => p.theme.inputBorder || "transparent"};
  width: 100%;
  padding: 12px;
  border: 1px solid ${(p) => p.theme.border}80;
  border-radius: 8px;
  color: ${(p) => p.theme.text};
  font-size: 14px;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 36px;
  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 0 0 3px ${(p) => p.theme.primary}20;
  }
`;

const FormTextArea = styled.textarea`
  background: none;
  width: 100%;
  padding: 12px;
  border: 1px solid ${(p) => p.theme.border}80;
  border-radius: 8px;
  color: ${(p) => p.theme.text};
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.primary};
    box-shadow: 0 0 0 3px ${(p) => p.theme.primary}20;
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
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${(p) => p.theme.border}40;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }
`;

const SecondaryButton = styled.button`
  background: ${(p) => p.theme.cardBg};
  color: ${(p) => p.theme.text};
  border: 1px solid ${(p) => p.theme.border}80;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  &:hover:not(:disabled) {
    background: ${(p) => p.theme.background};
  }
`;

const DeleteConfirmModal = styled.div`
  text-align: center;
  padding: 10px;
`;
const DeleteIcon = styled.div`
  font-size: 48px;
  color: #ef4444;
  margin-bottom: 16px;
  opacity: 0.8;
`;
const DeleteText = styled.p`
  margin-bottom: 24px;
  color: ${(p) => p.theme.text};
  font-size: 15px;
  line-height: 1.5;
`;
const DeleteActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const DeleteButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;
  &:hover:not(:disabled) {
    background: #dc2626;
  }
`;

export const MediaRow = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  margin-top: 10px;
  @media (max-width: 640px) {
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
  font-size: 13px;
`;

export const ReportImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 6px;
  @media (max-width: 640px) {
    height: 180px;
  }
`;

const DropdownContainer = styled.div`
  padding: 0 16px;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: ${(p) => p.theme.background};
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 10px;
  color: ${(p) => p.theme.text};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  svg {
    transition: transform 0.3s ease;
    transform: ${(p) => (p.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const DropdownMenu = styled.div`
  display: ${(p) => (p.$isOpen ? "flex" : "none")};
  flex-direction: column;
  margin-top: 8px;
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 10px;
  overflow: hidden;
`;

const DropdownItem = styled(Link)`
  padding: 12px 16px;
  color: ${(p) => p.theme.text}90;
  text-decoration: none;
  font-size: 14px;
  &:hover,
  &.active {
    background: ${(p) => p.theme.primary}12;
    color: ${(p) => p.theme.primary};
  }
`;

const CACHE_KEYS = {
  users: "users_cache",
  faculties: "faculties_cache",
  departments: "departments_cache",
  directions: "directions_cache",
  groups: "groups_cache",
  practices: "practices_cache",
  reports: "reports_cache",
};

const navItems = [
  { name: "Faculties", path: "/faculties" },
  { name: "Departments", path: "/departments" },
  { name: "Directions", path: "/directions" },
  { name: "Groups", path: "/groups" },
  { name: "Students", path: "/students" },
  { name: "Admin Dashboard", path: "/admin/dashboard" },
];

// --- MAIN COMPONENT ---

export default function AdminDashboard() {
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
  const [selectedReport, setSelectedReport] = useState(null);
  const [showReportDetail, setShowReportDetail] = useState(false);
  const [reportDetailLoading, setReportDetailLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState({});

  const [isAcademicDropdownOpen, setIsAcademicDropdownOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navigate = (path) => {
    setActiveMenu(path.split("/").pop() || "users");
  };
  function parseWKTPoint(wkt) {
    if (!wkt) return null;

    // GeoJSON obyekt
    if (typeof wkt === "object") {
      if (
        wkt.type === "Point" &&
        Array.isArray(wkt.coordinates) &&
        wkt.coordinates.length >= 2
      ) {
        const lng = Number(wkt.coordinates[0]);
        const lat = Number(wkt.coordinates[1]);
        return Number.isFinite(lat) && Number.isFinite(lng) ? [lat, lng] : null;
      }
      if (Array.isArray(wkt.coordinates) && wkt.coordinates.length >= 2) {
        const lng = Number(wkt.coordinates[0]);
        const lat = Number(wkt.coordinates[1]);
        return Number.isFinite(lat) && Number.isFinite(lng) ? [lat, lng] : null;
      }
      return null;
    }

    // WKT matn
    if (typeof wkt === "string") {
      const match = wkt.match(
        /POINT\s*\(\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\s*\)/i,
      );
      if (!match) return null;
      return [Number(match[2]), Number(match[1])];
    }

    return null;
  }
  const togglePasswordVisibility = (fieldName) => {
    setPasswordVisible((prev) => ({ ...prev, [fieldName]: !prev[fieldName] }));
  };

  const menuItems = [
    {
      id: "users",
      label: t("admin.sections.users"),
      icon: <FaUser />,
      path: "/admin/users",
    },
    {
      id: "faculties",
      label: t("admin.sections.faculties"),
      icon: <FaUniversity />,
      path: "/admin/faculties",
    },
    {
      id: "departments",
      label: t("admin.sections.departments"),
      icon: <FaBuilding />,
      path: "/admin/departments",
    },
    {
      id: "directions",
      label: t("admin.sections.directions"),
      icon: <FaDirections />,
      path: "/admin/directions",
    },
    {
      id: "groups",
      label: t("admin.sections.groups"),
      icon: <FaUsers />,
      path: "/admin/groups",
    },
    {
      id: "practices",
      label: t("admin.sections.practices"),
      icon: <FaCalendarAlt />,
      path: "/admin/practices",
    },
    {
      id: "reports",
      label: t("admin.sections.reports"),
      icon: <FaFileAlt />,
      path: "/admin/reports",
    },
  ];

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
          ? users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {})
          : {},
        faculties: Array.isArray(faculties)
          ? faculties.reduce((acc, f) => ({ ...acc, [f.id]: f }), {})
          : {},
        departments: Array.isArray(departments)
          ? departments.reduce((acc, d) => ({ ...acc, [d.id]: d }), {})
          : {},
        directions: Array.isArray(directions)
          ? directions.reduce((acc, d) => ({ ...acc, [d.id]: d }), {})
          : {},
        groups: Array.isArray(groups)
          ? groups.reduce((acc, g) => ({ ...acc, [g.id]: g }), {})
          : {},
      });
    } catch (err) {
      console.error("Error fetching related data:", err);
    }
  }, []);

  const fetchData = useCallback(
    async (forceRefresh = false) => {
      setLoading(true);
      setError(null);
      const cacheKey = CACHE_KEYS[activeMenu];
      const cached = localStorage.getItem(cacheKey);
      const cachedTimestamp = cacheTimestamp[activeMenu];
      const now = Date.now();

      if (
        !forceRefresh &&
        cached &&
        cachedTimestamp &&
        now - cachedTimestamp < 5 * 60 * 1000
      ) {
        try {
          setData(JSON.parse(cached) || []);
          setLoading(false);
          return;
        } catch (e) {
          console.error(e);
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
    [activeMenu, cacheTimestamp],
  );

  useEffect(() => {
    fetchData();
    if (activeMenu !== "reports") fetchRelatedData();
  }, [activeMenu, fetchData, fetchRelatedData]);

  const fetchReportDetail = useCallback(async (reportId) => {
    setReportDetailLoading(true);
    setError(null);
    try {
      setSelectedReport(await api.getMyReport(reportId));
      setShowReportDetail(true);
    } catch (err) {
      setError(`Failed to fetch report: ${err.message}`);
    } finally {
      setReportDetailLoading(false);
    }
  }, []);

  // Xarita uchun onChange funksiyasini xotiraga olamiz (qayta-qayta yaratilmasligi uchun)
  const handleLocationChange = useCallback(({ location, address }) => {
    setFormData((prev) => ({
      ...prev,
      location,
      ...(address ? { address } : {}),
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeMenu === "practices" && !parseWKTPoint(formData.location)) {
      setError(t("practice.locationRequired") || "Amaliyot joyini tanlang.");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      if (editingItem) {
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
        }
        setSuccess(`${getFormTemplate()?.title} muvaffaqiyatli yangilandi!`);
      } else {
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
        }
        setSuccess(`${getFormTemplate()?.title} muvaffaqiyatli yaratildi!`);
      }
      setShowModal(false);
      setFormData({});
      setEditingItem(null);
      localStorage.removeItem(CACHE_KEYS[activeMenu]);
      fetchData(true);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message || "Failed to save");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteItemId) return;
    setIsDeleting(true);
    setError(null);
    setSuccess(null);
    try {
      switch (activeMenu) {
        case "users":
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
      }
      setSuccess(`${getFormTemplate()?.title} muvaffaqiyatli o'chirildi!`);
      setShowDeleteModal(false);
      setDeleteItemId(null);
      localStorage.removeItem(CACHE_KEYS[activeMenu]);
      fetchData(true);
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError(err.message || "Failed to delete");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = (item) => {
    if (activeMenu === "reports") return;
    setEditingItem(item);

    // Nested obyektlarni tozalash (Edit rejimida select ishlashi uchun)
    const sanitizedData = { ...item };
    const foreignKeys = [
      "student",
      "group",
      "attached_teacher",
      "faculty_id",
      "department_id",
      "direction_id",
      "head_id",
      "vice_id",
    ];

    foreignKeys.forEach((key) => {
      if (
        sanitizedData[key] &&
        typeof sanitizedData[key] === "object" &&
        sanitizedData[key].id
      ) {
        sanitizedData[key] = sanitizedData[key].id;
      }
    });

    setFormData(JSON.parse(JSON.stringify(sanitizedData)));
    setShowModal(true);
  };

  const handleAddNew = () => {
    if (activeMenu === "reports") return;
    setEditingItem(null);
    setFormData({});
    setShowModal(true);
  };
  const handleViewReport = (reportId) => fetchReportDetail(reportId);

  const handleDownloadReport = (report) => {
    const text = `TALABA MA'LUMOTLARI\nIsmi: ${report.student?.first_name || "-"}\nFamiliyasi: ${report.student?.last_name || "-"}\nGuruh: ${report.student?.group || "-"}\n\nHISOBOT MA'LUMOTLARI\nMatn:\n${report.text || "-"}\n\nSana: ${report.created_at ? new Date(report.created_at).toLocaleString() : "-"}`;
    const blob = new Blob([text.trim()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `report_${report.id}_${report.student?.last_name || "student"}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number.parseInt(value) || "" : value,
    }));
  };

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
        return item.student_data
          ? `${item.student_data.first_name ?? ""} ${item.student_data.last_name ?? ""}`.trim() ||
              "-"
          : "-";
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
        return item.teacher_data
          ? `${item.teacher_data.first_name ?? ""} ${item.teacher_data.last_name ?? ""}`.trim() ||
              "-"
          : "-";
      default:
        return "-";
    }
  }

  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter((item) =>
      Object.entries(item).some(([key, value]) => {
        if (value === null || value === undefined) return false;
        if (typeof value === "object") {
          try {
            return JSON.stringify(value)
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          } catch {
            return false;
          }
        }
        return String(value).toLowerCase().includes(searchQuery.toLowerCase());
      }),
    );
  }, [data, searchQuery]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      let aValue = a[sortField],
        bValue = b[sortField];
      if (typeof aValue === "object" && aValue !== null)
        aValue =
          aValue.name ||
          aValue.group_number ||
          aValue.first_name ||
          aValue.username ||
          aValue.id ||
          "";
      if (typeof bValue === "object" && bValue !== null)
        bValue =
          bValue.name ||
          bValue.group_number ||
          bValue.first_name ||
          bValue.username ||
          bValue.id ||
          "";
      const aStr = String(aValue || "").toLowerCase(),
        bStr = String(bValue || "").toLowerCase();
      return aStr < bStr
        ? sortDirection === "asc"
          ? -1
          : 1
        : aStr > bStr
          ? sortDirection === "asc"
            ? 1
            : -1
          : 0;
    });
  }, [filteredData, sortField, sortDirection]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

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

  const getFormFields = () => {
    const userOptions = Object.values(relatedData.users || {})
      .filter((u) => u && u.id && u.first_name)
      .map((u) => ({
        value: u.id,
        label: `${u.first_name} ${u.last_name}`.trim(),
        role: u.role,
      }));
    const teacherOptions = Object.values(relatedData.users || {})
      .filter((u) => u && u.id && u.role === "teacher")
      .map((u) => ({
        value: u.id,
        label: `${u.first_name} ${u.last_name}`.trim(),
      }));
    const studentOptions = Object.values(relatedData.users || {})
      .filter((u) => u && u.id && u.role === "student")
      .map((u) => ({
        value: u.id,
        label: `${u.first_name} ${u.last_name}`.trim(),
      }));
    const facultyOptions = Object.values(relatedData.faculties || {})
      .filter((f) => f && f.id)
      .map((f) => ({ value: f.id, label: f.name }));
    const departmentOptions = Object.values(relatedData.departments || {})
      .filter((d) => d && d.id)
      .map((d) => ({
        value: d.id,
        label: `${d.name} (${d.abbr || "no code"})`.trim(),
      }));
    const directionOptions = Object.values(relatedData.directions || {})
      .filter((d) => d && d.id)
      .map((d) => ({ value: d.id, label: d.name }));
    const groupOptions = Object.values(relatedData.groups || {})
      .filter((g) => g && g.id)
      .map((g) => ({ value: g.id, label: g.group_number }));

    const baseFields = {
      users: [
        { name: "username", label: "Username", type: "text", required: true },
        { name: "first_name", label: "Ism", type: "text", required: true },
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
          required: true,
        },
      ].filter(Boolean),
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
        { name: "name", label: "Kafedra nomi", type: "text", required: true },
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
          label: t("practice.student"),
          type: "select",
          required: true,
          options: studentOptions,
        },
        {
          name: "date",
          label: t("practice.date"),
          type: "date",
          required: true,
        },
        {
          name: "duty_name",
          label: t("practice.dutyName"),
          type: "text",
          required: true,
        },
        {
          name: "org_name",
          label: t("practice.organization"),
          type: "text",
          required: true,
        },
        {
          name: "address",
          label: t("practice.address"),
          type: "text",
          required: true,
        },
        {
          name: "location",
          label: t("practice.location"),
          type: "location-picker",
          required: true,
        },
        {
          name: "target",
          label: t("practice.target"),
          type: "textarea",
          required: true,
        },
        {
          name: "start_time",
          label: t("practice.startTime"),
          type: "time",
          required: true,
        },
        {
          name: "end_time",
          label: t("practice.endTime"),
          type: "time",
          required: true,
        },
      ],
      reports: [],
    };
    return baseFields[activeMenu] || baseFields.users;
  };

  const renderReportStatusBadge = (status) => {
    if (!status) return <StatusBadge className="inactive">-</StatusBadge>;
    const s = String(status).toLowerCase();
    let cls = "inactive";
    if (s === "success") cls = "approved";
    else if (s === "rejected") cls = "rejected";
    else if (s === "pending") cls = "submitted";
    else if (s === "active") cls = "active";
    return (
      <StatusBadge className={cls}>
        {s.charAt(0).toUpperCase() + s.slice(1)}
      </StatusBadge>
    );
  };

  const renderStatusBadge = (status) => {
    const isActive = status === true || status === "true";
    const isInactive = status === false || status === "false";
    if (isActive)
      return <StatusBadge className="active">{t("admin.active")}</StatusBadge>;
    else if (isInactive)
      return (
        <StatusBadge className="inactive">{t("admin.inactive")}</StatusBadge>
      );
    else if (status === "pending")
      return (
        <StatusBadge className="pending">{t("admin.pending")}</StatusBadge>
      );
    else if (status === "rejected")
      return (
        <StatusBadge className="rejected">{t("admin.rejected")}</StatusBadge>
      );
    else if (status === "success")
      return (
        <StatusBadge className="approved">{t("admin.approved")}</StatusBadge>
      );
    return <StatusBadge className="inactive">-</StatusBadge>;
  };

  const handleSort = (field) => {
    if (field === "actions") return;
    if (sortField === field)
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    else {
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
    if (activeMenu === "reports") return null;

    return (
      <form onSubmit={handleSubmit}>
        {activeMenu === "practices" && error && (
          <Message className="error">
            <FaExclamationCircle /> {error}
          </Message>
        )}
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
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                      padding: "8px",
                      fontSize: "18px",
                      zIndex: 1,
                    }}
                    aria-label="Toggle password visibility"
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
                  <option value="">
                    {activeMenu === "practices" && field.name === "student"
                      ? t("practice.chooseStudent")
                      : `${field.label}ni tanlang`}
                  </option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </FormSelect>
              ) : field.type === "location-picker" ? (
                <PracticeLocationPicker
                  value={formData.location || ""}
                  onChange={handleLocationChange}
                />
              ) : field.type === "textarea" ? (
                <FormTextArea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleInputChange}
                  required={field.required}
                  rows="3"
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
            {t("admin.cancel")}
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
                {t("admin.saving")}
              </>
            ) : (
              <>
                <FaSave />
                {editingItem ? t("admin.update") : t("admin.create")}
              </>
            )}
          </ActionButton>
        </FormActions>
      </form>
    );
  };

  const renderReportDetail = () => {
    if (!selectedReport) return null;
    const position = parseWKTPoint(selectedReport.location);
    return (
      <ReportDetailContainer>
        <ReportSection>
          <ReportSectionTitle>
            <FaUser /> {t("admin.studentInfo")}
          </ReportSectionTitle>
          <ReportField>
            <ReportLabel>{t("admin.student")}</ReportLabel>
            <ReportValue>
              {selectedReport.student?.first_name || ""}{" "}
              {selectedReport.student?.last_name || ""}
            </ReportValue>
          </ReportField>
          <ReportField>
            <ReportLabel>{t("admin.group")}</ReportLabel>
            <ReportValue>{selectedReport.student?.group || "N/A"}</ReportValue>
          </ReportField>
          <ReportField>
            <ReportLabel>{t("admin.direction")}</ReportLabel>
            <ReportValue>
              {selectedReport.student?.direction || "N/A"}
            </ReportValue>
          </ReportField>
        </ReportSection>
        <ReportSection>
          <ReportSectionTitle>
            <FaFileAlt /> {t("admin.reportDetails")}
          </ReportSectionTitle>
          <ReportField>
            <ReportLabel>{t("admin.text")}</ReportLabel>
            <ReportValue>{selectedReport.text || "N/A"}</ReportValue>
          </ReportField>
          <ReportField>
            <ReportLabel>{t("admin.createdAt")}</ReportLabel>
            <ReportValue>
              {new Date(selectedReport.created_at).toLocaleString()}
            </ReportValue>
          </ReportField>
          {selectedReport.updated_at && (
            <ReportField>
              <ReportLabel>{t("admin.updatedAt")}</ReportLabel>
              <ReportValue>
                {new Date(selectedReport.updated_at).toLocaleString()}
              </ReportValue>
            </ReportField>
          )}
          <MediaRow>
            <MediaBox>
              <MediaLabel>{t("admin.image")}</MediaLabel>
              {selectedReport.image ? (
                <ReportImage src={selectedReport.image} alt="Report" />
              ) : (
                <ReportValue>N/A</ReportValue>
              )}
            </MediaBox>
            <MediaBox>
              <MediaLabel>{t("admin.location")}</MediaLabel>
              {position ? (
                <div
                  style={{
                    height: "200px",
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
              <FaEdit /> {t("admin.content")}
            </ReportSectionTitle>
            <ReportTextArea>{selectedReport.content}</ReportTextArea>
          </ReportSection>
        )}
        {selectedReport.additional_info && (
          <ReportSection>
            <ReportSectionTitle>
              <FaInfoCircle /> {t("admin.additionalInfo")}
            </ReportSectionTitle>
            <ReportTextArea>{selectedReport.additional_info}</ReportTextArea>
          </ReportSection>
        )}
      </ReportDetailContainer>
    );
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarHeader>
          <AppTitle>
            <FaUniversity />
            <span>Admin</span>
          </AppTitle>
        </SidebarHeader>
        <DropdownContainer>
          <DropdownButton
            $isOpen={isAcademicDropdownOpen}
            onClick={() => setIsAcademicDropdownOpen(!isAcademicDropdownOpen)}
          >
            <span>{t("admin.academicSections")}</span>
            <FaChevronDown />
          </DropdownButton>
          <DropdownMenu $isOpen={isAcademicDropdownOpen}>
            {navItems.map((item) => (
              <DropdownItem
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
                onClick={() => setIsAcademicDropdownOpen(false)}
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </DropdownContainer>
        <SidebarMenu>
          {menuItems.map((item) => (
            <MenuItem key={item.id}>
              <MenuLink
                className={activeMenu === item.id ? "active" : ""}
                onClick={() => {
                  setActiveMenu(item.id);
                  setCurrentPage(1);
                  setSearchQuery("");
                  setSelectedReport(null);
                  setShowReportDetail(false);
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

      <MainContent>
        <ContentHeader>
          <PageTitle>
            {menuItems.find((item) => item.id === activeMenu)?.label}
          </PageTitle>

          <ButtonsContainer>
            <RefreshButton onClick={() => fetchData(true)} disabled={loading}>
              <FaSync /> {t("admin.refresh")}
            </RefreshButton>
            {activeMenu !== "reports" && (
              <ActionButton onClick={handleAddNew}>
                <FaPlus /> {t("admin.addNew")}
              </ActionButton>
            )}
          </ButtonsContainer>
        </ContentHeader>

        {error && (
          <Message className="error">
            <FaExclamationCircle /> {error}
          </Message>
        )}
        {success && (
          <Message className="success">
            <FaCheckCircle /> {success}
          </Message>
        )}

        <Toolbar>
          <SearchBox>
            <FaSearch size={16} />
            <SearchInput
              placeholder={t("admin.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBox>
        </Toolbar>

        <DataTable>
          {loading ? (
            <LoadingSpinner>
              <FaSpinner size={32} />
              <div style={{ marginTop: "16px" }}>{t("admin.loading")}</div>
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
                          {column.label}{" "}
                          {column.sortable && getSortIcon(column.key)}
                        </div>
                      </TableHeaderCell>
                    ))}
                  </TableRow>
                </TableHeader>
                <tbody>
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item) => (
                      <TableRow key={item.id || Math.random()}>
                        {getColumns().map((column) => (
                          <TableCell key={column.key}>
                            {column.key === "actions" ? (
                              <ActionCell>
                                {activeMenu === "reports" ? (
                                  <>
                                    <IconButton
                                      className="view"
                                      title={t("admin.viewDetails")}
                                      onClick={() => handleViewReport(item.id)}
                                    >
                                      <FaEye />
                                    </IconButton>
                                    <IconButton
                                      className="download"
                                      title={t("admin.downloadReport")}
                                      onClick={() => handleDownloadReport(item)}
                                    >
                                      <FaDownload />
                                    </IconButton>
                                  </>
                                ) : (
                                  <>
                                    <IconButton
                                      className="edit"
                                      title={t("admin.edit")}
                                      onClick={() => handleEdit(item)}
                                    >
                                      <FaEdit />
                                    </IconButton>
                                    <IconButton
                                      className="delete"
                                      title={t("admin.delete")}
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
                              (() => {
                                const value = item[column.key];
                                if (
                                  [
                                    "faculty_id",
                                    "department_id",
                                    "direction_id",
                                    "head_id",
                                    "vice_id",
                                    "attached_teacher",
                                    "student_id",
                                    "group_id",
                                  ].includes(column.key)
                                )
                                  return getForeignKeyDisplay(item, column.key);
                                if (
                                  typeof value === "object" &&
                                  value !== null
                                ) {
                                  try {
                                    if (value.name) return value.name;
                                    if (value.group_number)
                                      return value.group_number;
                                    if (value.first_name && value.last_name)
                                      return `${value.first_name} ${value.last_name}`.trim();
                                    if (value.username) return value.username;
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
                              fontSize: "16px",
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

              {sortedData.length > itemsPerPage && (
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
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) pageNum = i + 1;
                      else if (currentPage <= 3) pageNum = i + 1;
                      else if (currentPage >= totalPages - 2)
                        pageNum = totalPages - 4 + i;
                      else pageNum = currentPage - 2 + i;
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
                      {t("admin.next")}
                    </PageButton>
                  </PaginationControls>
                </Pagination>
              )}
            </>
          )}
        </DataTable>
      </MainContent>

      {showModal && activeMenu !== "reports" && (
        <ModalOverlay onClick={() => !isSubmitting && setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>
                {activeMenu === "practices"
                  ? `${editingItem ? t("practice.edit") : t("practice.addNew")}`
                  : `${editingItem ? t("admin.edit") : t("admin.addNew")} ${getFormTemplate()?.title}`}
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
                <FaFileAlt /> {t("admin.reportDetails")}
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
                <div style={{ marginTop: "16px" }}>Yuklanmoqda...</div>
              </LoadingSpinner>
            ) : (
              renderReportDetail()
            )}
          </ModalContent>
        </ModalOverlay>
      )}

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
