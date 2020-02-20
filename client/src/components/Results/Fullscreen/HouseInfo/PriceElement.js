import React from "react";

export default function PriceElement(props) {
    const { price, subheading } = props;

    return (
        <div className='priceElement'>
            <h6>{subheading}</h6>
            <h2>{"£" + price}</h2>
        </div>
    );
}
