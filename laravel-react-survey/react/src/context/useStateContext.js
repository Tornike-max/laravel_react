import { useContext } from "react";
import { ContextProvider } from "./UserContext";

const useStateContext = () => {
    const context = useContext(ContextProvider);

    if (context === undefined) {
        throw new Error("You can't use context oustide of the UserContext");
    }

    return context;
};

export default useStateContext;
