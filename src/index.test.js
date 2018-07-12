import * as exports from './index';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalClose from './ModalClose';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';

describe('expots', () => {
	it('should exports components', () => {
		expect(exports).toEqual(expect.objectContaining({
			Modal, ModalBody, ModalClose, ModalHeader, ModalTitle
		}))
	});
});
