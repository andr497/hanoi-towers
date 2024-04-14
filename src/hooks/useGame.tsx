import { useEffect, useState } from "react";

import _ from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";

import { ActiveTower } from "@/types/general";
import { TOWER_NUMBERS } from "@/utils/constants";
import { activeTowerState, winState, discsNumbersState } from "@/recoil/atoms";

const useGame = () => {
    const discsNumbers = useRecoilValue(discsNumbersState);
    const startTower = _.range(1, discsNumbers + 1);
    const initDisc = _.map(Array(TOWER_NUMBERS), (__, i) =>
        i === 0 ? startTower : []
    );
    const [discs, setDiscs] = useState(initDisc);
    const [activeTower, setActiveTower] =
        useRecoilState<ActiveTower>(activeTowerState);
    const [winner, setWinner] = useRecoilState(winState);
    const [counterMove, setCounterMove] = useState(0);

    const handleStartTopDiscDrag = (actualTower: number) => {
        setActiveTower(actualTower);
    };

    const handleDropDisc = (destTower: number) => {
        // Create a copy from actual state
        const sourceTower = activeTower;
        setActiveTower(null);
        if (sourceTower === destTower || sourceTower === null) return;

        setDiscs((prev) => {
            const disc = prev[sourceTower][0];
            if (prev[destTower][0] < disc) return prev;

            const actualDiscs = [...prev];
            actualDiscs[sourceTower] = _.tail(actualDiscs[sourceTower]);
            actualDiscs[destTower] = [disc, ...prev[destTower]];
            return actualDiscs;
        });

        setCounterMove((prev) => prev + 1);
    };

    const handleRestartGame = () => {
        setDiscs(initDisc);
        setWinner(false);
        setCounterMove(0);
        setActiveTower(null);
    };

    useEffect(() => {
        const lastTower = TOWER_NUMBERS - 1;
        if (discs[lastTower].length >= discsNumbers) {
            setWinner(true);
        }
    }, [discs, discsNumbers, setWinner]);

    return {
        discs,
        discsNumbers,
        activeTower,
        winner,
        counterMove,
        handleStartTopDiscDrag,
        handleDropDisc,
        handleRestartGame,
    };
};

export default useGame;
