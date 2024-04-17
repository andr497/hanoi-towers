import { TowerProps } from "@/types/general";
import { useDroppable } from "@dnd-kit/core";

import Disc from "./Disc";

const Tower = ({ id, discs }: TowerProps) => {
    const { setNodeRef } = useDroppable({
        id: `tower-${(id as number) + 1}`,
        data: {
            tower: id,
        },
    });

    return (
        <section
            ref={setNodeRef}
            className="tower"
            onDragOver={(e) => {
                e.preventDefault();
            }}
        >
            <div className="tower-pillar" style={{ height: 100 + 2.5 * 20 }} />
            <div className="tower-base" />
            <div className="disc-group">
                {discs.map((size, i) => (
                    <Disc
                        id={`disc-${size}`}
                        key={`${id}-disc-${i + 1}`}
                        size={size}
                        tower={id as number}
                        topDisc={i === 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default Tower;
