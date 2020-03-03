import React, { Component } from "react";

import TitleBar from "./TitleBar";
import Amenity from "./Amenity";

import "../../../../assets/stylesheets/fullscreen/amenities.scss";

export default function Amenities(props) {
    const getDistBetweenCoords = (
        houseLocation,
        amenityLocation,
        unit = "K"
    ) => {
        let lat1 = houseLocation.latitude;
        let long1 = houseLocation.longitude;
        let lat2 = amenityLocation.lat;
        let long2 = amenityLocation.lng;

        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = long1 - long2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
            Math.sin(radlat1) * Math.sin(radlat2) +
            Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === "K") {
            dist = dist * 1.609344;
        }
        if (unit === "N") {
            dist = dist * 0.8684;
        }
        return dist;
    };

    const getAmenityComponents = (amenities, selectedListing) => {
        let maxDist = 0;
        let amenitiesWithDistance = amenities.map(amenity => {
            let distance = getDistBetweenCoords(
                selectedListing,
                amenity.location
            );
            maxDist = Math.max(distance, maxDist);
            return {
                ...amenity,
                distance
            };
        });

        amenitiesWithDistance = amenitiesWithDistance.sort(
            (a, b) => a.distance - b.distance
        );

        return amenitiesWithDistance.map((amenity, i) => (
            <Amenity
                name={amenity.name}
                distance={props.fullscreen ? amenity.distance : 250}
                number={i}
                type={amenity.type}
                maxDist={maxDist}
                key={i}
            />
        ));
    };

    return (
        <div className='amenitiesContainer'>
            <div className='amenitiesBox'>
                <TitleBar />
                <div className='amenities'>
                    {getAmenityComponents(
                        props.amenities,
                        props.selectedListing
                    )}
                </div>
            </div>
        </div>
    );
}
