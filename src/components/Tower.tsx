import { TowerProps } from "@/types/general";
import Disc from "./Disc";

const Tower = ({ id, discs, startTopDiscDrag, dropDisc }: TowerProps) => {
    return (
        <section
            className="tower"
            onDragOver={(e) => e.preventDefault()}
            onDrop={dropDisc}
            style={{
                width: "180px",
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
                        topDisc={i === 0}
                        startDrag={startTopDiscDrag}
                    />
                ))}
            </div>
        </section>
    );
};

export default Tower;
