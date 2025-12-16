import React from "react";

const Sort = ({ sortOrder, setSortOrder }) => {
  const base =
    "px-3 py-2 rounded-xl text-sm font-semibold transition active:scale-95 shadow-sm";

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-slate-700">Sort by age:</span>

      <button
        type="button"
        onClick={() => setSortOrder("asc")}
        className={`${base} ${
          sortOrder === "asc"
            ? "bg-emerald-600 text-white"
            : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
        }`}
      >
        Younger ↑
      </button>

      <button
        type="button"
        onClick={() => setSortOrder("desc")}
        className={`${base} ${
          sortOrder === "desc"
            ? "bg-rose-600 text-white"
            : "bg-rose-100 text-rose-800 hover:bg-rose-200"
        }`}
      >
        Older ↓
      </button>
    </div>
  );
};

export default Sort;
