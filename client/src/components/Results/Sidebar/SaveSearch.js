import React from "react";
import { connect } from "react-redux";

import { getSavedSearches } from "../../../actions/searchActions";

class SaveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.props.getSavedSearches();
        this.state = {
            saved: false
        };
    }

    componentDidMount() {
        const { search } = this.props.search;
        if (this.props.search.savedSearches.length > 0) {
            this.setState({
                saved:
                    this.props.search.savedSearches.find(savedSearch => {
                        return this.props.search._id !== savedSearch._id;
                    }) !== undefined
            });
        }
    }

    handleAddSearch = () => {};

    render() {
        return this.state.saved === false ? (
            <div>
                <button onClick={this.handleAddSearch}>Save</button>
            </div>
        ) : (
            <div>
                <button>Unsave</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    search: state.search
});

export default connect(mapStateToProps, { getSavedSearches })(SaveSearch);
