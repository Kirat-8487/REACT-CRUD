import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const adminExists = existingUsers.some(
      (u) => u.email === "harkirat0020@gmail.com"
    );

    if (!adminExists) {
      existingUsers.push({
        name: "Admin",
        email: "harkirat0020@gmail.com",
        password: "12345678",
        role: "admin",
      });
      localStorage.setItem("users", JSON.stringify(existingUsers));
    }
  }, []);

  const validateFields = () => {
    let newError = { name: "", email: "", password: "" };
    let isValid = true;

    if (!user.name.trim()) {
      newError.name = "Name is required";
      isValid = false;
    }
    if (!user.email.trim()) {
      newError.email = "Please enter an email";
      isValid = false;
    }
    if (!user.password.trim()) {
      newError.password = "Please enter a valid password";
      isValid = false;
    } else if (user.password.length < 8) {
      newError.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleRegister = () => {
    if (!validateFields()) return;

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (existingUsers.some((u) => u.email === user.email)) {
      setError((prev) => ({ ...prev, email: "Email already registered" }));
      return;
    }

    const newUser = { ...user, role: "user" };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful!");
    navigate("/signin");
  };
  return (
    <div style={{ padding: "100px 750px" }}>
      <img
        style={{ height: "80px", objectFit: "contain", paddingLeft: "70px" }}
        src="amazonein.png"
        alt="image"
      />
      <div
        style={{
          border: "1px solid black",
          height: "300px",
          width: "350px",
          padding: "20px",
          borderRadius:"6px"
        }}
      >
        <div
          className="flex justify-center items-center min-h-screen bg-gray-100"
          style={{ display: "flex" }}
        >
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
              <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                Create an account
              </p>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Full Name
                </label>
                <br />
                <input
                style={{width:"300px",padding:"8px",borderRadius:"6px"}}
                  type="text"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                {error.name && (
                  <p className="text-red-500 text-sm">{error.name}</p>
                )}
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Email Address
                </label>
                <br />
                <input
                style={{width:"300px",padding:"8px",borderRadius:"6px"}}
                  type="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                {error.email && (
                  <p className="text-red-500 text-sm">{error.email}</p>
                )}
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Password
                </label>
                <br />
                <input
                style={{width:"300px",padding:"8px",borderRadius:"6px"}}
                  type="password"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                {error.password && (
                  <p className="text-red-500 text-sm">{error.password}</p>
                )}
              </div>

              <div className="mt-6">
                <br />
                <button
                style={{width:"300px",padding:"8px",borderRadius:"6px",backgroundColor:"black",color:"white"}}
                  onClick={handleRegister}
                  disabled={!user.name || !user.email || !user.password}
                  className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50
                ${
                  user.name && user.email && user.password
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-400 cursor-not-allowed"
                }
              `}
                >
                  
                  Sign Up
                </button>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                <p className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
                  <Link to="/signin">or sign in</Link>
                </p>
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
