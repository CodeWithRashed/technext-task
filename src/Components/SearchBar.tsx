const SearchBar = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      <input type="text" className="col-span-3 bg-gray-100 py-2 px-3 rounded outline-none focus:outline-1 focus:outline-black" placeholder="Search.."/>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded outline-1 focus:outline-black p-2 px-3">
        <option value="">Sort..</option>
        <option value="name">Sort By Name</option>
        <option value="email">Sort By Email</option>
        <option value="company">Sort By Company</option>
      </select>
      <button className="flex justify-center items-center px-3 py-2 bg-gray-900 text-white rounded">Search</button>
    </div>
  )
}

export default SearchBar


