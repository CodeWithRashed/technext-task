import SearchBar from "../Components/SearchBar";
import UserCard from "../Components/UserCard";

const Homepage = () => {
  return (
    <div>
      <SearchBar />
      <div className="p-3 my-2">Data</div>
      <div className="grid grid-cols-3 gap-5">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default Homepage;
