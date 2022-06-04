import React, { Dispatch, SetStateAction } from "react";

export type statusProps = "open" | "close";

export type CommandProps = {
    children: React.ReactNode;
};

export type KeymapProps = {
    [keymap: string]: (event?: KeyboardEvent) => void;
};

export type CommandContext = {
    keymap: KeymapProps;
    status: statusProps;
    setStatus: Dispatch<SetStateAction<statusProps>>;
} | null;

export type CommandContainerProps = {
    status: "open" | "close";
    children: React.ReactNode;
};

export type CommandInputProps = {
    placeholder?: string;
};

export type CommandListProps = {
    label?: string | null;
    children: React.ReactNode;
};

export type CommandLabelProps = {
    children: string;
};
