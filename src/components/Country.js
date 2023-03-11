/*A React component that fetches and displays country information*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Country = () => {

  // Initialize the state for storing country information
  const [country, setCountry] = useState([]);

  // Fetches country information on component mount and updates the state
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/capital/ottawa")
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h4>Country Details</h4>
      <Card bg="danger" text="white">
        <Card.Body>
          <Card.Title>{country[0]?.name}</Card.Title>
          <Card.Text>Capital: {country[0]?.capital}</Card.Text>
          <Card.Text>Population: {country[0]?.population}</Card.Text>
          <Card.Text>Region: {country[0]?.region}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Country;
