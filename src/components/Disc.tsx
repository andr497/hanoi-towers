import { useRecoilValue } from "recoil";

import { winState } from "@/recoil/atoms";
import { DiscProps } from "@/types/general";

const Disc = ({ id, size, topDisc, startDrag }: DiscProps) => {
    const winner = useRecoilValue(winState);

    return (
        <div
            id={id}
            className="disc"
            draggable={topDisc && !winner}
            onDragStart={startDrag}
        >
            <span className="disc-label">{size}</span>
        </div>
    );
};

export default Disc;
