import React from "react";
import { connect } from "react-redux";

import Financial from "./DataGroups/Financial";
import Houses from "./DataGroups/Houses";
import Demographics from "./DataGroups/Demographics";
import Crime from "./DataGroups/Crime";
import Education from "./DataGroups/Education";

import "../../../../assets/stylesheets/fullscreen/areaInfo.scss";

class AreaInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    // uncomment to get area data
    // componentWillMount() {
    //     if (this.props.search.location.postcode) {
    //         console.log(this.props.search.location.postcode);
    //         this.props.getAreaData({
    //             location: this.props.search.location.postcode,
    //             numBedrooms: 2
    //         });
    //     }
    // }

    render() {
        return (
            <div className='areaInfo'>
                <div className='areaHeaderContainer'>
                    <h2 className='areaHeader'>Area Analytics</h2>
                </div>
                <div className='locationTitleContainer'>
                    <h4 className='locationTitle'>Coventry, CV5 6GB</h4>
                </div>
                <div className='dataGroupContainer'>
                    {this.props.area.location !== "" &&
                    this.props.area.schools !== {} ? (
                        <div>
                            <Financial
                                growth={this.props.area.growth.data}
                                rent={this.props.area.rent.data.long_let}
                            />
                            <Houses demand={this.props.area.demand} />
                            <Demographics
                                demographics={this.props.area.demographics.data}
                            />
                            <Crime crime={this.props.area.crime} />
                            <Education
                                schools={this.props.area.schools.data.state}
                                propDegree={
                                    this.props.area.demographics.data
                                        .proportion_with_degree
                                }
                            />
                        </div>
                    ) : (
                        <div>Failed</div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    area: state.area
});

export default connect(mapStateToProps)(AreaInfo);
