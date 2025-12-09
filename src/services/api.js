// API.js - API_BASE_URL ni to'g'ri o'rnating
const API_BASE_URL = "";

class API {
  constructor() {
    this.token = localStorage.getItem("authToken") || "";
  }

  // Umumiy so'rov metod
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    // Token qo'shish
    if (this.token) {
      config.headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      console.log("Sending request to:", url);
      const response = await fetch(url, config);

      // 401 xatosi bo'lsa
      if (response.status === 401) {
        this.clearToken();
        throw new Error("Authentication failed. Please login again.");
      }

      if (!response.ok) {
        throw new Error(`HTTP xatolik! Status: ${response.status}`);
      }

      // JSON response ni olish
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      } else {
        return { success: true };
      }
    } catch (error) {
      console.error("API so'rov xatosi:", error);

      // CORS xatosini aniqlash
      if (
        error.name === "TypeError" &&
        error.message.includes("Failed to fetch")
      ) {
        throw new Error(
          "CORS xatosi: Serverga ulanib bo'lmadi. Backend CORS sozlamalarini tekshiring."
        );
      }

      throw error;
    }
  }

  // Token ni saqlash
  setToken(token) {
    this.token = token;
    localStorage.setItem("authToken", token);
  }

  // Token ni o'chirish
  clearToken() {
    this.token = "";
    localStorage.removeItem("authToken");
    // Login sahifasiga yo'naltirish
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
  }

  // Token mavjudligini tekshirish
  hasToken() {
    return !!this.token;
  }

  // =============================================
  // USERS API
  // =============================================

  // LOGIN
  async login(username, password) {
    const response = await fetch(`${API_BASE_URL}/users/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Login failed: ${errorText}`);
    }

    const data = await response.json();

    // Token ni saqlash
    if (data.access_token) {
      // <-- access_token ishlatiladi
      this.setToken(data.access_token);
    }

    return data;
  }

  // CURRENT USER PROFILE
  async getCurrentUser() {
    return this.request("/users/");
  }

  // LOGOUT
  async logout() {
    this.clearToken();
    return { success: true };
  }

  // CREATE USER (Admin only)
  async createUser(userData) {
    return this.request("/users/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  }

  // LIST USERS
  async getUsers() {
    return this.request("/users/users/");
  }

  // GET USER BY ID
  async getUserById(userId) {
    return this.request(`/users/users/${userId}/`);
  }

  // UPDATE USER (PUT)
  async updateUser(userId, userData) {
    return this.request(`/users/users/${userId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  }

  // PARTIAL UPDATE USER (PATCH)
  async partialUpdateUser(userId, userData) {
    return this.request(`/users/users/${userId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  }

  // =============================================
  // FACULTIES API
  // =============================================

  // LIST FACULTIES
  async getFaculties() {
    return this.request("/university/faculties/");
  }

  // CREATE FACULTY
  async createFaculty(facultyData) {
    return this.request("/university/faculties/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(facultyData),
    });
  }

  // RETRIEVE FACULTY
  async getFaculty(facultyId) {
    return this.request(`/university/faculties/${facultyId}/`);
  }

  // UPDATE FACULTY
  async updateFaculty(facultyId, facultyData) {
    return this.request(`/university/faculties/${facultyId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(facultyData),
    });
  }

  // UPDATE FACULTY PARTIAL
  async partialUpdateFaculty(facultyId, facultyData) {
    return this.request(`/university/faculties/${facultyId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(facultyData),
    });
  }

  // DELETE FACULTY
  async deleteFaculty(facultyId) {
    return this.request(`/university/faculties/${facultyId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // DEPARTMENTS API
  // =============================================

  // LIST DEPARTMENTS
  async getDepartments() {
    return this.request("/university/departments/");
  }

  // CREATE DEPARTMENT
  async createDepartment(departmentData) {
    return this.request("/university/departments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departmentData),
    });
  }

  // RETRIEVE DEPARTMENT
  async getDepartment(departmentId) {
    return this.request(`/university/departments/${departmentId}/`);
  }

  // UPDATE DEPARTMENT
  async updateDepartment(departmentId, departmentData) {
    return this.request(`/university/departments/${departmentId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departmentData),
    });
  }

  // DELETE DEPARTMENT
  async deleteDepartment(departmentId) {
    return this.request(`/university/departments/${departmentId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // DIRECTIONS API
  // =============================================

  // LIST DIRECTIONS
  async getDirections() {
    return this.request("/university/directions/");
  }

  // CREATE DIRECTION
  async createDirection(directionData) {
    return this.request("/university/directions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(directionData),
    });
  }

  // RETRIEVE DIRECTION
  async getDirection(directionId) {
    return this.request(`/university/directions/${directionId}/`);
  }

  // UPDATE DIRECTION
  async updateDirection(directionId, directionData) {
    return this.request(`/university/directions/${directionId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(directionData),
    });
  }

  // DELETE DIRECTION
  async deleteDirection(directionId) {
    return this.request(`/university/directions/${directionId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // GROUPS API
  // =============================================

  // LIST GROUPS
  async getGroups() {
    return this.request("/university/groups/");
  }

  // CREATE GROUP
  async createGroup(groupData) {
    return this.request("/university/groups/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    });
  }

  // RETRIEVE GROUP
  async getGroup(groupId) {
    return this.request(`/university/groups/${groupId}/`);
  }

  // UPDATE GROUP
  async updateGroup(groupId, groupData) {
    return this.request(`/university/groups/${groupId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    });
  }

  // DELETE GROUP
  async deleteGroup(groupId) {
    return this.request(`/university/groups/${groupId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // PRACTICE API
  // =============================================

  // LIST PRACTICE DAYS
  async getPracticeDays() {
    return this.request("/practice/practice_days/");
  }

  // RETRIEVE PRACTICE DAY
  async getPracticeDay(practiceDayId) {
    return this.request(`/practice/practice_days/${practiceDayId}/`);
  }

  // CREATE PRACTICE DAY (ADMIN only)
  async createPracticeDay(practiceData) {
    return this.request("/practice/practice_days/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(practiceData),
    });
  }

  // UPDATE PRACTICE DAY
  async updatePracticeDay(practiceDayId, practiceData) {
    return this.request(`/practice/practice_days/${practiceDayId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(practiceData),
    });
  }

  // PARTIAL UPDATE PRACTICE DAY
  async partialUpdatePracticeDay(practiceDayId, practiceData) {
    return this.request(`/practice/practice_days/${practiceDayId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(practiceData),
    });
  }

  // DELETE PRACTICE DAY
  async deletePracticeDay(practiceDayId) {
    return this.request(`/practice/practice_days/${practiceDayId}/`, {
      method: "DELETE",
    });
  }

  // =============================================
  // REPORTS API
  // =============================================

  // LIST MY REPORTS (student only)
  async getMyReports() {
    return this.request("/practice/reports/");
  }

  // RETRIEVE MY SINGLE REPORT
  async getMyReport(reportId) {
    return this.request(`/practice/reports/${reportId}/`);
  }

  // CREATE REPORT (ONLY STUDENT) - FormData bilan
  async createReport(formData) {
    const url = `${API_BASE_URL}/practice/reports/`;

    const config = {
      method: "POST",
      headers: {
        Authorization: this.token ? `Bearer ${this.token}` : "",
      },
      body: formData,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP xatolik! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Report yaratish xatosi:", error);
      throw error;
    }
  }

  // UPDATE REPORT (DISALLOWED)
  async updateReport(reportId, reportData) {
    return this.request(`/practice/reports/${reportId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reportData),
    });
  }

  // DELETE REPORT (DISALLOWED)
  async deleteReport(reportId) {
    return this.request(`/practice/reports/${reportId}/`, {
      method: "DELETE",
    });
  }
}

// API instansini yaratish va eksport qilish
const api = new API();
export default api;
