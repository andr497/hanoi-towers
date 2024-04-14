import useGame from "@/hooks/useGame";

import Tower from "./Tower";
import SelectDisc from "./SelectDisc";
import { useEffect } from "react";

const Board = () => {
    const {
        discs,
        winner,
        counterMove,
        discsNumbers,
        handleDropDisc,
        handleRestartGame,
        handleStartTopDiscDrag,
    } = useGame();

    useEffect(() => {
        handleRestartGame();
    }, [discsNumbers]);

    return (
        <main className="board">
            <section className="board-game">
                <aside className="board-game-options">
                    <SelectDisc />
                    <button
                        className="btn btn-restart"
                        onClick={handleRestartGame}
                    >
                        Restart
                    </button>
                </aside>
                <hgroup className="board-game-info">
                    <span className="label-moves">Moves: {counterMove}</span>
                    <span className="label-win">{`${
                        winner ? "Well Done!!" : ""
                    }`}</span>
                </hgroup>
            </section>
            <section className="board-playground">
                {discs.map((disc, i) => (
                    <Tower
                        id={`tower-${i + 1}`}
                        key={`tower-${i + 1}`}
                        discs={disc}
                        startTopDiscDrag={() => handleStartTopDiscDrag(i)}
                        dropDisc={() => {
                            if (winner) return;
                            handleDropDisc(i);
                        }}
                    />
                ))}
            </section>
        </main>
    );
};

export default Board;
