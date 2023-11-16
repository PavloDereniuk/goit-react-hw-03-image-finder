import Modal from 'react-modal';
import { ModalContainer, ModalImage } from './ModalWindows.styled';

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0',
    padding: '0',
    width: 'auto',
    height: 'auto',
    overflow: 'hidden',
    objectFit: 'contain',
  },
};

Modal.setAppElement('#root');

export const ModalWindows = ({ isOpen, onClose, image, alt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={styles}
      contentLabel="Modal"
    >
      <ModalContainer>
        <ModalImage src={image} alt={alt} />
      </ModalContainer>
    </Modal>
  );
};
