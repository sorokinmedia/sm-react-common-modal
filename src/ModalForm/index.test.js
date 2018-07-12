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
		const { container } = setup({ modalIsOpen: true, title: 'title', closeModal: jest.fn() })
		expect(container.exists()).toBe(true);
		expect(container.find('ModalHeader').length).toEqual(1);
		expect(container.find('ModalClose').length).toEqual(1);
		expect(container.find('ModalTitle').length).toEqual(1);
		expect(container.find('ModalBody').length).toEqual(1);
	});

})
