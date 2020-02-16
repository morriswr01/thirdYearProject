import React from "react";
import "./App.css";
import { CSSTransitionGroup } from "react-transition-group";

import SlideyComponent from "./SlideyComponent";
import SlideyComponentReactTransition from "./SlideyComponentReactTransition";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    toggleMenu = () => {
        this.setState({
            visible: !this.state.visible
        });
    };

    handleMouseDown = e => {
        this.toggleMenu();

        e.stopPropagation();
    };
    render() {
        return (
            <div className='App' onMouseDown={this.handleMouseDown}>
                <CSSTransitionGroup
                    in={this.state.visible}
                    timeout={200}
                    classNames='slideComp'
                >
                    <SlideyComponentReactTransition
                        visible={this.state.visible}
                        onMouseDown={this.handleMouseDown}
                        key={1}
                    />
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default App;
