import React from "react";
import AddUser from "./components/user/AddUser";
import UsersList from "./components/user/UsersList";

function App() {
  const users = [];
  const addUser = (userInput) => {
    users.push({ name: userInput.username, age: +userInput.age });
    console.log(users);
  };
  return (
    <div>
      <AddUser getUser={addUser} />
      {users.length > 0 ? <UsersList users={users} /> : ""}
    </div>
  );
}

export default App;
