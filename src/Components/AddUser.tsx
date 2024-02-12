import { AddUserButtonProps } from "../Interfaces/Interfaces";


const AddUser = ({ setIsShowModal }: AddUserButtonProps) => {
  return (
    <div className="w-full block">
      <button
        className="bg-gray-900 py-2 px-4 text-white rounded block w-full"
        onClick={() => setIsShowModal(true)}
      >
        Add User
      </button>
    </div>
  );
};

export default AddUser;
