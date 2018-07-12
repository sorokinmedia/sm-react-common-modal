import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ModalHeader from './index';

configure({ adapter: new Adapter() });

function setup(customProps, lifeCycle = false) {
	const props = { ...customProps }
	const container = shallow(
		<ModalHeader {...props} />,
		{ disableLifecycleMethods: lifeCycle }
	)
	return { container, props }
}


describe('ModalHeader', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true);
	});

	it('should the component has div with the required class', () => {
		const { container } = setup()
		expect(container.hasClass('modal-header')).toBeTruthy()
	});
})
