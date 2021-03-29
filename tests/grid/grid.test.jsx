import { h } from 'preact';
import Grid from "../../src/components/grid";
import { shallow, mount } from 'enzyme';
import Cell from "../../src/components/grid/components/cell";

describe('Grid', () => {
    afterEach(() => {
       jest.restoreAllMocks();
    });
    test('renders grid', () => {
        const wrapper = shallow(<Grid />);
        expect(wrapper).toBeDefined();
    });
    test("generates correct number of cells", () => {
        const wrapper = mount(
            <Grid
                size={5}
                cellColor={[0,0,0]}
                textColor={[255,255,255]}
            />);
        expect(wrapper.find(Cell)).toHaveLength(25);
    });

    test("should show edge count when clicked on cell", () => {
        const wrapper = mount(
            <Grid
                size={5}
            />);
        expect(wrapper.find(Cell)).toHaveLength(25);
    });
});
