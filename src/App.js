import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const users = [
    {
      key: "user1",
      username: "Artur",
      age: '23',
    },
  ];

  const [userList, setUserList] = useState(users);

  const userListHandler = (newUser) => {
    return setUserList((prevList) => {
      return [
        newUser,
        ...prevList
      ]
    })
  }

  const removeUser = (user) => {
    return setUserList((prevList) => {
      return prevList.filter((currentUser) => {
        return currentUser.key !== user.key;
      });
    })
  }

  return (
    <div>
      <AddUser  onAddUser = {userListHandler}/>
      <UserList users = {userList} onClickRemove = {removeUser}/>
    </div>
  );
}

export default App;
