import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import DataGroup from "./utils/DataGroup";

export default function Houses(props) {
    const { demand } = props;

    return (
        <DataGroup icon={faHome} id='houses' key='houses'>
            <div className='stringInfo'>
                <h6 className='dataName'>Market Demand</h6>
                <p className='dataString'>{demand.demand_rating}</p>
            </div>
            <div className='stringInfo'>
                <h6 className='dataName'>Sales Per Month</h6>
                <p className='dataString'>{demand.average_sales_per_month}</p>
            </div>
            <div className='stringInfo'>
                <h6 className='dataName'>Average Days On Market</h6>
                <p className='dataString'>{demand.days_on_market} days</p>
            </div>
        </DataGroup>
    );
}
