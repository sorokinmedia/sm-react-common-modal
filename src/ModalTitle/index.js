import PropTypes from 'prop-types'
import React from 'react'

export default function ModalTitle(props) {
	return <h4 className="modal-title">{props.children}</h4>
}

ModalTitle.propTypes = {
	children: PropTypes.node
}
