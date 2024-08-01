import { Button, Card, CardContent } from '@mui/material';
import './App.css';
import News from './components/News/News';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([])
  // useEffect(() => {
  //   const url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-04-13&sortBy=publishedAt&apiKey=ff15b901c81b41b6a0dae2f96edd1087';
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setArticles(data.articles.slice(1, 21)))
  //   console.log(articles)
  // }, [])
  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-04-13&sortBy=publishedAt&apiKey=ff15b901c81b41b6a0dae2f96edd1087';
    axios(url)
      .then(response => setArticles(response.data.articles))
  }, [])


  return (
    <div>
      <h2>Headlines Number: {articles.length}</h2>
      {
        articles.map((i, index) => <News key={index} article={i}></News>)
      }
    </div>
  );
}

export default App;
