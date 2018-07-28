import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import ModalTitle from './index'

configure({ adapter: new Adapter() })

function setup(customProps, lifeCycle = false) {
	const props = { ...customProps }
	const container = shallow(
		<ModalTitle {...props} />,
		{ disableLifecycleMethods: lifeCycle }
	)
	return { container, props }
}

function Element() {
	return <div>element</div>
}


describe('ModalTitle', () => {

	it('should render the component', () => {
		const { container } = setup()
		expect(container.exists()).toBe(true)
	})

	it('should the component has div with the required class', () => {
		const { container } = setup()
		expect(container.hasClass('modal-title')).toBeTruthy()
	})
	it('should have children within', () => {
		const { container } = setup({ children: <Element /> })
		console.log(container.debug())
		expect(container.find('h4 Element').exists()).toEqual(true)
	})
	it('should have not children within', () => {
		const { container } = setup({ children: null })
		console.log(container.debug())
		expect(container.find('h4 Element').exists()).toEqual(false)
	})
})
