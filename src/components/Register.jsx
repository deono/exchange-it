import React from "react";
import { useInputChange } from "../utilities/useInputChange";

const Register = () => {
  const [input, handleInputChange] = useInputChange();

  console.log("input: ", input);

  return (
    <div className="container form-container">
      <h1 className="d-1 text-warning text-center">Register</h1>
      <form>
        <div className="form-group">
          <label htmlFor="first-name" hidden>
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="first-name"
            id="first-name"
            placeholder="Enter first name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name" hidden>
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="last-name"
            id="last-name"
            placeholder="Enter last name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" hidden>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter email"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-1" hidden>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password-1"
            id="password-1"
            placeholder="Enter password"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password-2" hidden>
            Repeat Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password-2"
            id="password-2"
            placeholder="Repeat password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
