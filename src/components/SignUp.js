/*A React component that implements user signup functionality*/

import firebase from "../firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  // Initialize the state for storing user email, password and error message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log(user);
        history.push("/");
      })
      .catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <hr></hr>
      <form onSubmit={handleSignUp}>
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
          </div>
        </div>

        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" class="btn btn-success">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;


