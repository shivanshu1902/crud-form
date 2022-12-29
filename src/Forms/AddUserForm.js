import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", email: "", contact: "", status: "Active", skills: "Not Selected" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!user.name || !user.email) return;

          props.addUser(user);
          setUser(initialFormState);
        }}
        className="needs-validation"
      >
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Name"
          pattern="^[A-Za-z0-9 ]{3,16}$"
          required
        />
        <label htmlFor="Email">Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Email"
          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
        />
        <label htmlFor="Contact">Contact:</label>
        <input
          type="text"
          name="contact"
          value={user.contact}
          onChange={handleInputChange}
          className="form-control"
          pattern="^[0-9]{10,13}$"
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
              checked
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
            />
            Inactive
          </label>
        </div>
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
        <br />
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddUserForm;