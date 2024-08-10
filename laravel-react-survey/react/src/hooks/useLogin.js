import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/api";
import toast from "react-hot-toast";
import useStateContext from "../context/useStateContext";

export const useLogin = () => {
    const queryClient = useQueryClient();
    const { setToken } = useStateContext();
    const { mutate: loginUser, isPending } = useMutation({
        mutationFn: (data) => login(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
            setToken(data.token);
            toast.success("User logged in successfully");
        },
        onError: () => {
            toast.error("Error while loging in user");
        },
    });

    return { loginUser, isPending };
};
