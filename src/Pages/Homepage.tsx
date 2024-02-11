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
import { getUserData } from "../utils/getUserData";

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [viewBy, setViewBy] = useState("grid");
  const [sortValue, setSortValue] = useState("");
  const [sortedData, setSortedData] = useState<User[]>([]);
  const [searchData, setSearchData] = useState("");
  const [loadMore, setLoadMore] = useState(0);
  const loaderData = useLoaderData() as User[];
 console.log(sortedData)
 

  useEffect(() => {
    //HANDLE SORT 
    const sortAndFilterData = () => {
      let filteredData = [...loaderData];

      //SEARCH BY NAME FIRST NAME
      if (searchData) {
        const lowerCaseSearchData = searchData.toLowerCase();
        filteredData = filteredData.filter(
          (user) =>
            user.firstName.toLowerCase().includes(lowerCaseSearchData) ||
            user.lastName.toLowerCase().includes(lowerCaseSearchData)
        );
      }

      //  SORT USING NAME, COMPANY, EMAIL
      switch (sortValue) {
        case "name":
          filteredData.sort((a, b) => a.firstName.localeCompare(b.firstName));
          break;
        case "email":
          filteredData.sort((a, b) => a.email.localeCompare(b.email));
          break;
        case "company":
          filteredData.sort((a, b) =>
            a.company.name.localeCompare(b.company.name)
          );
          break;
        default:
          break;
      }

      setSortedData(filteredData);
    };
//HANDLE LOAD MORE DATA
const handleLoadMore = async () => {
  if (loadMore) {
    const nextSkipCount: number = loadMore 
    const nextUserData = await getUserData({ skip: nextSkipCount });
    const newData = [...sortedData, ...nextUserData];
    setSortedData(newData);
  }
};

    sortAndFilterData();
    handleLoadMore()
  }, [loaderData, sortValue, searchData, loadMore]);

  return (
    <div>
      <SearchBar setSearchData={setSearchData} />
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

          <select
            value={sortValue}
            onChange={(event) => {
              const selectedValue = event.target.value;
              setSortValue(selectedValue);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded outline-1 focus:outline-black p-2 px-3"
          >
            <option value="">Sort..</option>
            <option value="name">Sort By Name</option>
            <option value="email">Sort By Email</option>
            <option value="company">Sort By Company</option>
          </select>
        </div>
        <div className="badge">
          {sortValue && (
            <div className="bg-gray-900 p-2 text-white relative rounded">
              <span>Sorted By: </span>
              <span className="uppercase">{sortValue}</span>
              <button
                onClick={() => {
                  setSortValue("");
                }}
                className="-mt-4 -ml-1 text-2xl absolute rounded-full bg-red-500 text-white"
              >
                <CiCircleRemove />
              </button>
            </div>
          )}
        </div>

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
        <div>
          <div className="grid grid-cols-3 gap-5 bg-gray-50 p-3">
            {sortedData.map((user) => (
              <div key={user.id}>
                <UserCard user={user} />
              </div>
            ))}
          </div>
          {/* LOAD MORE BUTTON */}
          <button
          className="bg-gray-900 py-2 px-6 text-white rounded block mx-auto mt-10"
            onClick={() => {
              setLoadMore(loadMore + 6);
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
