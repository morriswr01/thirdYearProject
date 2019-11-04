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

export default function SearchFilter() {
    const [checkedButtons, setCheckedButtons] = useState([]);

    const onCheckboxBtnClick = selected => {
        const index = checkedButtons.indexOf(selected);
        if (index < 0) {
            checkedButtons.push(selected);
        } else {
            checkedButtons.splice(index, 1);
        }
        setCheckedButtons([...checkedButtons]);
    };

    return (
        <div className='search-filter'>
            <h4>Filters</h4>
            <Form>
                <FormGroup>
                    <Label for='house-type'>House Type</Label>
                    <InputGroup id='house-type'>
                        <ButtonGroup className='house-type-options'>
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
                    <Label for='num-bedrooms-slider'>Bedrooms</Label>
                    <div className='num-bedrooms-slider'>
                        <InputRangeSlider />
                    </div>
                </FormGroup>
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
