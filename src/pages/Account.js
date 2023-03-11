import React from 'react';
import SignUp from '../components/SignUp';
import Login from '../components/Login';


function Tools() {
  return (
    <div className="container">
      <h1>Account</h1>
      <hr></hr>

      <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Tools;
