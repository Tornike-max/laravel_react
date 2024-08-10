// import { axiosClient } from "../axios";
const token = "1234";

export const signup = async (data) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/users/signup`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || "An error occurred");
        }
        return responseData;
    } catch (error) {
        return error.response.data.errors;
    }
};

export const login = async (data) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/users/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            throw new Error(responseData.message || "An error occurred");
        }

        const responseData = await response.json();
        // localStorage.setItem('token',responseData.)

        console.log(responseData);
        return responseData;
    } catch (error) {
        return error.response.data.errors;
    }
};
