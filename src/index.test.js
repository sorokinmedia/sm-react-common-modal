import * as exports from './index';
import Modal from '../src/Modal';
import ModalBody from '../src/ModalBody';
import ModalClose from '../src/ModalClose';
import ModalHeader from '../src/ModalHeader';
import ModalTitle from '../src/ModalTitle';

describe('exports', () => {
	it('should exports components', () => {
		expect(exports).toEqual(expect.objectContaining({
			Modal, ModalBody, ModalClose, ModalHeader, ModalTitle
		}))
	});
});
