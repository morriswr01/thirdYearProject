import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function TitleBar(props) {
    const { title, bedroom_number } = props.titleInfo;

    return (
        <div className='fullscreenTitle'>
            <h3>{title}</h3>
            <span
                onClick={e => {
                    console.log("Heart clicked");
                    // toggleLiked();
                    e.stopPropagation();
                }}
            >
                <FontAwesomeIcon
                    className={props.liked ? "heart active" : "heart"}
                    icon={faHeart}
                />
            </span>
        </div>
    );
}
