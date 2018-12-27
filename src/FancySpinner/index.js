import React from 'react'
import './style.css'

export default ({size, color}) => {
	const colorTo = color || '#fff';
	return <div className="loader4" style={{
		width: size + 'px',
		height: size + 'px',
		borderTopColor: colorTo,
		borderLeftColor: colorTo
	}}/>
}
