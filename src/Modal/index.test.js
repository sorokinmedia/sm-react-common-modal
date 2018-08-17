import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Modal from './index'

configure({ adapter: new Adapter() })

function setup(customProps, lifeCycle = false) {
	const props = { ...customProps }
	const container = shallow(
		<Modal {...props} />,
		{ disableLifecycleMethods: lifeCycle }
	)
	return { container, props }
}


describe('Modal', () => {
	const click = jest.fn()
	const { container } = setup({ isOpen: true, onRequestHide: click })

	it('should render the component', () => {
		expect(container.exists()).toBe(true)
	})

	it('should the component has div with the required class', () => {
		expect(container.find('.modal-backdrop')).toBeTruthy()
	})

	it('should backdrop clicked once', () => {
		const instance = container.instance()
		jest.spyOn(instance, 'handleAreaClick')
		container.instance().forceUpdate()
		container.update()
		container.find('.modal-backdrop').simulate(
			'click',
			{
				target: {
					classList: {
						contains:
							jest.fn(() => true)
					}
				}
			}
		)
		expect(click).toHaveBeenCalled()
		click.mockReset()
	})

	it('should backdrop clicked return none', () => {
		const instance = container.instance()
		jest.spyOn(instance, 'handleAreaClick')
		container.instance().forceUpdate()
		container.update()
		container.find('.modal-backdrop').simulate(
			'click',
			{
				target: {
					classList: {
						contains:
							jest.fn(() => false)
					}
				}
			}
		)
		expect(click).not.toHaveBeenCalled()
	})
	it('should return null', () => {
		const wrapper = shallow(<Modal isOpen={false} />)
		expect(wrapper.type()).toEqual(null)
	})
})
