import React from 'react'
import FancySpinner from '../FancySpinner/index'

export default ({ loading, color, children, style }) => {
	const btnStyle = style || 'success';
	return <button
		className={`btn btn-${btnStyle} btn-flat pull-right`}
		disabled={!!loading}
		style={{
			paddingLeft: loading ? '35px' : '12px',
			transition: 'padding-left 0.2s linear',
			display: 'flex',
			alignItems: 'center',
			position: 'relative',
		}}
	>
		<span style={{display: 'inline-block'}}>{children}</span>
		{loading ? <span style={{
			position: 'absolute',
			marginTop: '4px',
			left: '7px'
		}}>
			<FancySpinner size={20} color={color} />
		</span> : ''}
	</button>
}
