import { DragEventHandler } from "react";

// # Interfaces Type Props
export interface BoardProps {
    discsNumbers: number;
}

export interface TowerProps {
    id: number | string;
    discs: number[];
    maxSize: number;
    startTopDiscDrag: DragEventHandler;
    dropDisc: DragEventHandler;
}

export interface DiscProps {
    id: string;
    size: number;
    topDisc: boolean;
    startDrag: DragEventHandler;
}

// # General Types

export type ActiveTower = number | null;
