import { useContext } from "react";
import { CommandContext } from "@components/Command/types";
import Command from "@components/Command/context";

export const useCommand = () => {
    return useContext<CommandContext>(Command);
};
