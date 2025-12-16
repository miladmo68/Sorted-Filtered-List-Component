const Sort = ({ setSortOrder }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Sort by age:</span>

      <button
        onClick={() => setSortOrder("asc")}
        className="
          px-3 py-2
          rounded-lg
          bg-emerald-500
          text-white
          text-sm
          hover:bg-emerald-600
          transition
        "
      >
        Younger ↑
      </button>

      <button
        onClick={() => setSortOrder("desc")}
        className="
          px-3 py-2
          rounded-lg
          bg-rose-500
          text-white
          text-sm
          hover:bg-rose-600
          transition
        "
      >
        Older ↓
      </button>
    </div>
  );
};

export default Sort;
