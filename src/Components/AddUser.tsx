interface ModalButtonProps {
    setShowModal: (show: boolean) => void;
}
const AddUser = ({ setShowModal }: ModalButtonProps) => {
  return (
    <div>
      <button
        className="bg-gray-900 py-2 px-4 text-white rounded"
        onClick={() => setShowModal(true)}
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;
