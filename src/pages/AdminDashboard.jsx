import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import {
  FaSearch,
  FaFilter,
  FaEdit,
  FaTrash,
  FaPlus,
  FaEye,
  FaChevronDown,
  FaChevronUp,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaHome,
  FaUser,
  FaUniversity,
  FaBuilding,
  FaDirections,
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100%;
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
  transition: all 0.3s ease;
`;

const Sidebar = styled.div`
  width: 250px;
  background: ${(p) => p.theme.cardBg};
  border-right: 1px solid ${(p) => p.theme.border};
  padding: 20px 0;
  position: fixed;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 250px;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: 60px;
    padding: 15px;
  }
`;

const SidebarHeader = styled.div`
  padding: 0 20px 20px;
  border-bottom: 1px solid ${(p) => p.theme.border};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 0 15px 15px;
  }
`;

const AppTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(p) => p.theme.primary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.2rem;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 5px;
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: ${(p) => p.theme.text};
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
  gap: 12px;

  &:hover {
    background: ${(p) => p.theme.background};
    border-left-color: ${(p) => p.theme.primary};
  }

  &.active {
    background: ${(p) => p.theme.primary}15;
    border-left-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.primary};
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 12px 15px;

    span {
      display: none;
    }
  }
`;

const MenuIcon = styled.div`
  font-size: 16px;
  width: 20px;
  text-align: center;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
`;

const PageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(p) => p.theme.text};
  margin: 0;
`;

const ActionButton = styled.button`
  background: ${(p) => p.theme.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${(p) => p.theme.primaryDark};
    transform: translateY(-1px);
  }
`;

const Toolbar = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 6px;
  padding: 8px 12px;
  flex: 1;
  max-width: 400px;
  gap: 10px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  color: ${(p) => p.theme.text};
  font-size: 14px;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${(p) => p.theme.text}80;
  }
`;

const FilterButton = styled.button`
  background: ${(p) => p.theme.cardBg};
  color: ${(p) => p.theme.text};
  border: 1px solid ${(p) => p.theme.border};
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: ${(p) => p.theme.background};
  }
`;

const DataTable = styled.div`
  background: ${(p) => p.theme.cardBg};
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background: ${(p) => p.theme.background};
  border-bottom: 1px solid ${(p) => p.theme.border};
`;

const TableRow = styled.tr`
  &:hover {
    background: ${(p) => p.theme.background};
  }
`;

const TableHeaderCell = styled.th`
  padding: 15px 12px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: ${(p) => p.theme.text};
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid ${(p) => p.theme.border};

  &:hover {
    background: ${(p) => p.theme.background};
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${(p) => p.theme.border}30;
  font-size: 14px;
`;

const ActionCell = styled(TableCell)`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${(p) => p.theme.text}80;
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(p) => p.theme.background};
    color: ${(p) => p.theme.primary};
  }

  &.view:hover {
    color: #10b981;
  }
  &.edit:hover {
    color: #3b82f6;
  }
  &.delete:hover {
    color: #ef4444;
  }
`;

