import React from "react";

import PriceElement from "../PriceElement";
import Nav from "../Nav";
import TitleBar from "./TitleBar";
import RoomsInfo from "./RoomsInfo";
import Description from "./Description";

export default function HouseInfo(props) {
    const {
        bedroom_number,
        bathroom_number,
        price,
        summary,
        description,
        img_url,
        lister_url
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
                    <TitleBar
                        listing={props.selectedListing}
                        handleLikedToggle={props.handleLikedToggle}
                    />
                    <RoomsInfo
                        bedroom_number={bedroom_number}
                        bathroom_number={bathroom_number}
                    />
                    <Description
                        summary={summary}
                        description={description}
                        lister_url={lister_url}
                    />
                </div>
            </div>
            <Nav
                setSelectedListing={props.setSelectedListing}
                auth={props.auth}
                logout={props.logout}
            />
        </div>
    );
}
