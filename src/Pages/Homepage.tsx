import { useState } from "react";
import AddUser from "../Components/AddUser";
import Modal from "../Components/Modal";
import SearchBar from "../Components/SearchBar";
import UserCard from "../Components/UserCard";

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <div>
      <SearchBar />
      <div className="p-2 mt-2 bg-gray-100 rounded-t flex justify-between">
        <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded outline-1 focus:outline-black p-2 px-3">
          <option value="">Sort..</option>
          <option value="name">Sort By Name</option>
          <option value="email">Sort By Email</option>
          <option value="company">Sort By Company</option>
        </select>
        <p className="badge"></p>

        {/* ADD USER AND MODAL */}
        <div>
          <div>
            <AddUser setShowModal={setIsShowModal} />
            <Modal
              isShowModal={isShowModal}
              onClose={() => setIsShowModal(false)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 bg-gray-50 p-3">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default Homepage;
