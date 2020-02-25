import React from "react";
import { connect } from "react-redux";

function SaveSearch(props) {
    return (
        <div>
            <button>Save</button>
        </div>
    );
}

export default connect(null, {})(SaveSearch);