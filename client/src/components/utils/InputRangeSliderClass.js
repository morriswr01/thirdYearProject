import React, { Component, useState } from "react";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";

export default function InputRangeSliderClass() {
    const [range, setRange] = useState({
        value: {
            min: 3,
            max: 7
        }
    });

    const handleRangeChange = newRange => {
        setRange([{ value: newRange }]);
    };

    return (
        <form className='form'>
            <InputRange
                draggableTrack
                maxValue={20}
                minValue={0}
                onChange={handleRangeChange}
                value={range.value}
            />
        </form>
    );
}

// export default class InputRangeSliderClass extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//           value: {
//             min: 3,
//             max: 7,
//           }
//         };
//       }

//       render() {
//         return (
//           <form className="form">
//             <InputRange
//               draggableTrack
//               maxValue={20}
//               minValue={0}
//               onChange={value => this.setState({ value: value })}
//               value={this.state.value} />
//           </form>
//         );
//       }
// }