const StatusBadge = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;

  &.success {
    background: #10b98120;
    color: #10b981;
  }

  &.pending {
    background: #f59e0b20;
    color: #f59e0b;
  }

  &.rejected {
    background: #ef444420;
    color: #ef4444;
  }

  &.no-permission {
    background: #6b728020;
    color: #6b7280;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 1px solid ${(p) => p.theme.border};
  background: ${(p) => p.theme.background};
`;

const PaginationInfo = styled.div`
  font-size: 14px;
  color: ${(p) => p.theme.text}80;
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid ${(p) => p.theme.border};
  background: ${(p) => p.theme.cardBg};
  color: ${(p) => p.theme.text};
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${(p) => p.theme.primary};
    color: white;
    border-color: ${(p) => p.theme.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    background: ${(p) => p.theme.primary};
    color: white;
    border-color: ${(p) => p.theme.primary};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${(p) => p.theme.text}80;
`;

// Mock Data
const usersData = [
  {
    id: 1,
    username: "john_doe",
    fullName: "John Doe",
    email: "john@university.uz",
    role: "student",
    group: "KI-201",
    status: "active",
    lastLogin: "2024-01-15 14:30",
  },
  {
    id: 2,
    username: "jane_smith",
    fullName: "Jane Smith",
    email: "jane@university.uz",
    role: "teacher",
    department: "Computer Engineering",
    status: "active",
    lastLogin: "2024-01-15 10:15",
  },
  {
    id: 3,
    username: "ahmad_toshmatov",
    fullName: "Ahmad Toshmatov",
    email: "ahmad@university.uz",
    role: "dean",
    faculty: "Computer Technologies",
    status: "active",
    lastLogin: "2024-01-14 16:45",
  },
];

const practiceDaysData = [
  {
    id: 1,
    student: "John Doe",
    teacher: "Jane Smith",
    date: "2024-01-20",
    dutyName: "Software Development",
    orgName: "TechCorp Inc.",
    status: "pending",
    startTime: "09:00",
    endTime: "17:00",
  },
  {
    id: 2,
    student: "Alice Johnson",
    teacher: "Bob Wilson",
    date: "2024-01-18",
    dutyName: "Data Analysis",
    orgName: "DataSys Ltd.",
    status: "success",
    startTime: "08:00",
    endTime: "16:00",
  },
  {
    id: 3,
    student: "Mike Brown",
    teacher: "Sarah Davis",
    date: "2024-01-22",
    dutyName: "Network Security",
    orgName: "SecureNet LLC",
    status: "no_permission",
    startTime: "10:00",
    endTime: "18:00",
  },
];

const facultiesData = [
  {
    id: 1,
    name: "Kompyuter Texnologiyalari Fakulteti",
    code: "KTF",
    dean: "Prof. Toshmatov A.",
    departments: 8,
    students: 2850,
    established: "2010",
    status: "active",
  },
  {
    id: 2,
    name: "Iqtisodiyot va Menejment Fakulteti",
    code: "IMF",
    dean: "Prof. Qodirova M.",
    departments: 6,
    students: 3200,
    established: "2008",
    status: "active",
  },
];

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: <FaHome />, path: "/admin" },
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
  {
    id: "reports",
    label: "Reports",
    icon: <FaFileAlt />,
    path: "/admin/reports",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <FaChartBar />,
    path: "/admin/analytics",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <FaCog />,
    path: "/admin/settings",
  },
];

// Main Component
export default function AdminDashboard({ isDark = false, onThemeChange }) {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("users");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const getCurrentData = () => {
    switch (activeMenu) {
      case "users":
        return usersData;
      case "practices":
        return practiceDaysData;
      case "faculties":
        return facultiesData;
      default:
        return usersData;
    }
  };

  const getColumns = () => {
    switch (activeMenu) {
      case "users":
        return [
          { key: "id", label: "ID", sortable: true },
          { key: "username", label: "Username", sortable: true },
          { key: "fullName", label: "Full Name", sortable: true },
          { key: "email", label: "Email", sortable: true },
          { key: "role", label: "Role", sortable: true },
          { key: "status", label: "Status", sortable: true },
          { key: "lastLogin", label: "Last Login", sortable: true },
          { key: "actions", label: "Actions", sortable: false },
        ];
      case "practices":
        return [
          { key: "id", label: "ID", sortable: true },
          { key: "student", label: "Student", sortable: true },
          { key: "teacher", label: "Teacher", sortable: true },
          { key: "date", label: "Date", sortable: true },
          { key: "dutyName", label: "Duty", sortable: true },
          { key: "orgName", label: "Organization", sortable: true },
          { key: "status", label: "Status", sortable: true },
          { key: "actions", label: "Actions", sortable: false },
        ];
      case "faculties":
        return [
          { key: "id", label: "ID", sortable: true },
          { key: "name", label: "Name", sortable: true },
          { key: "code", label: "Code", sortable: true },
          { key: "dean", label: "Dean", sortable: true },
          { key: "departments", label: "Departments", sortable: true },
          { key: "students", label: "Students", sortable: true },
          { key: "established", label: "Established", sortable: true },
          { key: "actions", label: "Actions", sortable: false },
        ];
      default:
        return [];
    }
  };

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

  const renderStatusBadge = (status) => {
    const statusMap = {
      active: { class: "success", label: "Active" },
      pending: { class: "pending", label: "Pending" },
      success: { class: "success", label: "Success" },
      rejected: { class: "rejected", label: "Rejected" },
      no_permission: { class: "no-permission", label: "No Permission" },
    };

    const statusInfo = statusMap[status] || {
      class: "no-permission",
      label: status,
    };
    return (
      <StatusBadge className={statusInfo.class}>{statusInfo.label}</StatusBadge>
    );
  };

  const currentData = getCurrentData();
  const columns = getColumns();

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
                href="#"
                className={activeMenu === item.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveMenu(item.id);
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
            {menuItems.find((item) => item.id === activeMenu)?.label ||
              "Admin Panel"}
          </PageTitle>
          <ActionButton onClick={() => navigate(`/admin/${activeMenu}/add`)}>
            <FaPlus />
            Add{" "}
            {menuItems
              .find((item) => item.id === activeMenu)
              ?.label?.slice(0, -1)}
          </ActionButton>
        </ContentHeader>

        {/* Toolbar */}
        <Toolbar>
          <SearchBox>
            <FaSearch size={14} />
            <SearchInput
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBox>
          <FilterButton>
            <FaFilter />
            Filter
          </FilterButton>
        </Toolbar>

        {/* Data Table */}
        <DataTable>
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHeaderCell
                    key={column.key}
                    onClick={() => column.sortable && handleSort(column.key)}
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
              {currentData.map((item, index) => (
                <TableRow key={item.id || index}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {column.key === "actions" ? (
                        <ActionCell>
                          <IconButton
                            className="view"
                            title="View"
                            onClick={() =>
                              navigate(`/admin/${activeMenu}/${item.id}`)
                            }
                          >
                            <FaEye />
                          </IconButton>
                          <IconButton
                            className="edit"
                            title="Edit"
                            onClick={() =>
                              navigate(`/admin/${activeMenu}/${item.id}/edit`)
                            }
                          >
                            <FaEdit />
                          </IconButton>
                          <IconButton
                            className="delete"
                            title="Delete"
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you want to delete this item?"
                                )
                              ) {
                                // Handle delete
                              }
                            }}
                          >
                            <FaTrash />
                          </IconButton>
                        </ActionCell>
                      ) : column.key === "status" ? (
                        renderStatusBadge(item[column.key])
                      ) : (
                        item[column.key] || "-"
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </tbody>
          </Table>

          {currentData.length === 0 && <EmptyState>No data found</EmptyState>}
        </DataTable>

        {/* Pagination */}
        <Pagination>
          <PaginationInfo>
            Showing 1 to {Math.min(itemsPerPage, currentData.length)} of{" "}
            {currentData.length} entries
          </PaginationInfo>
          <PaginationControls>
            <PageButton disabled={currentPage === 1}>Previous</PageButton>
            <PageButton className="active">1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
            <PageButton>Next</PageButton>
          </PaginationControls>
        </Pagination>
      </MainContent>
    </DashboardContainer>
  );
}
