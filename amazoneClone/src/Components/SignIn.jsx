import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = storedUsers.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    if (!foundUser) {
      setError("Invalid email or password!");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser)); 

    if (foundUser.role === "admin") {
      navigate("/members");
    } else {
      navigate("/"); 
    }
  };
  return (
    <div>
      <img
        style={{ height: "70px", borderRadius: "6px", marginLeft: "43%" }}
        src="./image.png"
        alt="/image"
      />
      <div
        style={{
          border: "1px Solid Black",
          height: "380px",
          width: "350px",
          marginLeft: "750px",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ marginLeft: "20px", marginTop: "25px" }}>Sign in</h1>
        <h1 style={{ marginLeft: "20px", marginTop: "10px", fontSize: "15px" }}>
          Email or mobile phone number
        </h1>
        <input
          type="Email"
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}

          // placeholder="Enter Your Email"
          style={{
            marginTop: "5px",
            marginLeft: "20px",
            width: "300px",
            borderRadius: "5px",
            padding: "8px ",
          }}
        />
        <h1 style={{ marginLeft: "20px", marginTop: "10px", fontSize: "15px" }}>
          Enter Password
        </h1>

        <input type="Password"
                      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}

        style={{
          marginTop: "5px",
          marginLeft: "20px",
          width: "300px",
          borderRadius: "5px",
          padding: "8px ",
        }}
        />
        <button   onClick={handleLogin}
          style={{
            width: "300px",
            marginLeft: "20px",
            marginTop: "20px",
            borderRadius: "50px",
            border: "none",
            backgroundColor: "#ffd814",
            padding: "8px",
          }}
        >
          Continue
        </button>
        <br />
        <p style={{ marginLeft: "25px", marginTop: "15px", fontSize: "15px" }}>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <p style={{ marginLeft: "20px", marginTop: "25px", fontSize: "15px" }}>
          Buying for work?
          <br />
          <a
            href="\"
            style={{ fontSize: "15px", marginTop: "40px", color: "#007185" }}
          >
            Shop on Amazon Business
          </a>
        </p>
      </div>
      <button
        style={{
          marginLeft: "750px",
          padding: "8px",
          width: "350px",
          marginTop: "20px",
          fontSize: "15px",
          borderRadius: "50px",
        }}
      >
        Create your Amazon account{" "}
      </button>
    </div>
  );
};

export default SignIn;
