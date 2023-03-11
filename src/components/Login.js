/*A React component that implements user login functionality*/

import firebase from "../firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  // Initialize the state for storing user email, password and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // Handles the login button click event and logs the user in
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Logged in successfully
        const user = userCredential.user;
        console.log(user);
        history.push("/"); // Navigate to home page
      })
      .catch((error) => {
        // An error occurred
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div>
      <h3>Login</h3>
      <hr></hr>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" class="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
