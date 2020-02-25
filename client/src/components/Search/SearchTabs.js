import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";

import "../../assets/stylesheets/searchTabs.scss";

export default function SearchTabs(props) {
    const { toggle } = props;

    const onToggleChange = radius => {
        props.handleToggleChange(radius);
    };

    return (
        <div className='savedSearchToggleButtons'>
            <ButtonGroup className='buttons'>
                <Button
                    className='toggleButton'
                    color='primary'
                    onClick={() => onToggleChange(1)}
                    active={toggle === 1}
                >
                    <FontAwesomeIcon icon={faFilter} />
                    Filters
                </Button>
                <Button
                    className='toggleButton'
                    color='danger'
                    onClick={() => onToggleChange(2)}
                    active={toggle === 2}
                >
                    <FontAwesomeIcon icon={faSearch} />
                    Saved Searches
                </Button>
            </ButtonGroup>
        </div>
    );
}
