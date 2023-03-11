import React from 'react';
import Calculator from '../components/Calculator';
import Checklist from '../components/Checklist';


function Tools() {
  return (
    <div className="container">
      <h1>Tools</h1>
      <hr></hr>

      <div className="row">
        <div className="col-md-6">
          <Checklist />
        </div>
        <div className="col-md-6">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default Tools;
