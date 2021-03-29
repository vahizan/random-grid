import { h } from 'preact';
import {useState} from "preact/hooks";

const Slider = ({id, min, max, defaultValue, setValue}) => {
    const [currentValue, setCurrentValue] = useState(min);
     const onInputChange = (event) => {
         setCurrentValue(event.target.value);
         setValue(event.target.value);
     };
     return (
        <div className="slider">
            <input id={id} type="range" className="slider-input" name="slider-input" id={id} min={min} max={max} defaultValue={defaultValue} onInput={onInputChange} />
            <div className="slider-value"> {currentValue}</div>
        </div>
     )
};

export default Slider;
