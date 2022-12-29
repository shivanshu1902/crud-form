import React, { useState, Fragment } from "react";
import AddUserForm from "./Forms/AddUserForm";
import EditUserForm from "./Forms/EditUserForm";
import UserTable from "./Table/UserTable";

const App = () => {
  // Data
  const usersData = [ ];

  const initialFormState = { id: null, name: "", email: "", contact: "",status:"", skills:"Not Selected" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      contact: user.contact,
      status: user.status,
      skills: user.skills
    });
  };

  return (
    <div className="container">
      <h1>Dynamic Form</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <br />
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;