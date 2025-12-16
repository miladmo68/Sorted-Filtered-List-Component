import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="w-full">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search by name…"
        className="
          w-full
          px-4 py-3
          rounded-xl
          border border-slate-200
          bg-white
          text-slate-900
          placeholder-slate-400
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-sky-400
          focus:border-sky-400
          transition
        "
      />
    </div>
  );
};

export default Search;
