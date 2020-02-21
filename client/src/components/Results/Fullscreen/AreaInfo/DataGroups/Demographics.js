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

    const getPoliticsChart = politics => {
        const labels = Object.keys(politics);
        const data = Object.values(politics).map(percentage =>
            parseInt(percentage)
        );

        return {
            labels,
            datasets: [
                {
                    label: "Political Party",
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
    const getMethodOfTravelChart = travelMethods => {
        const labels = Object.keys(travelMethods);
        const data = Object.values(travelMethods);

        return {
            labels,
            datasets: [
                {
                    label: "Travel Method",
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
                <div className='chart'>
                    <ChartInfo
                        chartData={getMethodOfTravelChart(
                            demographics.commute_method
                        )}
                        legendPosition='bottom'
                        type='pie'
                    />
                </div>
            </div>
            <div className='chartInfo'>
                <h6 className='dataName'>Politics</h6>
                <div className='chart'>
                    <ChartInfo
                        chartData={getPoliticsChart(
                            demographics.politics.results
                        )}
                        legendPosition='bottom'
                        type='bar'
                    />
                </div>
            </div>
        </DataGroup>
    );
}
