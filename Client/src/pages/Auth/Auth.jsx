import React, { useState } from "react";
import "./Auth.css";
import logo from "../../img/logo.png";
import { useDispatch, useReducer } from "react-redux";
import { logIn, signUp } from "../../Actions/AuthAction";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(!false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    Password: "",
    confirmpass: "",
  });
  // const dispatch = useDispatch();
  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.Password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstName: "",
      lastName: "",
      userName: "",
      Password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      {/* Left side of the page */}
      <div className="a-left">
        <img src={logo} alt="logo" />
        <div className="Webname">
          <h1> Ken Media</h1>
          <h6>Explore the culture with everyone </h6>
        </div>
      </div>
      {/* Right side of the page */}
      <div className="a-right">
        <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstName"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastName"
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              className="infoInput"
              placeholder="User Name"
              name="userName"
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="Password"
              onChange={handleChange}
            />

            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              display: confirmPass ? "none" : "block",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
            className={confirmPass ? "" : "active"}
          >
            *Password provided didn't match
          </span>

          <div>
            <span
              style={{ fontSize: "12px" }}
              className="out"
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "New user click to Register."}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

// function SignUp() {
//   const [isSignUp, setIsSignUp] = useState(true);
//   return (
//     <div className="a-right">
//       <form action="" className="infoForm authForm">
//         <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstName"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="infoInput"
//             name="lastName"
//           />
//         </div>

//         <div>
//           <input
//             className="infoInput"
//             placeholder="User Name"
//             name="userName"
//           ></input>
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="infoInput"
//             name="Password"
//           />
//           <input
//             type="text"
//             placeholder="Confirm Password"
//             className="infoInput"
//             name="confirmpass"
//           />
//         </div>

//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account. Login!
//           </span>
//         </div>
//         <button className="button infoButton" type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }

// function LogIn() {
//   return (
//     <div className="a-right">
//       <form action="" className="infoForm authForm">
//         <h3>Log In</h3>

//         <div>
//           <input
//             className="infoInput"
//             placeholder="User Name"
//             name="userName"
//           ></input>
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="infoInput"
//             name="Password"
//           />
//         </div>

//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Don't have an account Sign up
//           </span>
//           <button className="button infoButton">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }
