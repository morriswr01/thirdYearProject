import React from "react";

import DataGroup from "./utils/DataGroup";
import ChartInfo from "./utils/ChartInfo";

import { faAngry } from "@fortawesome/free-solid-svg-icons";

export default function Crime(props) {
    const { crime } = props;

    const getCrimeChart = crimes => {
        const labels = Object.keys(crimes);
        const data = Object.values(crimes);

        return {
            labels,
            datasets: [
                {
                    label: "Crime",
                    data,
                    backgroundColor: [
                        "rgba(75, 192, 192, 0.6)",
                        "rgba(153, 102, 255, 0.6)",
                        "rgba(255, 159, 64, 0.6)",
                        "#003f5c",
                        "#2f4b7c",
                        "#665191",
                        "#a05195",
                        "#d45087",
                        "#f95d6a",
                        "#ff7c43",
                        "#ffa600"
                    ]
                }
            ]
        };
    };

    return (
        <DataGroup icon={faAngry} id='crime' key='crime'>
            <div className='stringInfo'>
                <h6 className='dataName'>Crime Rating</h6>
                <p className='dataString'>{crime.crime_rating}</p>
            </div>
            <div className='chartInfo'>
                <h6 className='dataName'>Area Crimes</h6>
                <div className='chart'>
                    <ChartInfo
                        chartData={getCrimeChart(crime.types)}
                        legendPosition='bottom'
                        type='bar'
                    />
                </div>
            </div>
        </DataGroup>
    );
}
