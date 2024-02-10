interface ModalProps {
    isShowModal: boolean;
    onClose: () => void;
  }
  
const Modal = ({ isShowModal, onClose }:ModalProps) => {
    if (!isShowModal) return null;
    
    return (
      <div className="backdrop-blur absolute top-0 left-0 h-full w-full flex justify-center items-center p-10 transition-all ease-in-out">
        <div className="bg-white p-4 rounded w-[80%] h-[80%] shadow-lg">
          Modal Content
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default Modal;