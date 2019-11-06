import React, { useState } from "react";
import {
    Form,
    FormGroup,
    Label,
    Button,
    ButtonGroup,
    InputGroup
} from "reactstrap";

import InputRangeSlider from "./utils/InputRangeSlider";

// SCSS
import "../assets/stylesheets/index.scss";

export default function SearchFilter(props) {
    const [checkedButtons, setCheckedButtons] = useState([]);
    const [radioButtons, setRadioButtons] = useState(null);
    const [sliders, setSliders] = useState({
        housePrice: { min: 0, max: 1000000 },
        numBedrooms: { min: 1, max: 5 }
    });

    const onCheckboxBtnClick = selected => {
        const index = checkedButtons.indexOf(selected);
        if (index < 0) {
            checkedButtons.push(selected);
        } else {
            checkedButtons.splice(index, 1);
        }
        setCheckedButtons([...checkedButtons]);
    };

    const onSubmit = e => {
        const houseTypes =
            checkedButtons.length === 0 ? [1, 2] : checkedButtons;
        const searchRadius = radioButtons === null ? 5 : radioButtons;
        const priceRange = sliders.housePrice;
        const numBedrooms = sliders.numBedrooms;

        props.onSubmit(houseTypes, searchRadius, priceRange, numBedrooms);
    };

    const handleHousePriceChange = values => {
        setSliders(currentSliders => ({
            ...currentSliders,
            housePrice: { ...values }
        }));
    };

    const handleNumBedsChange = values => {
        setSliders(currentSliders => ({
            ...currentSliders,
            numBedrooms: { ...values }
        }));
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
                                onClick={() => onCheckboxBtnClick(1)}
                                active={checkedButtons.includes(1)}
                            >
                                Flats/Apartments
                            </Button>
                            <Button
                                color='primary'
                                onClick={() => onCheckboxBtnClick(2)}
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
                            multiplier={20000}
                            onChange={handleHousePriceChange}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for='num-bedrooms-slider'>Bedrooms</Label>
                    <div className='num-bedrooms-slider'>
                        <InputRangeSlider
                            minValue={1}
                            maxValue={5}
                            onChange={handleNumBedsChange}
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for='house-type'>Search Radius</Label>
                    <InputGroup id='house-type'>
                        <ButtonGroup className='multi-choice-buttons'>
                            <Button
                                color='primary'
                                onClick={() => setRadioButtons(1)}
                                active={radioButtons === 1}
                            >
                                1mi
                            </Button>
                            <Button
                                color='primary'
                                onClick={() => setRadioButtons(2)}
                                active={radioButtons === 2}
                            >
                                5mi
                            </Button>
                            <Button
                                color='primary'
                                onClick={() => setRadioButtons(3)}
                                active={radioButtons === 3}
                            >
                                10mi
                            </Button>
                            <Button
                                color='primary'
                                onClick={() => setRadioButtons(4)}
                                active={radioButtons === 4}
                            >
                                20mi
                            </Button>
                            <Button
                                color='primary'
                                onClick={() => setRadioButtons(5)}
                                active={radioButtons === 5}
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

// Bootstrap
// eslint-disable-next-line
{
    /* <FormGroup>
    <Label for='house-price-slider'>Price</Label>
    <Input
        type='range'
        min='1'
        max='100000'
        className='house-price-slider'
        id='house-price-slider'
    />
</FormGroup> */
}
