import React from "react";

import PriceElement from "./PriceElement";
import Nav from "./Nav";
import TitleBar from "./TitleBar";

export default function HouseInfo(props) {
    const {
        title,
        bedroom_number,
        price,
        summary,
        img_url,
        // updated_in_days,
        // datasource_name
    } = props.selectedListing;

    return (
        <div className='houseInfo'>
            <div className='imgContainer'>
                <img src={img_url} alt='House' />
            </div>
            <div className='infoContainer'>
                <div className='price'>
                    <PriceElement price={price} subheading='List Price' />
                    <PriceElement
                        price={Math.round(price / 100)}
                        subheading='Predicted Rent'
                    />
                    <PriceElement
                        price={Math.round(price * 1.1)}
                        subheading='Average Sale Value'
                    />
                    <PriceElement
                        price={Math.round(price * 1.25)}
                        subheading='Value in 5 years'
                    />

                    <hr />
                </div>
                <div className='info'>
                    <TitleBar titleInfo={{ title, bedroom_number, summary }} />
                </div>
            </div>
            <Nav setSelectedListing={props.setSelectedListing} />
        </div>
    );
}
