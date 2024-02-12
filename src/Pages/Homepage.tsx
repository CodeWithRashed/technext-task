import { IoGridOutline } from "react-icons/io5";
import { IoList } from "react-icons/io5";
import { useEffect, useState } from "react";
import AddUser from "../Components/AddUser";
import Modal from "../Components/Modal";
import SearchBar from "../Components/SearchBar";
import UserCard from "../Components/UserCard";
import { useLoaderData } from "react-router-dom";
import { User } from "../Interfaces/Interfaces";
import { getUserData } from "../utils/getUserData";
import UserCardListView from "../Components/UserCardListView";
import { CiCircleRemove } from "react-icons/ci";

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [viewBy, setViewBy] = useState("grid");
  const [sortValue, setSortValue] = useState("");
  const [sortedData, setSortedData] = useState<User[]>([]);
  const [searchData, setSearchData] = useState("");
  const [loadMore, setLoadMore] = useState(0);
  const loaderData = useLoaderData() as User[];

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
        const nextSkipCount: number = loadMore;
        const nextUserData = await getUserData({ skip: nextSkipCount });
        const newData = [...sortedData, ...nextUserData];
        setSortedData(newData);
      }
    };

    sortAndFilterData();
    handleLoadMore();
  }, [loaderData, sortValue, searchData, loadMore]);

  return (
    <div className="app">
      <div className={`${isShowModal && "blur-sm"}`}>
        <SearchBar setSearchData={setSearchData} />
        <div className="p-2 mt-2 bg-gray-100 rounded-t flex flex-col gap-2">
          <div className="md:grid space-y-2 md:space-y-0 md:grid-cols-10 justify-center items-center w-full">
            {/* CHANGE VIEW */}
            <div className="view-and-filter w-full md:w-1/2 flex  gap-2 md:col-span-8">
              <div >
                {viewBy == "list" ? (
                  <button
                    onClick={() => {
                      setViewBy("grid");
                    }}
                    className="hover:bg-gray-50 rounded-full p-2"
                  >
                    <IoGridOutline className="text-2xl" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setViewBy("list");
                    }}
                    className="hover:bg-gray-50 rounded-full p-2"
                  >
                    <IoList className="text-2xl" />
                  </button>
                )}
              </div>
              <select
                value={sortValue}
                onChange={(event) => {
                  const selectedValue = event.target.value;
                  setSortValue(selectedValue);
                }}
                className="w-full md:col-span-4 bg-gray-50 border border-gray-300 text-gray-900 rounded outline-1 focus:outline-black p-2 px-3"
              >
                <option value="">Sort..</option>
                <option value="name">Sort By Name</option>
                <option value="email">Sort By Email</option>
                <option value="company">Sort By Company</option>
              </select>
            </div>

            {/* ADD USER */}

            <div className="w-full md:col-span-2">
              <AddUser setShowModal={setIsShowModal} />
            </div>
          </div>
          <div className="badge flex justify-center items-center">
            {sortValue && (
              <div className="bg-gray-900 p-2 text-white relative rounded inline-block">
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
        </div>

        <div className="card-view-container">
          {/* LIST VIEW */}
          {viewBy == "list" && (
            <div className="list-view">
              <div className="bg-gray-50 p-3 flex flex-col gap-3">
                {sortedData.map((user) => (
                  <div key={user.id}>
                    <UserCardListView user={user} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GIRD VIEW */}
          {viewBy == "grid" && (
            <div className="grid-view">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-50 p-3">
                {sortedData.map((user) => (
                  <div key={user.id}>
                    <UserCard user={user} />
                  </div>
                ))}
              </div>
            </div>
          )}

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
      </div>
      <Modal isShowModal={isShowModal} sortedData={sortedData} setSortedData={setSortedData} onClose={() => setIsShowModal(false)} />
    </div>
  );
};

export default Homepage;
