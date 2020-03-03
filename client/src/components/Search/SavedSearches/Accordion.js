import React, { useState } from "react";

import "../../../assets/stylesheets/searchAccordion/searchAccordion.scss";
import SavedSearch from "./SavedSearch";

export default function Accordion(props) {
    const [selectedSearch, setSelectedSearch] = useState("1");

    return props.savedSearches.length !== 0 ? (
        <div className='savedSearchAccordion'>
            {props.savedSearches.map(savedSearch => (
                <SavedSearch
                    handleChanges={props.handleChanges}
                    handleSubmit={props.handleSubmit}
                    removeSearch={props.removeSearch}
                    selectedSearch={selectedSearch}
                    setSelectedSearch={setSelectedSearch}
                    key={savedSearch._id}
                    id={savedSearch._id}
                    savedSearch={savedSearch}
                />
            ))}
        </div>
    ) : (
        <div>You got no saved searches</div>
    );
}
