import { FaThList } from "react-icons/fa";
import { useState } from "react";
import { MdGridView } from "react-icons/md";
import AddUser from "../Components/AddUser";
import Modal from "../Components/Modal";
import SearchBar from "../Components/SearchBar";
import UserCard from "../Components/UserCard";

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [viewBy, setViewBy] = useState("grid");

  return (
    <div>
      <SearchBar />
      <div className="p-2 mt-2 bg-gray-100 rounded-t flex justify-between">
        <div className="flex gap-2 items-center">
          {/* CHANGE VIEW */}
          <div>
            {viewBy == "list" ? (
              <button
                onClick={() => {
                  setViewBy("grid");
                }}
                className="hover:bg-gray-50 rounded-full p-2"
              >
                <MdGridView className="text-2xl" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setViewBy("list");
                }}
                className="hover:bg-gray-50 rounded-full p-2"
              >
                <FaThList className="text-xl" />
              </button>
            )}
          </div>

          <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded outline-1 focus:outline-black p-2 px-3">
            <option value="">Sort..</option>
            <option value="name">Sort By Name</option>
            <option value="email">Sort By Email</option>
            <option value="company">Sort By Company</option>
          </select>
        </div>
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
      {!isShowModal && (
        <div className="grid grid-cols-3 gap-5 bg-gray-50 p-3">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      )}
    </div>
  );
};

export default Homepage;
