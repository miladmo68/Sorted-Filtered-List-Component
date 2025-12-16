import { useState } from "react";
import Search from "./components/Search";
import Sort from "./components/Sort";

function App() {
  const users = [
    { id: 1, name: "Milad", age: 27 },
    { id: 2, name: "Sara", age: 32 },
    { id: 3, name: "John", age: 21 },
  ];

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) =>
    sortOrder === "asc" ? a.age - b.age : b.age - a.age
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-lg border border-slate-200 p-6">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Users List
          </h1>

          <p className="text-sm text-slate-500 text-center">
            Search by name and sort by age
          </p>

          <div className="w-full flex flex-col items-center gap-3">
            <Search search={search} setSearch={setSearch} />
            <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
        </div>

        <div className="mt-6">
          {sortedUsers.length > 0 ? (
            <div className="space-y-3">
              {sortedUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">
                      {user.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      User ID: {user.id}
                    </span>
                  </div>

                  <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
                    {user.age} yrs
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="text-slate-700 font-medium">Not in the list…</p>
              <p className="text-sm text-slate-500 mt-1">
                Try a different name (e.g. Milad, Sara, John)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
