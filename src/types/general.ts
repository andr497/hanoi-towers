import { ComponentPropsWithoutRef } from "react";

// # Interfaces Type Props

export type onClick = Pick<
    ComponentPropsWithoutRef<"div">,
    "onClick"
>["onClick"];

export interface TowerProps {
    id: number | string;
    discs: number[];
}

export interface DiscProps {
    id: string;
    size: number;
    topDisc: boolean;
    tower: number;
}

// # General Types

export type ActiveTower = number | null;
