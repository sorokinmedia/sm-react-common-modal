import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

const styles = {
	main: {
		zIndex: '9999'
	},
	top: {
		top: 'unset',
		transform: 'unset',
	}
}
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
						<div
							className={'modal-dialog modal-dialog-open ' + this.props.size}
							style={this.props.top ? styles.top : styles.main}
						>
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
	children: PropTypes.node,
	size: PropTypes.string,
	top: PropTypes.bool
}
