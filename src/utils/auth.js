// Fake user database
export const fakeUsers = [
  {
    id: 1,
    email: "student@gmail.com",
    password: "1234",
    role: "student",
    name: "Talaba User",
    permissions: ["student_dashboard", "student_practise", "student_create"],
  },
  {
    id: 2,
    email: "teacher@gmail.com",
    password: "1234",
    role: "teacher",
    name: "O'qituvchi User",
    permissions: ["teacher_dashboard", "teacher_student_detail"],
  },
  {
    id: 3,
    email: "rector@gmail.com",
    password: "1234",
    role: "rector",
    name: "Rektor User",
    permissions: ["rector_dashboard"],
  },
  {
    id: 4,
    email: "head_of_department@gmail.com",
    password: "1234",
    role: "head_of_department",
    name: "Kafedra Mudiri",
    permissions: ["hod_dashboard", "hod_group", "hod_student"],
  },
  {
    id: 5,
    email: "dekan@gmail.com",
    password: "1234",
    role: "dekan",
    name: "Dekan User",
    permissions: ["dekan_dashboard"],
  },
  {
    id: 6,
    email: "admin@gmail.com",
    password: "admin",
    role: "admin",
    name: "Admin User",
    permissions: [
      "admin_dashboard",
      "student_dashboard",
      "teacher_dashboard",
      "rector_dashboard",
      "hod_dashboard",
      "dekan_dashboard",
    ],
  },
];

// Simulate API call for login
export const fakeLogin = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = fakeUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        resolve({
          success: true,
          user: {
            id: user.id,
            email: user.email,
            role: user.role,
            name: user.name,
            permissions: user.permissions,
          },
          token: "fake-jwt-token-" + user.id,
        });
      } else {
        reject({
          success: false,
          message: "Email yoki parol noto'g'ri",
        });
      }
    }, 1000); // Simulate network delay
  });
};

// Check if user has permission for a route
export const hasPermission = (user, permission) => {
  if (!user) return false;
  if (user.role === "admin") return true; // Admin has access to everything
  return user.permissions.includes(permission);
};

// Get redirect path based on role
export const getRedirectPath = (role) => {
  switch (role) {
    case "student":
      return "/student/dashboard";
    case "teacher":
      return "/teacher/dashboard";
    case "rector":
      return "/rector/dashboard";
    case "head_of_department":
      return "/head_of_department/dashboard";
    case "dekan":
      return "/dekan/dashboard";
    case "admin":
      return "/admin/dashboard";
    default:
      return "/";
  }
};
