const SearchBar = () => {
  return (
    <div className="grid grid-cols-5 gap-5 justify-between w-full">
      <input type="text" className="col-span-4 bg-gray-100 py-2 px-3 rounded outline-none focus:outline-1 focus:outline-black" placeholder="Search.."/> 
      <button className="flex justify-center items-center px-3 py-2 bg-gray-900 text-white rounded">Search</button>
    </div>
  )
}

export default SearchBar


