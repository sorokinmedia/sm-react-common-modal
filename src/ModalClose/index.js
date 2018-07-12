import PropTypes from 'prop-types'
import React from 'react'

export default function ModalClose(props) {
	return <button type="button" className="close" onClick={props.onClick}><span>×</span></button>
}

ModalClose.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
}
