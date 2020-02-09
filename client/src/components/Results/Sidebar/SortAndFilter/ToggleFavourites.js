import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ToggleFavourites(props) {
    const { toggle } = props;

    const onToggleChange = radius => {
        props.handleToggleChange(radius);
    };

    return (
        <div className='favouritesToggleButtons'>
            <ButtonGroup>
                <Button
                    color='primary'
                    onClick={() => onToggleChange(1)}
                    active={toggle === 1}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
                <Button
                    color='danger'
                    onClick={() => onToggleChange(2)}
                    active={toggle === 2}
                >
                    <FontAwesomeIcon icon={faHeart} />
                </Button>
            </ButtonGroup>
        </div>
    );
}
