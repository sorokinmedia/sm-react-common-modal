import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Button from './Button'

class ModalButtons extends Component {
	handleCancel = ev => {
		ev.preventDefault();
		this.props.onCancel();
	};

	render() {
		const {onCancel, loading, successText} = this.props;
		return <div
			className={'inline-btns-rtl'}
			style={{ display: 'flex', flexDirection: 'row-reverse' }}
		>
			<Button loading={loading}>
				{successText}
			</Button>
			<button className={'btn btn-default btn-flat pull-right'} onClick={this.handleCancel}>
				Отмена
			</button>
		</div>
	}
}

ModalButtons.propTypes = {
	loading: PropTypes.bool,
	onCancel: PropTypes.func.isRequired,
	successText: PropTypes.string
};

ModalButtons.defaultProps = {
	loading: false,
	successText: 'Сохранить'
};

export default connect(state => ({}), {})(ModalButtons)

