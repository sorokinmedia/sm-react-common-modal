import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

export default class Modal extends React.Component {

	handleAreaClick = (ev) => {
		if (ev.target.classList.contains('modal-backdrop')) this.props.onRequestHide()
	}

	render() {
		if (this.props.isOpen) {
			return (
				<div>
					<div
						className="modal-backdrop modal-backdrop-open"
						onClick={this.handleAreaClick}
						style={{ backgroundColor: '#00000094', overflowY: 'auto' }}
						name="modal-backdrop"
					>
						<div className="modal-dialog modal-dialog-open" style={{ zIndex: '900' }}>
							<div className="modal-content">{this.props.children}</div>
						</div>
					</div>
				</div>)
		}
		return null
	}
}

Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onRequestHide: PropTypes.func.isRequired,
	children: PropTypes.node
};
