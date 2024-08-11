import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../api/api";
import toast from "react-hot-toast";
import useStateContext from "../context/useStateContext";

export const useLogout = () => {
    const { setToken, setUser } = useStateContext();
    const queryClient = useQueryClient();

    const { mutate: logoutUser, isPending: isLoggingOut } = useMutation({
        mutationFn: () => logout(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["auth"] });
            setToken(null);
            setUser({});
            toast.success("Log out successfully");
        },
        onError: () => {
            toast.error("Error while logging out");
        },
    });

    return { logoutUser, isLoggingOut };
};
