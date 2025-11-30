const API_BASE_URL = "";

class ApiService {
  constructor() {
    this.accessToken = localStorage.getItem("access_token");
    this.refreshToken = localStorage.getItem("refresh_token");
  }

  setAuthTokens({ access_token, refresh_token }) {
    this.accessToken = access_token;
    this.refreshToken = refresh_token;
    localStorage.setItem("access_token", access_token);
    if (refresh_token) {
      localStorage.setItem("refresh_token", refresh_token);
    }
  }

  clearAuth() {
    this.accessToken = null;
    this.refreshToken = null;
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  getHeaders(isMultipart = false) {
    const headers = {};
    if (!isMultipart) {
      headers["Content-Type"] = "application/json";
    }
    if (this.accessToken) {
      headers["Authorization"] = `Bearer ${this.accessToken}`;
    }
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const isMultipart = options.body instanceof FormData;

    const config = {
      ...options,
      headers: this.getHeaders(isMultipart),
    };

    // If body is object and not FormData → stringify
    if (options.body && !(options.body instanceof FormData) && !isMultipart) {
      config.body = JSON.stringify(options.body);
    }

    let response;
    try {
      response = await fetch(url, config);

      // Auto refresh token on 401
      if (response.status === 401 && this.refreshToken) {
        const refreshed = await this.refreshAccessToken();
        if (refreshed) {
          // Retry original request
          config.headers.Authorization = `Bearer ${this.accessToken}`;
          response = await fetch(url, config);
        } else {
          this.handleUnauthorized();
          return;
        }
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.detail || errorData.message || `HTTP ${response.status}`
        );
      }

      if (response.status === 204) return null;
      if (response.status === 201) return await response.json();

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      }
      return response; // for blobs, etc.
    } catch (error) {
      console.error("API Error:", error.message);
      throw error;
    }
  }

  async refreshAccessToken() {
    try {
      const response = await fetch(`${API_BASE_URL}/users/token/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: this.refreshToken }),
      });

      if (!response.ok) return false;

      const data = await response.json();
      this.accessToken = data.access;
      localStorage.setItem("access_token", data.access);
      return true;
    } catch {
      return false;
    }
  }

  handleUnauthorized() {
    this.clearAuth();
    window.location.href = "/login";
  }

  // Auth
  async login(username, password) {
    const data = await this.request("/users/login/", {
      method: "POST",
      body: { username, password },
    });
    this.setAuthTokens({
      access_token: data.access_token,
      refresh_token: data.refresh,
    });
    return data;
  }

  async logout() {
    if (this.refreshToken) {
      try {
        await this.request("/users/logout/", {
          method: "POST",
          body: { refresh: this.refreshToken },
        });
      } catch (e) {
        console.warn("Logout failed", e);
      }
    }
    this.clearAuth();
  }

  async getCurrentUser() {
    return await this.request("/users/");
  }

  // Generic CRUD helpers
  async getList(endpoint) {
    return await this.request(endpoint);
  }

  async getOne(endpoint, id) {
    return await this.request(`${endpoint}${id}/`);
  }

  async create(endpoint, data) {
    return await this.request(endpoint, { method: "POST", body: data });
  }

  async update(endpoint, id, data) {
    return await this.request(`${endpoint}${id}/`, {
      method: "PUT",
      body: data,
    });
  }

  async getDirectionsWithStudents() {
    try {
      // Avval yo'nalishlarni olish
      const directions = await this.getList("/university/directions/");

      // Har bir yo'nalish uchun guruhlarni olish
      const directionsWithGroups = await Promise.all(
        directions.map(async (direction) => {
          try {
            // Guruhlarni olish
            const groups = await this.getList(
              `/university/groups/?direction=${direction.id}`
            );

            // Har bir guruh uchun talabalar sonini hisoblash
            const groupsWithStudentCount = await Promise.all(
              groups.map(async (group) => {
                try {
                  // Talabalar ro'yxatini olish
                  const students = await this.getList(
                    `/university/students/?group=${group.id}`
                  );
                  return {
                    ...group,
                    students: students || [],
                    students_count: students ? students.length : 0,
                  };
                } catch (error) {
                  console.warn(
                    `Guruh ${group.id} uchun talabalar olinmadi:`,
                    error
                  );
                  return {
                    ...group,
                    students: [],
                    students_count: 0,
                  };
                }
              })
            );

            return {
              ...direction,
              groups: groupsWithStudentCount,
              totalGroups: groupsWithStudentCount.length,
              totalStudents: groupsWithStudentCount.reduce(
                (sum, group) => sum + group.students_count,
                0
              ),
            };
          } catch (error) {
            console.warn(
              `Yo'nalish ${direction.id} uchun guruhlar olinmadi:`,
              error
            );
            return {
              ...direction,
              groups: [],
              totalGroups: 0,
              totalStudents: 0,
            };
          }
        })
      );

      return directionsWithGroups;
    } catch (err) {
      console.error("Yo'nalishlar yuklanmadi:", err);
      throw err;
    }
  }

  // Talabalar ro'yxatini olish (guruh bo'yicha filtr)
  async getStudentsByGroup(groupId) {
    try {
      return await this.getList(`/university/students/?group=${groupId}`);
    } catch (error) {
      console.warn(`Guruh ${groupId} uchun talabalar olinmadi:`, error);
      return [];
    }
  }

  // Barcha talabalar
  async getAllStudents() {
    try {
      return await this.getList("/university/students/");
    } catch (error) {
      console.warn("Talabalar olinmadi:", error);
      return [];
    }
  }

  // Amaliyot kunlari
  async getPracticeDays() {
    try {
      return await this.getList("/practice/practice_days/");
    } catch (error) {
      console.warn("Amaliyot kunlari olinmadi:", error);
      return [];
    }
  }
  async partialUpdate(endpoint, id, data) {
    return await this.request(`${endpoint}${id}/`, {
      method: "PATCH",
      body: data,
    });
  }

  async delete(endpoint, id) {
    return await this.request(`${endpoint}${id}/`, { method: "DELETE" });
  }

  // Users
  getUsers() {
    return this.getList("/users/users/");
  }
  getUser(id) {
    return this.getOne("/users/users/", id);
  }
  createUser(data) {
    return this.create("/users/users/", data);
  }
  updateUser(id, data) {
    return this.update("/users/users/", id, data);
  }
  deleteUser(id) {
    return this.delete("/users/users/", id);
  }

  // University
  getFaculties() {
    return this.getList("/university/faculties/");
  }
  createFaculty(data) {
    return this.create("/university/faculties/", data);
  }
  updateFaculty(id, data) {
    return this.update("/university/faculties/", id, data);
  }
  deleteFaculty(id) {
    return this.delete("/university/faculties/", id);
  }

  getDepartments() {
    return this.getList("/university/departments/");
  }
  getDirections() {
    return this.getList("/university/directions/");
  }
  getGroups() {
    return this.getList("/university/groups/");
  }
  static getPracticeDays(url = "/practice/practice_days/") {
    return this.get(url);
  }
  static async getPracticeDayById(id) {
    return await this.getOne("/practice/practice_days/", id);
  }
  async getPracticeDayById(id) {
    return await this.getOne("/practice/practice_days/", id);
  }
  // Practice Days
  static async getPracticeDay(id) {
    return await this.getOne(`/practice/practice_days/${id}/`);
  }
  async getPracticeDay(id) {
    return await this.getOne("/practice/practice_days/", id);
  }
  getPracticeDays() {
    return this.getList("/practice/practice_days/");
  }
  getPracticeDay(id) {
    return this.getOne("/practice/practice_days/", id);
  }
  createPracticeDay(data) {
    return this.create("/practice/practice_days/", data);
  }
  updatePracticeDay(id, data) {
    return this.update("/practice/practice_days/", id, data);
  }
  partialUpdatePracticeDay(id, data) {
    return this.partialUpdate("/practice/practice_days/", id, data);
  }
  deletePracticeDay(id) {
    return this.delete("/practice/practice_days/", id);
  }

  // Reports
  getReports() {
    return this.getList("/practice/reports/");
  }
  getReport(id) {
    return this.getOne("/practice/reports/", id);
  }

  // Special: Create report with image (multipart)
  async createReport(formData) {
    return await this.request("/practice/reports/", {
      method: "POST",
      body: formData, // FormData → no JSON stringify
    });
  }
}

export default new ApiService();
