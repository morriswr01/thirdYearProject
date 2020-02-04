import React, { useState } from "react";
import {
    Form,
    FormGroup,
    Label,
    Button,
    ButtonGroup,
    InputGroup
} from "reactstrap";

import InputRangeSlider from "../utils/InputRangeSlider";
import {
    SET_HOUSE_TYPE,
    SET_SEARCH_RADIUS,
    SET_HOUSE_PRICE,
    SET_NUM_BEDROOMS
} from "../../actions/types";

// SCSS
import "../../assets/stylesheets/index.scss";

export default function SearchFilter(props) {
    const [checkedButtons, setCheckedButtons] = useState([]);
    const [radioButtons, setRadioButtons] = useState(1);

    const onSubmit = e => {
        props.handleSubmit(radioButtons);
    };

    const onHousePriceChange = values => {
        props.handleFilterChange(SET_HOUSE_PRICE, values);
    };

    const onNumBedsChange = values => {
        props.handleFilterChange(SET_NUM_BEDROOMS, values);
    };

    const onHouseTypeChange = type => {
        const index = checkedButtons.indexOf(type);
        if (index < 0) {
            checkedButtons.push(type);
        } else {
            checkedButtons.splice(index, 1);
        }
        setCheckedButtons([...checkedButtons]);

        props.handleFilterChange(SET_HOUSE_TYPE, checkedButtons);
    };

    const onSearchRadiusChange = radius => {
        setRadioButtons(radius);

        props.handleFilterChange(SET_SEARCH_RADIUS, radius);
    };

    return (
        <div className='search-filter'>
            <h4>Filters</h4>
            <Form>
                <FormGroup>
                    <Label for='house-type'>House Type</Label>
                    <InputGroup id='house-type'>
                        <ButtonGroup className='multi-choice-buttons'>
                            <Button
                                color='primary'
                                onClick={() => onHouseTypeChange(1)}
                                active={checkedButtons.includes(1)}
                            >
                                Flats/Apartments
                            </Button>
                            <Button
                                color='primary'
                                onClick={() => onHouseTypeChange(2)}
                                active={checkedButtons.includes(2)}
                            >
                                Houses
                            </Button>
                        </ButtonGroup>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for='house-price-slider'>House Price</Label>
                    <div className='house-price-slider'>
                        <InputRangeSlider
                            minValue={0}
                            maxValue={50}
                            low={0}
                            high={50}
                            multiplier={20000}
                            onChange={onHousePriceChange}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for='num-bedrooms-slider'>Bedrooms</Label>
                    <div className='num-bedrooms-slider'>
                        <InputRangeSlider
                            minValue={1}
                            maxValue={5}
                            low={1}
                            high={5}
                            onChange={onNumBedsChange}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for='house-type'>Search Radius</Label>
                    <InputGroup id='house-type'>
                        <ButtonGroup className='multi-choice-buttons'>
                            <Button
                                color='primary'
                                onClick={() => onSearchRadiusChange(1)}
                                active={radioButtons === 1}
                            >
                                1mi
                            </Button>
                            <Button
                                color='primary'
                                onClick={() => onSearchRadiusChange(2.5)}
                                active={radioButtons === 2.5}
                            >
                                2.5mi
                            </Button>
                            <Button
                                color='primary'
                                onClick={() => onSearchRadiusChange(5)}
                                active={radioButtons === 5}
                            >
                                5mi
                            </Button>
                            <Button
                                color='primary'
                                onClick={() => onSearchRadiusChange(10)}
                                active={radioButtons === 10}
                            >
                                10mi
                            </Button>
                            <Button
                                color='primary'
                                onClick={() => onSearchRadiusChange(20)}
                                active={radioButtons === 20}
                            >
                                20+
                            </Button>
                        </ButtonGroup>
                    </InputGroup>
                </FormGroup>
                <Button
                    className='search-submit-btn'
                    onClick={onSubmit}
                    color='success'
                >
                    Find Houses
                </Button>
            </Form>
        </div>
    );
}
