import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API";
import { Context } from "../context";
import Button from "./Button";
import { Wrapper } from "./Login.style";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      console.log(sessionId);
      setUser({ sessionId: sessionId.session_id, username });

      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <Wrapper>
      {error && <div className="error">There was an error!</div>}
      <label>Username:</label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      />
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <Button text="Login" callback={handleSubmit} />

      <hr />
      <hr />

      <h3>
        If you want to{" "}
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          SIGN UP
        </a>{" "}
        ?
      </h3>

      <h4>
        Sign Up on the{" "}
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          TMDB Website
        </a>{" "}
        . Then log in .{" "}
      </h4>
    </Wrapper>
  );
};

export default Login;

// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../API";
// import { Context } from "../context";
// import Button from "./Button";
// import { Wrapper } from "./Login.style";

// const Login = () => {
//   const [username, setusername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);

//   const [_user, setUser] = useContext(Context);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     setError(false);
//     try {
//       const requestToken = await API.getRequestToken();
//       const sessionId = await API.authenticate(
//         requestToken,
//         username,
//         password
//       );

//       setUser({
//         sessionId: sessionId.session_id,
//         username,
//       });

//       navigate("/");
//     } catch (error) {
//       setError(true);
//     }
//   };

//   const handleInput = (e) => {
//     e.preventDefault();
//     const name = e.target.name;
//     const value = e.target.value;

//     if (name === "username") setusername(value);
//     if (name === "password") setPassword(value);
//   };
//   return (
//     <Wrapper>
//       <label>username :</label>
//       <input
//         type="text"
//         value={username}
//         name="username"
//         onChange={handleInput}
//       />
//       <input
//         type="password"
//         value={password}
//         name="password"
//         onChange={handleInput}
//         id=""
//       />
//       <Button callback={handleSubmit} text="Login" />
//     </Wrapper>
//   );
// };

// export default Login;
