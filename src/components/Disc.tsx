import { useRecoilValue } from "recoil";

import { winState } from "@/recoil/atoms";
import { DiscProps } from "@/types/general";
import useWidth from "@/hooks/useWidth";

const Disc = ({ id, size, topDisc, startDrag }: DiscProps) => {
    const winner = useRecoilValue(winState);
    const width = useWidth(size);
    return (
        <div
            id={id}
            className="disc"
            draggable={topDisc && !winner}
            onDragStart={startDrag}
            style={{
                width: `${width}px`,
            }}
        >
            <span className="disc-label">{size}</span>
        </div>
    );
};

export default Disc;
