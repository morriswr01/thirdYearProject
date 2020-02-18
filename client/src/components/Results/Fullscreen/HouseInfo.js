import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faToilet } from "@fortawesome/free-solid-svg-icons";

import PriceElement from "./PriceElement";
import Nav from "./Nav";
import TitleBar from "./TitleBar";

export default function HouseInfo(props) {
    const {
        bedroom_number,
        price,
        summary,
        img_url,
    } = props.selectedListing;

    const handleLikedToggle = listing => {
        props.handleLikedToggle(listing);
    };

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
                        handleLikedToggle={handleLikedToggle}
                    />
                    <h4>
                        <FontAwesomeIcon icon={faBed} />
                        {bedroom_number}
                        <FontAwesomeIcon icon={faToilet} />
                        {1}
                    </h4>
                    <p>{summary}</p>
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
