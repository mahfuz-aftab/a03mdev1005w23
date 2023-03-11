import React from 'react';
import Newsfeed from '../components/Newsfeed';
import Country from '../components/Country';
import Stock from '../components/Stock';


const Api = () => {
  return (
    <div className='container'>
      <h1>API</h1>
      <hr></hr>
      <div className="row">
        <div className='col-md-5'>
          <Newsfeed />
        </div>
        <div className='col-md-5'>
          <Stock />
        </div>

        <div className='col-md-2'>
          <Country />
        </div>
      </div>
    </div>

  );
};

export default Api;