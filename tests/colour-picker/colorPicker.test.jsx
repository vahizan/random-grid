import { h } from 'preact';
import Slider from "../../src/components/range-slider";
import {mount, shallow} from 'enzyme';
import ColourPicker from "../../src/components/colour-picker";

describe('ColourPicker', () => {
    afterEach(() => {
       jest.restoreAllMocks();
    });
    test('renders 3 sliders', () => {
        const context = shallow(<ColourPicker />);
        expect(context.find(Slider)).toHaveLength(3);
        expect(context.find(Slider).at(0).props().min).toEqual(0);
        expect(context.find(Slider).at(0).props().max).toEqual(255);
    });
    test("should set rgb colour array", () => {
        const setColourValueMock = jest.fn();
        const wrapper = mount(
            <ColourPicker
                min={0}
                max={255}
                setColourValue={setColourValueMock}
            />);
        wrapper.find('#red input').simulate('input');
        expect(setColourValueMock).toHaveBeenCalledWith(["0","0","0"]);
    })
});
