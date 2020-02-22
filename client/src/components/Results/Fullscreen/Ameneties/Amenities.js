import React, { Component } from "react";

import TitleBar from "./TitleBar";
import Amenity from "./Amenity";

import "../../../../assets/stylesheets/fullscreen/amenities.scss";

export default class Amenities extends Component {
    componentDidUpdate() {
        // On load, call an action to search for amenities within a certain mile radius of the search location and get their long/lat
        // Store this in {name, location:{lat,lng}} format
    }

    componentWillUpdate() {
        // On selection of a new listing, calculate the birds eye distance to each of the amenities in metres and display these amenities using map
    }

    render() {
        return (
            <div className='amenitiesContainer'>
                <div className='amenitiesBox'>
                    <TitleBar />
                    <div className='amenities'>
                        <Amenity
                            name='Asda Supermarket'
                            distance={300}
                            number={0}
                        />
                        <Amenity
                            name='Asda Supermarket'
                            distance={600}
                            number={1}
                        />
                        <Amenity
                            name='Asda Supermarket'
                            distance={700}
                            number={2}
                        />
                        <Amenity
                            name='Asda Supermarket'
                            distance={900}
                            number={3}
                        />
                        <Amenity
                            name='Asda Supermarket'
                            distance={1300}
                            number={4}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
