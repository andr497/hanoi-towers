import { useMemo } from "react";

const useWidth = (size: number): number => {
    const width = useMemo(() => size * 1.5 * 20, [size]);

    return width;
};

export default useWidth;
