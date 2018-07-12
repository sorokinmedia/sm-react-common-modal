import PropTypes from 'prop-types'
import React from 'react'

export default function ModalHeader(props) {
	return <div className="modal-header">{props.children}</div>
}

ModalHeader.propTypes = {
	children: PropTypes.node
}
