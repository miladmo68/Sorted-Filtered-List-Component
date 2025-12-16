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

  const filteredUser = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="
  flex flex-col items-center gap-4
  bg-sky-200
  py-8
  rounded-2xl
  shadow-md
"
    >
      <h1
        className="
    text-4xl
    font-bold
    text-sky-900
    tracking-tight
  "
      >
        List
      </h1>

      <Search search={search} setSearch={setSearch} />
      <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
      {filteredUser.length > 0 ? (
        filteredUser.map((user) => (
          <p key={user.id}>
            {user.name} - {user.age}
          </p>
        ))
      ) : (
        <p>Not it the List...</p>
      )}
    </div>
  );
}

export default App;
