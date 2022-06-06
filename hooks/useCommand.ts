import { useContext } from "react";
import { CommandContext } from "@components/Command/types";
import Command from "@components/Command/context";

export const useCommand = () => {
    const context = useContext<CommandContext>(Command);

    return context;
};
