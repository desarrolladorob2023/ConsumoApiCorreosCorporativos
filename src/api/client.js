import axios from "axios";

function apiUrl() {
  var apiLocation = location.origin;
  apiLocation = apiLocation.replace(":5173", "8080");

  return apiLocation + import.meta.env.VITE_API_BASE_URL;
}


const api = axios.create({
  baseURL: apiUrl(),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
