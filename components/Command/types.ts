import React, { Dispatch, SetStateAction } from "react";

export type statusProps = "open" | "close";

export type CommandProps = {
    children: React.ReactNode;
};

export type KeymapProps = {
    [keymap: string]: (event?: KeyboardEvent) => void;
};

export interface CommandContext {
    keymap?: KeymapProps;
    status?: statusProps;
    focused?: boolean;
    setStatus?: Dispatch<SetStateAction<statusProps>>;
    setFocused?: Dispatch<SetStateAction<boolean>>;
}

export type CommandContainerProps = {
    status: statusProps;
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
