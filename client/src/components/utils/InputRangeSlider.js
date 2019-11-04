import React, { useState } from "react";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";

export default function InputRangeSlider() {
    const [range, setRange] = useState({ value: { min: 0, max: 6 } });

    const handleRangeChange = newRange => {
		console.log(newRange);
        setRange({value : newRange});
    };

    return (
        <InputRange
            draggableTrack
            maxValue={6}
            minValue={0}
            onChange={handleRangeChange}
            value={range.value}
        />
    );
}
