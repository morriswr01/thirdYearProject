import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "../../../../assets/stylesheets/fullscreen/titleBar.scss";

export default function TitleBar(props) {
    const { title, lister_url, liked } = props.listing;

    return (
        <div className='fullscreenTitle'>
            <h3>{title}</h3>
            <div className='buttonsContainer'>
                <div className='externalLinkContainer'>
                    <a href={lister_url} className='externalLink'>
                        View Source
                    </a>
                </div>
                <div className='likeButtonContainer'>
                    <span
                        onClick={e => {
                            console.log("Heart clicked");
                            props.handleLikedToggle();
                            e.stopPropagation();
                        }}
                    >
                        <FontAwesomeIcon
                            className={liked ? "heart active" : "heart"}
                            icon={faHeart}
                        />
                    </span>
                </div>
            </div>
            <div id='borderBottom'></div>
        </div>
    );
}
