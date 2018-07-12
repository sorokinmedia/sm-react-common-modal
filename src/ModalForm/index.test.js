import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ModalTitle from './index';

configure({ adapter: new Adapter() });

function setup(customProps, lifeCycle = false) {
	const props = { ...customProps }
	const container = shallow(
		<ModalTitle {...props} />,
		{ disableLifecycleMethods: lifeCycle }
	)
	return { container, props }
}


describe('ModalTitle', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true);
	});

	// it('should the component has div with the required class', () => {
	// 	const { container } = setup()
	// 	expect(container.hasClass('modal-title')).toBeTruthy()
	// });
})
