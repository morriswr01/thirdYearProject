import React, { Component } from "react";
import { Input } from "reactstrap";
import places from "places.js";
import "../../assets/stylesheets/index.scss";

export default class SearchBox extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            searchPostCode: "",
            cityName: "",
            latlng: {},
            searchText: "",
            fullAddress: ""
        };
    }

    componentDidMount() {
        // Move into config file
        let placesAutoComplete = places({
            appId: "plWMGTTHNDXS",
            apiKey: "54a8cdecc5e1d5fe5cd3741e0ea57723",
            container: document.querySelector("#address-input"),
            language: "en",
            countries: ["GB"]
        });

        placesAutoComplete.on("change", e => {
            // If autocomplete finds a value, set the postcode
            this.setState({
                ...this.state,
                latlng: e.suggestion.latlng,
                cityName: e.suggestion.city,
                searchPostCode: e.suggestion.postcode,
                searchText: e.suggestion.value
            });

            // If the postcode is set pass it to the parent so that it can be used in submission
            if (this.state.searchPostCode !== "") {
                this.props.handleSearchTextChange(
                    this.state.searchPostCode,
                    this.state.latlng
                );
                this.props.handleCityChange(this.state.cityName);
            }
        });
    }

    onSearchTextChange = e => {
        if (this.state.searchPostCode === "") {
        }
        this.setState({
            ...this.state,
            searchText: e.target.value
        });
    };

    render() {
        const { searchText } = this.state;

        return (
            <div className='search-box'>
                <Input
                    value={searchText}
                    onChange={this.onSearchTextChange}
                    type='text'
                    placeholder='Search'
                    id='address-input'
                />
            </div>
        );
    }
}
