import axios from "axios";

const axiosClient = axios.create({
    baseUrl: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
    const token = "1234";
    config.headers.Authorization = `Bearer ${token}`;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        error.response &&
            error.response.status === 401 &&
            window.location.href("/login");
    }
);
