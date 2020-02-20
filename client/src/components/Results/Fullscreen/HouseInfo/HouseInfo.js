import React from "react";

import PriceElement from "./PriceElement";
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

    // Get area data
    const { soldPrices, growth, rent } = props.area;

    const getAvgGrowth = () => {
        let validLength = 0;
        const growths = growth.data.map(growthArr => {
            const len = growthArr.length;
            const growth = growthArr[len - 1];
            if (!growth) return null;

            validLength++;
            return parseFloat(growth.replace("%", ""));
        });

        const sum = growths.reduce((acc, g) => {
            return acc + g;
        }, 0);
        return sum / 100 / validLength;
    };

    const averagePrice = soldPrices.data.average;
    const avgRent = rent.data.long_let.average * 4;
    const fiveYearGrowth = Math.round(price * Math.pow(1 + getAvgGrowth(), 5));

    return (
        <div className='houseInfo'>
            <div className='imgContainer'>
                <img src={img_url} alt='House' />
            </div>
            <div className='infoContainer'>
                <div className='price'>
                    <PriceElement price={price} subheading='List Price' />
                    <PriceElement price={avgRent} subheading='Predicted Rent' />
                    <PriceElement
                        price={
                            averagePrice
                                ? averagePrice
                                : Math.round(price * 1.1)
                        }
                        subheading='Average Sale Value'
                    />
                    <PriceElement
                        price={fiveYearGrowth}
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
