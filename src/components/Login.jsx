import React from "react";
import { useInputChange } from "../utilities/useInputChange";

const Login = () => {
  const [input, handleInputChange] = useInputChange();

  console.log("input: ", input);

  return (
    <div className="container">
      <h1 className="d-1">Login</h1>
      <form>
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

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
