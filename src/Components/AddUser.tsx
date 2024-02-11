import { ModalButtonProps } from "../Interfaces/Interfaces";

const AddUser = ({ setShowModal }: ModalButtonProps) => {
  return (
    <div className="w-full block">
      <button
        className="bg-gray-900 py-2 px-4 text-white rounded block w-full"
        onClick={() => setShowModal(true)}
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;
