import React from "react";
import { Input } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import '../assets/stylesheets/index.scss';

export default function SearchBox() {
    return (
        <div className="search-box">
            <Input type="text" placeholder="Search" />
            <span className="search-box-icon"><FontAwesomeIcon icon={faSearch} /></span>
        </div>
    )
}