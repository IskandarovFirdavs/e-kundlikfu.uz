import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./styles/theme.js";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./context/PrivateRoute.jsx";
import Navbar from "./layout/Navbar.jsx";
import AppWrapper from "./styles/WeatherBackground.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
// Pages
import Faculties from "./pages/Faculties.jsx";
import Directions from "./pages/Directions.jsx";
import Departments from "./pages/Departments.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import StudentDetail from "./pages/StudentDetail.jsx";
import StudentReportDetail from "./pages/StudentReportDetail.jsx";
import StudentPractiseCreate from "./pages/StudentPractiseCreate.jsx";
import Students from "./pages/Students.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Login from "./auth/Login.jsx";
import Groups from "./pages/Groups.jsx";

import { ROLES } from "./constants/roles.js";

function AppContent() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("preferredTheme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("preferredTheme", dark ? "dark" : "light");
  }, [dark]);

  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <AppWrapper>
        {/* Navbar faqat login pageda ko'rinmaydi */}
        {!hideNavbar && <Navbar dark={dark} setDark={setDark} />}

        <Routes>
          {/* Public route - Login */}
          <Route path="/" element={<Login dark={dark} setDark={setDark} />} />

          {/* Student routes */}
          <Route
            path="/student/dashboard"
            element={
              <PrivateRoute
                allowedRoles={[ROLES.STUDENT, ROLES.ADMIN, ROLES.SUPER_USER]}
              >
                <StudentDashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/student/practise/create/:practiceDayId"
            element={
              <PrivateRoute allowedRoles={[ROLES.STUDENT]}>
                <StudentPractiseCreate />
              </PrivateRoute>
            }
          />

          {/* Staff routes - Student details */}
          <Route
            path="/student/:id"
            element={
              <PrivateRoute
                allowedRoles={[
                  ROLES.TEACHER,
                  ROLES.HEAD_OF_DEPARTMENT,
                  ROLES.DEPUTY_DEAN,
                  ROLES.DEAN,
                  ROLES.RECTOR,
                  ROLES.ADMIN,
                  ROLES.SUPER_USER,
                ]}
              >
                <StudentDetail />
              </PrivateRoute>
            }
          />

          <Route
            path="/student/practise/:id"
            element={
              <PrivateRoute
                allowedRoles={[
                  ROLES.TEACHER,
                  ROLES.HEAD_OF_DEPARTMENT,
                  ROLES.DEPUTY_DEAN,
                  ROLES.DEAN,
                  ROLES.RECTOR,
                  ROLES.ADMIN,
                  ROLES.SUPER_USER,
                ]}
              >
                <StudentReportDetail />
              </PrivateRoute>
            }
          />

          {/* Management routes - Faculties */}
          <Route
            path="/faculties"
            element={
              <PrivateRoute
                allowedRoles={[ROLES.RECTOR, ROLES.ADMIN, ROLES.SUPER_USER]}
              >
                <Faculties />
              </PrivateRoute>
            }
          />

          <Route
            path="/faculty/:id"
            element={
              <PrivateRoute
                allowedRoles={[
                  ROLES.RECTOR,
                  ROLES.DEAN,
                  ROLES.DEPUTY_DEAN,
                  ROLES.ADMIN,
                  ROLES.SUPER_USER,
                ]}
              >
                <Departments />
              </PrivateRoute>
            }
          />

          {/* Management routes - Departments */}
          <Route
            path="/departments"
            element={
              <PrivateRoute
                allowedRoles={[
                  ROLES.RECTOR,
                  ROLES.DEAN,
                  ROLES.DEPUTY_DEAN,
                  ROLES.ADMIN,
                  ROLES.SUPER_USER,
                ]}
              >
                <Departments />
              </PrivateRoute>
            }
          />

          <Route
            path="/department/:id"
            element={
              <PrivateRoute
                allowedRoles={[
                  ROLES.HEAD_OF_DEPARTMENT,
                  ROLES.DEPUTY_DEAN,
                  ROLES.DEAN,
                  ROLES.RECTOR,
                  ROLES.ADMIN,
                  ROLES.SUPER_USER,
                ]}
              >
                <Directions />
              </PrivateRoute>
            }
          />

          {/* Management routes - Directions */}
          <Route
            path="/directions"
            element={
              <PrivateRoute
                allowedRoles={[
                  ROLES.HEAD_OF_DEPARTMENT,
                  ROLES.DEPUTY_DEAN,
                  ROLES.DEAN,
                  ROLES.RECTOR,
                  ROLES.ADMIN,
                  ROLES.SUPER_USER,
                ]}
              >
                <Directions />
              </PrivateRoute>
            }
          />

          <Route
            path="/direction/:id"
            element={
              <PrivateRoute
                allowedRoles={[
                  ROLES.HEAD_OF_DEPARTMENT,
                  ROLES.DEPUTY_DEAN,
                  ROLES.DEAN,
                  ROLES.RECTOR,
                  ROLES.ADMIN,
                  ROLES.SUPER_USER,
                ]}
              >
                <Groups />
              </PrivateRoute>
            }
          />

          {/* Management routes - Groups */}
          <Route
            path="/groups"
            element={
              <PrivateRoute
                allowedRoles={[
                  ROLES.HEAD_OF_DEPARTMENT,
                  ROLES.DEPUTY_DEAN,
                  ROLES.DEAN,
                  ROLES.RECTOR,
                  ROLES.ADMIN,
                  ROLES.SUPER_USER,
                ]}
              >
                <Groups />
              </PrivateRoute>
            }
          />

          <Route
            path="/group/:id"
            element={
              <PrivateRoute
                allowedRoles={[
                  ROLES.TEACHER,
                  ROLES.HEAD_OF_DEPARTMENT,
                  ROLES.DEPUTY_DEAN,
                  ROLES.DEAN,
                  ROLES.RECTOR,
                  ROLES.ADMIN,
                  ROLES.SUPER_USER,
                ]}
              >
                <Students />
              </PrivateRoute>
            }
          />

          {/* Management routes - Students */}
          <Route
            path="/students"
            element={
              <PrivateRoute
                allowedRoles={[
                  ROLES.TEACHER,
                  ROLES.HEAD_OF_DEPARTMENT,
                  ROLES.DEPUTY_DEAN,
                  ROLES.DEAN,
                  ROLES.RECTOR,
                  ROLES.ADMIN,
                  ROLES.SUPER_USER,
                ]}
              >
                <Students />
              </PrivateRoute>
            }
          />

          {/* Admin routes */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute allowedRoles={[ROLES.ADMIN, ROLES.SUPER_USER]}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          {/* 404 route - Not found */}
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
