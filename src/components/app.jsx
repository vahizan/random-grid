import {h} from 'preact';
import {useState} from 'preact/hooks';
import Header from './header';
import ColourPicker from "./colour-picker";
import Grid from "./grid";
import Slider from "./range-slider";
import {generateGrid, generateTextColor} from "./grid/utils/utils";

const App = () => {
	const [rgbArray, setRgbArray] = useState([0,0,0]);
	const [size, setSize] = useState(1);

	let rgbVal = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
	let textColourArray = generateTextColor(rgbArray);
	let textColour = `rgb(${textColourArray[0]}, ${textColourArray[1]}, ${textColourArray[2]})`;
	const grid = generateGrid(size);

	return (
		<div id="app">
			<Header title="Random Grid" />
			<div id="app-content">
				<label>Color Picker</label>
				<div style={`background-color:${rgbVal};color:${textColour}`} id="colour-slab">{rgbVal}</div>
				<ColourPicker id="colour-picker" setColourValue={setRgbArray} />
				<div className="graph-container">
					<Slider id="grid-size-slider" defaultValue={4} max={50} min={1} setValue={setSize} />
					<Grid size={size} grid={grid} cellColour={rgbVal} textColour={textColour} />
				</div>
			</div>
		</div>
	)
}

export default App;
