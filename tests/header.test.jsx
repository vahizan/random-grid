import { h } from 'preact';
import Header from '../src/components/header';
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
	test('Header renders title', () => {
		const props = {
			title: "Some Title"
		}
		const context = shallow(<Header {...props} />);
		expect(context.find('h1').text()).toBe('Some Title');
	});
});
