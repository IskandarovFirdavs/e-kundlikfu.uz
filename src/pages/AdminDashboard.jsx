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
} from "react-icons/fa";
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
  background: linear-gradient(
    135deg,
    ${(p) => p.theme.primary},
    ${(p) => p.theme.secondary || "#667eea"}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

// Fix: Use $ prefix for transient prop
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
    background: ${(p) => p.theme.primary};
    color: white;
    border-color: ${(p) => p.theme.primary};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    background: ${(p) => p.theme.primary};
    color: white;
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
  max-width: 500px;
  max-height: 70vh;
  overflow-y: auto;
  animation: ${slideIn} 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 24px;
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

const FormGroup = styled.div`
  margin-bottom: 24px;
  position: relative;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${(p) => p.theme.text}90;
  font-size: 14px;
`;

const FormInput = styled.input`
  background: none;
  width: 100%;
  padding: 14px;
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
};

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

  // Menu Items
  const menuItems = [
    { id: "users", label: "Users", icon: <FaUser />, path: "/admin/users" },
    {
      id: "faculties",
      label: "Faculties",
      icon: <FaUniversity />,
      path: "/admin/faculties",
    },
    {
      id: "departments",
      label: "Departments",
      icon: <FaBuilding />,
      path: "/admin/departments",
    },
    {
      id: "directions",
      label: "Directions",
      icon: <FaDirections />,
      path: "/admin/directions",
    },
    { id: "groups", label: "Groups", icon: <FaUsers />, path: "/admin/groups" },
    {
      id: "practices",
      label: "Practice Days",
      icon: <FaCalendarAlt />,
      path: "/admin/practices",
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
      console.error("Failed to fetch related data:", err);
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
          default:
            response = [];
        }

        console.log(`Fetched ${activeMenu}:`, response);

        if (Array.isArray(response)) {
          setData(response);
          // Cache the response
          localStorage.setItem(cacheKey, JSON.stringify(response));
          setCacheTimestamp((prev) => ({ ...prev, [activeMenu]: now }));
        } else {
          console.error("Response is not an array:", response);
          setData([]);
        }
      } catch (err) {
        setError(`Failed to fetch ${activeMenu}: ${err.message}`);
        console.error("Fetch error:", err);
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
    fetchRelatedData();
  }, [activeMenu, fetchData, fetchRelatedData]);

  // Handle create/update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log("Submitting form data:", formData);

      if (editingItem) {
        // Update
        console.log(`Updating ${activeMenu} with ID: ${editingItem.id}`);
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
        setSuccess(`${getFormTemplate()?.title} updated successfully!`);
      } else {
        // Create
        console.log(`Creating new ${activeMenu}`);
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
        setSuccess(`${getFormTemplate()?.title} created successfully!`);
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
      console.error("Submit error:", err);
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
      }

      setSuccess(`${getFormTemplate()?.title} deleted successfully!`);
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
    setEditingItem(item);
    setFormData(item);
    setShowModal(true);
  };

  // Handle add new
  const handleAddNew = () => {
    setEditingItem(null);
    setFormData({});
    setShowModal(true);
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
    };
    return templates[activeMenu] || templates.users;
  };

  function getForeignKeyDisplay(item, key) {
    switch (key) {
      case "student":
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
        return item.group?.group_number || "-";
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
        aValue = aValue.name || aValue.id || "";
      }
      if (typeof bValue === "object" && bValue !== null) {
        bValue = bValue.name || bValue.id || "";
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
        { key: "first_name", label: "First Name", sortable: true },
        { key: "last_name", label: "Last Name", sortable: true },
        { key: "role", label: "Role", sortable: true },
        { key: "attached_teacher", label: "Teacher", sortable: true },
        { key: "group", label: "Group", sortable: true },
        { key: "actions", label: "Actions", sortable: false },
      ],
      faculties: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Name", sortable: true },
        { key: "head_id", label: "Head", sortable: true },
        { key: "vice_id", label: "Vice", sortable: true },
        { key: "actions", label: "Actions", sortable: false },
      ],
      departments: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Name", sortable: true },
        { key: "abbr", label: "Code", sortable: true },
        { key: "faculty_id", label: "Faculty", sortable: true },
        { key: "head_id", label: "Head", sortable: true },
        { key: "actions", label: "Actions", sortable: false },
      ],
      directions: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Name", sortable: true },
        { key: "department_id", label: "Department", sortable: true },
        { key: "actions", label: "Actions", sortable: false },
      ],
      groups: [
        { key: "id", label: "ID", sortable: true },
        { key: "group_number", label: "Group", sortable: true },
        { key: "direction_id", label: "Direction", sortable: true },
        { key: "actions", label: "Actions", sortable: false },
      ],
      practices: [
        { key: "id", label: "ID", sortable: true },
        { key: "student", label: "Student", sortable: true },
        { key: "date", label: "Date", sortable: true },
        { key: "org_name", label: "Organization", sortable: true },
        { key: "duty_name", label: "Duty", sortable: true },
        { key: "status", label: "Status", sortable: true },
        { key: "actions", label: "Actions", sortable: false },
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
        label: `${user.first_name} ${user.last_name} (${
          user.role || "no role"
        })`,
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
          label: "First Name",
          type: "text",
          required: true,
        },
        { name: "last_name", label: "Last Name", type: "text", required: true },
        {
          name: "role",
          label: "Role",
          type: "select",
          required: true,
          options: [
            { value: "admin", label: "Admin" },
            { value: "rector", label: "Rector" },
            { value: "vice_rector", label: "Vice Rector" },
            { value: "dean", label: "Dean" },
            { value: "deputy_dean", label: "Deputy Dean" },
            { value: "head_of_department", label: "Head of Department" },
            { value: "teacher", label: "Teacher" },
            { value: "student", label: "Student" },
          ],
        },
        ...(formData?.role === "student"
          ? [
              {
                name: "attached_teacher",
                label: "Teacher",
                type: "select",
                required: true,
                options: teacherOptions,
              },
              {
                name: "group",
                label: "Group",
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
          required: !editingItem,
        },
      ],
      faculties: [
        { name: "name", label: "Faculty Name", type: "text", required: true },
        {
          name: "head_id",
          label: "Head",
          type: "select",
          required: true,
          options: userOptions.filter((opt) => !opt.label.includes("student")),
        },
        {
          name: "vice_id",
          label: "Vice Head",
          type: "select",
          required: false,
          options: userOptions.filter((opt) => !opt.label.includes("student")),
        },
      ],
      departments: [
        {
          name: "name",
          label: "Department Name",
          type: "text",
          required: true,
        },
        { name: "abbr", label: "Abbreviation", type: "text", required: false },
        {
          name: "faculty_id",
          label: "Faculty",
          type: "select",
          required: true,
          options: facultyOptions,
        },
        {
          name: "head_id",
          label: "Head",
          type: "select",
          required: true,
          options: userOptions.filter((opt) => !opt.label.includes("student")),
        },
      ],
      directions: [
        { name: "name", label: "Direction Name", type: "text", required: true },
        {
          name: "department_id",
          label: "Department",
          type: "select",
          required: true,
          options: departmentOptions,
        },
      ],
      groups: [
        {
          name: "group_number",
          label: "Group Number",
          type: "text",
          required: true,
        },
        {
          name: "direction_id",
          label: "Direction",
          type: "select",
          required: true,
          options: directionOptions,
        },
      ],
      practices: [
        {
          name: "student",
          label: "Student",
          type: "select",
          required: true,
          options: studentOptions,
        },
        { name: "date", label: "Date", type: "date", required: true },
        { name: "duty_name", label: "Duty Name", type: "text", required: true },
        {
          name: "org_name",
          label: "Organization Name",
          type: "text",
          required: true,
        },
        { name: "address", label: "Address", type: "text", required: false },
        { name: "location", label: "Location", type: "text", required: false },
        { name: "target", label: "Target", type: "textarea", required: false },
        {
          name: "start_time",
          label: "Start Time",
          type: "time",
          required: true,
        },
        { name: "end_time", label: "End Time", type: "time", required: true },
      ],
    };

    return baseFields[activeMenu] || baseFields.users;
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

  // Render form
  const renderForm = () => {
    const fields = getFormFields();

    return (
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
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
                <option value="">Select {field.label}</option>
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
                value={formData[field.name] || ""}
                onChange={handleInputChange}
                required={field.required}
                placeholder={field.label}
                disabled={field.disabled}
              />
            )}
          </FormGroup>
        ))}

        <FormActions>
          <SecondaryButton
            type="button"
            onClick={() => setShowModal(false)}
            disabled={isSubmitting}
          >
            Cancel
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
                Saving...
              </>
            ) : (
              <>
                <FaSave />
                {editingItem ? "Update" : "Create"}
              </>
            )}
          </ActionButton>
        </FormActions>
      </form>
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
              Refresh
            </RefreshButton>
            <ActionButton onClick={handleAddNew}>
              <FaPlus />
              Add New
            </ActionButton>
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
              placeholder={`Search ${activeMenu}...`}
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
              <div style={{ marginTop: "16px" }}>Loading...</div>
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
                              </ActionCell>
                            ) : column.key === "is_active" ||
                              column.key === "status" ? (
                              renderStatusBadge(item[column.key])
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
                                    "group",
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
                            No {activeMenu} found
                          </div>
                          {searchQuery && (
                            <div>
                              No results matching "
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
                    Showing {startIndex + 1} to{" "}
                    {Math.min(startIndex + itemsPerPage, sortedData.length)} of{" "}
                    {sortedData.length} entries
                  </PaginationInfo>
                  <PaginationControls>
                    <PageButton
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Previous
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
                      Next
                    </PageButton>
                  </PaginationControls>
                </Pagination>
              )}
            </>
          )}
        </DataTable>
      </MainContent>

      {/* Create/Edit Modal */}
      {showModal && (
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <ModalOverlay onClick={() => !isDeleting && setShowDeleteModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <DeleteConfirmModal>
              <DeleteIcon>
                <FaExclamationCircle />
              </DeleteIcon>
              <DeleteText>
                Are you sure you want to delete this{" "}
                {getFormTemplate()?.title.toLowerCase()}? This action cannot be
                undone.
              </DeleteText>
              <DeleteActions>
                <SecondaryButton
                  onClick={() => !isDeleting && setShowDeleteModal(false)}
                  disabled={isDeleting}
                >
                  Cancel
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
                      Deleting...
                    </>
                  ) : (
                    "Delete"
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
