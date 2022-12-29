import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);
  let checked = user.status === "Active" ? "true" : "";
  let unchecked = user.status === "Inactive" ? "true" : "";
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        pattern="^[A-Za-z0-9]{3,16}$"
        onChange={handleInputChange}
        class="form-control"
        placeholder="Name"
        required
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        onChange={handleInputChange}
        class="form-control"
        placeholder="Email"
        required
      />
      <label for="Contact">Contact:</label>
      <input
        type="text"
        name="contact"
        pattern="^[0-9]{10,13}$"
        value={user.contact}
        onChange={handleInputChange}
        className="form-control"
        placeholder="Contact"
        required
      />
      <br />
      <label htmlFor="Email">Status:</label>
      <div className="form-check">
        <label className="form-check-label">
          <input
            type="radio"
            className="form-check-input"
            name="status"
            value="Active"
            onChange={handleInputChange}
            checked={checked}
          />
          Active
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input
            type="radio"
            className="form-check-input"
            name="status"
            value="Inactive"
            onChange={handleInputChange}
            checked={unchecked}
          />
          Inactive
        </label>
        <br/>
        <br/>
        <div className="dropdown">
        <label>Skills: 
        <select name="skills" onChange={handleInputChange} value={user.skills}>
          <option value="Not Selected" disabled>Select</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>
        </label>
        </div>
      </div>
      <br />
      <button className="button btn btn-primary">Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button btn btn-secondary"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
