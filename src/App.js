import React, { useState } from "react";
import AddUser from "./components/user/AddUser";
import UsersList from "./components/user/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (userInput) => {
    setUsers((prev) => {
      return [
        ...prev,
        {
          id: Math.random().toFixed(3),
          name: userInput.username,
          age: +userInput.age,
        },
      ];
    });
  };
  return (
    <>
      <AddUser getUser={addUser} />
      {users.length > 0 ? <UsersList users={users} /> : ""}
    </>
  );
}

export default App;
