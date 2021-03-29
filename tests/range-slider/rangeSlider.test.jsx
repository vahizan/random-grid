import { h } from 'preact';
import Slider from "../../src/components/range-slider";
import { shallow, mount } from 'enzyme';

describe('Slider', () => {
    afterEach(() => {
       jest.restoreAllMocks();
    });
    test('renders slider input', () => {
        const wrapper = shallow(<Slider />);
        expect(wrapper.find('input[type="range"]')).toHaveLength(1);
    });
    test("change in input should setValue", () => {
        const setValueMock = jest.fn();
        const wrapper = mount(
            <Slider
                min={0}
                max={255}
                defaultValue={0}
                setValue={setValueMock}
            />);
        wrapper.find('input').simulate('input');
        expect(setValueMock).toHaveBeenCalledTimes(1);
    })
});
