import React from "react";

import SortBy from "./SortBy";
import FilterContainer from "./FilterContainer";
import ToggleFavourites from "./ToggleFavourites";

export default function SortAndFilter(props) {
    return (
        <div className='sortFilterAndFavourites'>
            <SortBy />
            <ToggleFavourites
                handleToggleChange={props.handleToggleChange}
                toggle={props.radioButtons}
            />
            <FilterContainer />
        </div>
    );
}
