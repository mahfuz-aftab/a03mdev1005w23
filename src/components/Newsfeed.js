/*A React component that fetches and displays latest news*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const Newsfeed = () => {
  // Initialize the state for storing news
  const [articles, setArticles] = useState([]);

  // Fetches news on component mount and updates the state
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3b6fe86728144dc8a4c1d96c09f5e946')
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h4>Newsfeed</h4>
      {articles.map(article => (
        <Card key={article.url} className="mb-3">
          <Card.Img variant="top" src={article.urlToImage} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
            <Button variant="primary" href={article.url} target="_blank" rel="noopener noreferrer">Read More</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Newsfeed;
