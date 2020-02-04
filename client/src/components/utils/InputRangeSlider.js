import React, { useState } from "react";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";

export default function InputRangeSlider(props) {
    const { minValue, maxValue, low, high } = props;
    const multiplier = props.multiplier || 1;

    const [range, setRange] = useState({
        value: { min: low, max: high }
    });

    const handleRangeChange = newRange => {
        setRange({ value: newRange });
        const newRangeMult = {
            min: newRange.min * multiplier,
            max: newRange.max * multiplier
        };
        props.onChange(newRangeMult);
    };

    const formatLabel = value => {
        return value >= maxValue
            ? `${value * multiplier}+`
            : value * multiplier;
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
