import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all notices
export const fetchNotices = async (url) => {
  const { data } = await api.get(url.replace("/api", ""));
  return data;
};

// fetch one notice
export const fetchNotice = async (id) => {
  const { data } = await api.get(`/notices/${id}`);
  return data;
};

// create
export const createNotice = async (notice) => {
  const { data } = await api.post("/notices", notice);
  return data;
};

// update
export const updateNotice = async (id, notice) => {
  const { data } = await api.put(`/notices/${id}`, notice);
  return data;
};

// delete
export const deleteNotice = async (id) => {
  const { data } = await api.delete(`/notices/${id}`);
  return data;
};