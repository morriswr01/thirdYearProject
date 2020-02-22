import React from "react";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

import DataGroup from "./utils/DataGroup";
import ChartInfo from "./utils/ChartInfo";

export default function Financial(props) {
    const { growth } = props;

    const getPropValuesChartData = growth => {
        const labels = growth.map(arr => arr[0]);
        const data = growth.map(arr => arr[1]);

        return {
            labels,
            datasets: [
                {
                    label: "Property Value",
                    data,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(75, 192, 192, 0.6)",
                        "rgba(153, 102, 255, 0.6)",
                        "rgba(255, 159, 64, 0.6)"
                    ]
                }
            ]
        };
    };

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
            <div className='chartInfo'>
                <h6 className='dataName'>Property Value</h6>
                <div className='chart'>
                    <ChartInfo
                        chartData={getPropValuesChartData(growth)}
                        legendPosition='bottom'
                        type='line'
                    />
                </div>
            </div>
        </DataGroup>
    );
}
