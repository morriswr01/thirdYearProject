import React from "react";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

import DataGroup from "./utils/DataGroup";

export default function Financial(props) {
    const { growth, rent } = props;

    const getAvgGrowth = growth => {
        let validLength = 0;
        const growths = growth.map(growthArr => {
            const len = growthArr.length;
            const growth = growthArr[len - 1];
            if (!growth) return null;

            validLength++;
            return parseFloat(growth.replace("%", ""));
        });

        const sum = growths.reduce((acc, g) => {
            return acc + g;
        }, 0);
        return Math.round((sum / validLength) * 100) / 100;
    };

    const getAvgValue = growth => {
        let validLength = 0;
        const growths = growth.map(growthArr => {
            const len = growthArr.length;
            const growth = growthArr[len - 2];
            if (!growth) return null;

            validLength++;
            return growth;
        });

        const sum = growths.reduce((acc, g) => {
            return acc + g;
        }, 0);
        return Math.round(sum / validLength);
    };

    return (
        <DataGroup icon={faMoneyBillWave} id='financial' key='financial'>
            <div className='stringInfo'>
                <h6 className='dataName'>Average Property Value</h6>
                <p className='dataString'>£{getAvgValue(growth)}</p>
            </div>
            <div className='stringInfo'>
                <h6 className='dataName'>Average Annual Growth</h6>
                <p className='dataString'>{getAvgGrowth(growth)}%</p>
            </div>
        </DataGroup>
    );
}
