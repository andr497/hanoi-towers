import { useEffect } from "react";

import useGame from "@/hooks/useGame";
import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";

import Tower from "./Tower";
import SelectDisc from "./SelectDisc";

const Board = () => {
    const {
        discs,
        winner,
        counterMove,
        discsNumbers,
        handleDropDisc,
        handleRestartGame,
        setActualTower,
    } = useGame();

    useEffect(() => {
        handleRestartGame();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    {winner && (
                        <span className="label-win">{`Well Done!!`}</span>
                    )}
                </hgroup>
            </section>
            <DndContext
                onDragStart={(e: DragStartEvent) => {
                    const actual = e.active.data.current!.tower;
                    setActualTower(actual);
                }}
                onDragEnd={(e: DragEndEvent) => {
                    if (winner) return;

                    const dest = e.over!.data.current!.tower;
                    handleDropDisc(dest);
                }}
            >
                <section className="board-playground">
                    {discs.map((disc, i) => (
                        <Tower id={i} key={`tower-${i + 1}`} discs={disc} />
                    ))}
                </section>
            </DndContext>
        </main>
    );
};

export default Board;
