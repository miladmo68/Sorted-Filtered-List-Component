import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Type here..."
      className="
        w-72
        px-4 py-2
        rounded-xl
        border border-amber-400
        bg-white
        text-gray-800
        placeholder-gray-400
        shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-amber-400
        focus:border-amber-500
        transition
        duration-200
      "
    />
  );
};

export default Search;
