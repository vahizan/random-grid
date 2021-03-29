import { h } from 'preact';
import Slider from '../range-slider';
import {useEffect, useState} from "preact/hooks";

const ColourPicker = ({id, setColourValue}) => {
    const [red, setRed] = useState("0");
    const [green, setGreen] = useState("0");
    const [blue, setBlue] = useState("0");

    useEffect(() => {
        setColourValue([red,green,blue]);
    }, [red,green,blue, setColourValue]);
    return (
        <div id={id} className="colour-picker">
            <Slider id="red" min={0} max={255} setValue={setRed} />
            <Slider id="green" min={0} max={255} setValue={setGreen} />
            <Slider id="blue" min={0} max={255} setValue={setBlue} />
        </div>
    )
};

export default ColourPicker;
