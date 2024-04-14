import _ from "lodash";
import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { discsNumbersState } from "@/recoil/atoms";

const SelectDisc = () => {
    const options = useMemo(() => _.range(3, 8), []);
    const [discNumber, setDiscNumber] = useRecoilState(discsNumbersState);

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const value = parseInt(e.currentTarget.value);

        setDiscNumber(value);
    };
    return (
        <label className="select-disc-label">
            <select
                className="select-disc"
                onChange={handleChange}
                value={discNumber}
            >
                {options.map((option) => (
                    <option
                        key={`option-${option}`}
                        value={option}
                    >{`Discs ${option}`}</option>
                ))}
            </select>
        </label>
    );
};

export default SelectDisc;
