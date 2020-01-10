import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { Redirect } from "react-router";

import Map from "./Map";
import ListingsSidebar from "./ListingsSidebar";

import "../../assets/stylesheets/listings.scss";

class Listings extends Component {
    listing = [
        {
            bathroom_number: "",
            bedroom_number: 6,
            car_spaces: "",
            commission: 0,
            construction_year: 0,
            datasource_name: "Property Pigeon",
            img_height: 300,
            img_url:
                "https://imgs.nestimg.com/6_bed_terraced_for_sale_hilton_road_leeds_112849746154294320.jpg",
            img_width: 400,
            keywords: "Terraced, Kitchen, Basement, Reception",
            latitude: 53.818993,
            lister_url:
                "https://www.nestoria.co.uk/detail-int/0000000112849746154294320/title/5/1-1?serpUid=&pt=1&ot=1&l=ls21&did=95_default&t_sec=9&t_or=45&t_pvid=null&utm_source=api&utm_medium=external",
            listing_type: "buy",
            location_accuracy: 9,
            longitude: -1.521709,
            price: 245000,
            price_currency: "£",
            price_formatted: "£245,000",
            price_high: 245000,
            price_low: 245000,
            price_type: "245000",
            property_type: "house",
            room_number: 6,
            size: 0,
            size_type: "net",
            summary:
                "Hmo c4 classification an , double fronted six bedroom property occu...",
            thumb_height: 60,
            thumb_url:
                "https://imgs.nestimg.com/medium/6_bed_terraced_for_sale_hilton_road_leeds_112849746154294320.jpg",
            thumb_width: 80,
            title: "House for sale, Hilton Road",
            updated_in_days: 25,
            updated_in_days_formatted: "first seen 3 weeks ago"
        }
    ];

    render() {
        return this.props.listings.length === 0 ? (
            <Redirect to='/' />
        ) : (
            // return (
            <div className='resultsContainer'>
                <div className='listingsSidebar'>
                    <ListingsSidebar />
                </div>

                <Map
                    // listings={this.listing}
                    listings={this.props.listings}
                    location={this.props.location}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    location: state.search.location,
    listings: state.search.listings
});

export default connect(mapStateToProps)(Listings);
