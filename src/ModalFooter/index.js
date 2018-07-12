import PropTypes from 'prop-types'
import React from 'react'

export default function ModalFooter(props) {
	return <div className="modal-footer">{props.children}</div>
}

ModalFooter.propTypes = {
	children: PropTypes.node
}
