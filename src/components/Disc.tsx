import { useMemo } from "react";
import { useRecoilValue } from "recoil";

import { winState } from "@/recoil/atoms";
import { DiscProps } from "@/types/general";

const Disc = ({ id, size, topDisc, startDrag }: DiscProps) => {
    const winner = useRecoilValue(winState);
    const width = useMemo(() => size * 1.2 * 20, [size]);
    return (
        <div
            id={id}
            className="disc"
            draggable={topDisc && !winner}
            onDragStart={startDrag}
            style={{
                maxWidth: "180px",
                width: `${width}px`,
            }}
        >
            <span className="disc-label">{size}</span>
        </div>
    );
};

export default Disc;
