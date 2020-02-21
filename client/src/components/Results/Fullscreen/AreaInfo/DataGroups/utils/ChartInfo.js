import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default class ChartInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        };
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right"
    };

    getChart = type => {
        switch (type) {
            case "bar":
                return (
                    <Bar
                        data={this.state.chartData}
                        options={{
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }}
                    />
                );
            case "line":
                return (
                    <Line
                        data={this.state.chartData}
                        options={{
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }}
                    />
                );
            case "pie":
                return (
                    <Pie
                        data={this.state.chartData}
                        options={{
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            }
                        }}
                    />
                );
        }
    };

    render() {
        return <div className='chart'>{this.getChart(this.props.type)}</div>;
    }
}
