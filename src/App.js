import React from 'react';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {

    try {

      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data)

    } catch (err) {

      console.log(err);

    }
    
  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <div className="container">
        <div className="row py-5">
          <h1>hello there</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
