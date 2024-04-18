import { useRecoilValue } from "recoil";

import { CSS } from "@dnd-kit/utilities";
import { winState } from "@/recoil/atoms";
import { DiscProps } from "@/types/general";
import { useDraggable } from "@dnd-kit/core";

const Disc = ({ id, size, tower, topDisc }: DiscProps) => {
    const winner = useRecoilValue(winState);
    const { attributes, listeners, setNodeRef, isDragging, transform } =
        useDraggable({
            id: id,
            disabled: !topDisc || winner,
            data: {
                disc: size,
                tower: tower,
            },
            attributes: {
                tabIndex: size,
            },
        });

    return (
        <div
            ref={setNodeRef}
            id={id}
            className={`disc ${isDragging ? "dragging" : ""}`}
            data-top-disc={topDisc}
            style={{
                transform: CSS.Translate.toString(transform),
                zIndex: 10,
            }}
            {...attributes}
            {...listeners}
        >
            <span className="disc-label">{size}</span>
        </div>
    );
};

export default Disc;
