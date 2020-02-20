import React from "react";

import Financial from "./DataGroups/Financial";
import Houses from "./DataGroups/Houses";
import Demographics from "./DataGroups/Demographics";
import Crime from "./DataGroups/Crime";
import Education from "./DataGroups/Education";

import "../../../../assets/stylesheets/fullscreen/areaInfo.scss";

export default function AreaInfo(props) {
    const { growth, rent, demand, crime, demographics, schools } = props.area;

    return (
        <div className='areaInfo'>
            <div className='areaHeaderContainer'>
                <h2 className='areaHeader'>Area Analytics</h2>
            </div>
            <div className='locationTitleContainer'>
                <h4 className='locationTitle'>Coventry, CV5 6GB</h4>
            </div>
            <div className='dataGroupContainer'>
                <Financial growth={growth.data} rent={rent.data.long_let} />
                <Houses demand={demand} />
                <Demographics demographics={demographics.data} />
                <Crime crime={crime} />
                <Education
                    schools={schools.data.state}
                    propDegree={demographics.data.proportion_with_degree}
                />
            </div>
        </div>
    );
}
