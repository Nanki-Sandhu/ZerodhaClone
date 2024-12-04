
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });
    const { email, password, username } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:3001/signup",
                inputValue,
                { withCredentials: true }
            );
            console.log(data);  // Log the server's response
        } catch (error) {
            console.error("Error during request:", error);  // Log the error details
        }
        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: "",
        });
    };
    return (
        <div className="formbody">
            <div className="form_container">
                <h2>Signup Account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Username</label>
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
                        Already have an account? <Link to={"/login"}>Login</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Signup;