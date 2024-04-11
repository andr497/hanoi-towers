import useGame from "@/hooks/useGame";
import { BoardProps } from "@/types/general";

import Tower from "./Tower";

const Board = ({ discsNumbers }: BoardProps) => {
    const {
        discs,
        winner,
        counterMove,
        handleDropDisc,
        handleRestartGame,
        handleStartTopDiscDrag,
    } = useGame(discsNumbers);

    return (
        <main className="board">
            <section className="board-game">
                <aside className="board-game-options">
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
                        maxSize={discsNumbers}
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
