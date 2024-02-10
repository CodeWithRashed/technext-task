import { CiCircleRemove } from "react-icons/ci";
import { FaThList } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdGridView } from "react-icons/md";
import AddUser from "../Components/AddUser";
import Modal from "../Components/Modal";
import SearchBar from "../Components/SearchBar";
import UserCard from "../Components/UserCard";
import { useLoaderData } from "react-router-dom";
import { User } from "../Interfaces/Interfaces";

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [viewBy, setViewBy] = useState("grid");
  const [sortValue, setSortValue] = useState('');
  const [sortedData, setSortedData] = useState<User[]>([]);
  const loaderData = useLoaderData() as User[];

  useEffect(() => {
   
    const sortData = () => {
      const dataToSort = [...loaderData]
        switch (sortValue) {
        case 'name':
          dataToSort.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
          break;
        case 'email':
          dataToSort.sort((a, b) => (a.email > b.email ? 1 : -1));
          break;
        case 'company':
          dataToSort.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
          break;
        default:
        
          break;
      }
     setSortedData(dataToSort)
    };

    sortData();
  }, [sortValue, loaderData]);

  
  if (!sortedData) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

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

          <select onChange={(event)=> {
             const selectedValue = event.target.value;
             setSortValue(selectedValue)
          }} className="bg-gray-50 border border-gray-300 text-gray-900 rounded outline-1 focus:outline-black p-2 px-3">
            <option value="">Sort..</option>
            <option value="name">Sort By Name</option>
            <option value="email">Sort By Email</option>
            <option value="company">Sort By Company</option>
          </select>
        </div>
        <p className="badge">
          <div className="bg-gray-900 p-2 text-white relative rounded">
            <span>Sorted By: </span><span className="uppercase">{sortValue}</span><button className="-mt-4 -ml-1 text-2xl absolute rounded-full bg-red-500 text-white"><CiCircleRemove/></button>
          </div>
        </p>

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
          {sortedData.map((user) => (
            <div key={user.id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
