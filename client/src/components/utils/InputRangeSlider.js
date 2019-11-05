import React, { useState } from "react";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";

export default function InputRangeSlider(props) {
    const { minValue, maxValue } = props;
    const multiplier = props.multiplier || 1;
    
    const [range, setRange] = useState({
        value: { min: minValue, max: maxValue }
    });

    const handleRangeChange = newRange => {
        setRange({ value: newRange });
    };

    const formatLabel = value => {
        return value >= maxValue ? `${value*multiplier}+` : value*multiplier;
    };

    return (
        <InputRange
            draggableTrack
            maxValue={maxValue}
            minValue={minValue}
            formatLabel={value => formatLabel(value)}
            onChange={handleRangeChange}
            value={range.value}
        />
    );
}
