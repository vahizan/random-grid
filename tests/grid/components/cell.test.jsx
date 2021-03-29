import { h } from 'preact';
import { shallow } from 'enzyme';
import Cell from "../../../src/components/grid/components/cell";

describe('Cell', () => {
	let props;
	let mockSetClickId = jest.fn();
	beforeEach(() => {
		props = {
			id: 'cell-1-4',
			cellColour: "blue",
			textColour: "white",
			degree: 5,
			visible: false,
			setClickId: mockSetClickId,
		}
	});
	afterEach(() => {
		jest.restoreAllMocks();
	});
	test('renders cell', () => {
		const context = shallow(<Cell {...props} />);
		expect(context.find('.cell')).toHaveLength(1);
	});

	test('should render cell with colour from props', () => {
		const context = shallow(<Cell {...props} />);
		expect(context.find('.cell').props().style).toEqual("background-color:blue");
	});

	test('should render degree count when visible And Clicked', () => {
		props.visible = true;
		mockSetClickId.mockReturnValue('cell-1-4');
		const context = shallow(<Cell {...props} />);
		context.find('.cell').simulate('click');
		const cellDegree = context.find('.cell-degree');
		expect(cellDegree).toHaveLength(1);
		expect(cellDegree.text().trim()).toEqual("5");
	});

	test('should not render degree count when invisible', () => {
		const context = shallow(<Cell {...props} />);
		const cellDegree = context.find('.cell-degree');
		expect(cellDegree).toHaveLength(0);
	});

	test('when default cell should not render degree count on click', () => {
		props.cellColour = "white";
		const context = shallow(<Cell {...props} />);
		context.find('.cell').simulate('click');
		expect(context.find('.cell-degree')).toHaveLength(0);
	});
});
