import { Modal as ModalWindows } from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ModalWindows.setAppElement('#root');

// export const Modal = () => {
//   return (
//     <ModalWindows
//       isOpen={modalIsOpen}
//       // onAfterOpen={afterOpenModal}
//       // onRequestClose={closeModal}
//       style={customStyles}
//       contentLabel="Images"
//     >
//       <button onClick={closeModal}>close</button>
//     </ModalWindows>
//   );
// };
