import React from "react";

import { faChartArea } from "@fortawesome/free-solid-svg-icons";

import ChartInfo from "./utils/ChartInfo";

import DataGroup from "./utils/DataGroup";
export default function Demographics(props) {
    const { demographics } = props;

    const getAgeDemographicsChart = ages => {
        const labels = Object.keys(ages);
        const data = Object.values(ages);

        return {
            labels,
            datasets: [
                {
                    label: "Age",
                    data,
                    backgroundColor: [
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8",
                        "#0275d8"
                    ]
                }
            ]
        };
    };

    return (
        <DataGroup icon={faChartArea} id='demographics' key='demographics'>
            <div className='chartInfo'>
                <h6 className='dataName'>Age Demographics</h6>
                <div className='chart'>
                    <ChartInfo
                        chartData={getAgeDemographicsChart(demographics.age)}
                        legendPosition='bottom'
                        type='bar'
                    />
                </div>
            </div>
            <div className='stringInfo'>
                <h6 className='dataName'>Vehicles Per Household</h6>
                <p className='dataString'>
                    {demographics.vehicles_per_household}
                </p>
            </div>
            <div className='chartInfo'>
                <h6 className='dataName'>Methods Of Travel</h6>
                <div className='chart'>Travel chart</div>
            </div>
            <div className='chartInfo'>
                <h6 className='dataName'>Politics</h6>
                <div className='chart'>Politics chart</div>
            </div>
        </DataGroup>
    );
}
