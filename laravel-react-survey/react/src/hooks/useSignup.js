import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../api/api";
import toast from "react-hot-toast";
import useStateContext from "../context/useStateContext";

export const useSignup = () => {
    const queryClient = useQueryClient();
    const { setToken } = useStateContext();
    const { mutate, isPending } = useMutation({
        mutationFn: (data) => signup(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
            setToken(data?.token);
            toast.success("Success");
        },
        onError: () => {
            toast.error("Error while sign up user");
        },
    });

    return { mutate, isPending };
};
