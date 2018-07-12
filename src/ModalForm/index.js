import PropTypes from 'prop-types'
import React from 'react'
import Modal from '../Modal';
import ModalBody from '../ModalBody';
import ModalClose from '../ModalClose';
import ModalHeader from '../ModalHeader';
import ModalTitle from '../ModalTitle';


function ModalForm(props) {
	return (
		<Modal
			isOpen={props.modalIsOpen}
			onRequestHide={props.closeModal}
			size={props.size}
		>
			<ModalHeader>
				<ModalClose onClick={props.closeModal} />
				<ModalTitle>{props.title}</ModalTitle>
			</ModalHeader>
			<ModalBody>
				{props.children}
			</ModalBody>
		</Modal>)
}

ModalForm.propTypes = {
	closeModal: PropTypes.func.isRequired,
	modalIsOpen: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	size: PropTypes.string,
	children: PropTypes.node
};

ModalForm.defaultProps = {
	size: ''
};

export default ModalForm
