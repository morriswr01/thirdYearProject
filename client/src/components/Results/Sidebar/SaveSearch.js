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
        if (
            this.props.search.savedSearches.length > 0 &&
            this.props.search._id != "1"
        ) {
            this.setState({
                saved:
                    this.props.search.savedSearches.find(savedSearch => {
                        return this.props.search._id !== savedSearch._id;
                    }) !== undefined
            });
        }
    }

    handleAddSearch = e => {
        this.props.saveSearch();

        this.setState({
            saved: true
        });
    };

    handleRemoveSearch = e => {
        this.props.removeSearch();

        this.setState({
            saved: false
        });
    };

    render() {
        return this.state.saved === false ? (
            <div>
                <button onClick={this.handleAddSearch}>Save</button>
            </div>
        ) : (
            <div>
                <button onClick={this.handleRemoveSearch}>Unsave</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    search: state.search
});

export default connect(mapStateToProps, { getSavedSearches })(SaveSearch);
