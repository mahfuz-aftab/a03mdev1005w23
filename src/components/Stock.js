/*A React component that fetches and displays interday IBM stock updates in interval of 05 minute*/

import React, { useState, useEffect } from "react";
import axios from "axios";

const Stock = () => {
  // Initialize the state for storing stock updates
  const [data, setData] = useState([]);

  // Fetches stock update on component mount and updates the state
  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
      )
      .then((response) => {
        setData(response.data["Time Series (5min)"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h4>IBM Stock Data</h4>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Time</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{data[key]["1. open"]}</td>
              <td>{data[key]["2. high"]}</td>
              <td>{data[key]["3. low"]}</td>
              <td>{data[key]["4. close"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
