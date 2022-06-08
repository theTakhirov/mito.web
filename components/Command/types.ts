import { ActionImpl, ActionId } from "kbar";
import React from "react";

export interface withChildren {
    children: React.ReactNode;
}

export interface withItem {
    item: string;
}

export interface ResultItemProps {
    item: ActionImpl;
    active: boolean;
    currentRootActionId: ActionId;
}
