import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Modal from './index';

configure({ adapter: new Adapter() });

function setup(customProps, lifeCycle = false) {
	const props = { ...customProps }
	const container = shallow(
		<Modal {...props} />,
		{ disableLifecycleMethods: lifeCycle }
	)
	return { container, props }
}


describe('Modal', () => {
	const click = jest.fn();
	const { container } = setup({ isOpen: true, onRequestHide: click })

	it('should render the component', () => {
		expect(container.exists()).toBe(true);
	});

	it('should the component has div with the required class', () => {
		expect(container.find('.modal-backdrop')).toBeTruthy()
	});

	it('should backdrop clicked once', () => {
		const instance = container.instance();
		instance.handleAreaClick = jest.fn(() => console.log('ok'))
		container.instance().forceUpdate()
		container.update()
		container.find('.modal-backdrop').simulate('click');
		expect(instance.handleAreaClick).toHaveBeenCalled()
	});
})
