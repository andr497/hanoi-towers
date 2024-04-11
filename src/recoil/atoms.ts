import { ActiveTower } from "@/types/general";
import { atom } from "recoil";

export const winState = atom<boolean>({
    key: "winState",
    default: false,
});

export const activeTowerState = atom<ActiveTower>({
    key: "activeTowerState",
    default: null,
});
