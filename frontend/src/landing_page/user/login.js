import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      }, {
        withCredentials: true, // This will send cookies with the request, necessary for sessions
      });
      // Handle the response from the server, e.g., show a success message
      console.log('Login successful', response.data);
    } catch (error) {
      // Handle error (e.g., incorrect credentials)
      console.error('Login failed', error.response.data);
    }
      // Reset the form inputs after the request
      setUsername('');
      setPassword('');
  };

  return (
    <div className="formbody">
      <div className="form_container">
        <h2>Login Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
          <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Enter your username"
                            onChange={handleOnChange}
                        />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Don't have an account? <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;