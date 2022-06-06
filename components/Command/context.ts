import { createContext } from "react";
import { CommandContext } from "@components/Command/types";

const Command = createContext<CommandContext>({});

export default Command;
