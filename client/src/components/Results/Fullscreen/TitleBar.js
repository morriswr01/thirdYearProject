import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faToilet } from "@fortawesome/free-solid-svg-icons";

export default function TitleBar(props) {
    const { title, summary, bedroom_number } = props.titleInfo;

    return (
        <div>
            <h3>{title}</h3>
            <h4>
                <FontAwesomeIcon icon={faBed} />
                {bedroom_number}
                <FontAwesomeIcon icon={faToilet} />
                {1}
            </h4>
            <h4>{summary}</h4>
        </div>
    );
}
