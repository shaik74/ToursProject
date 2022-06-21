import React, { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import Tours from './Components/Tours';
import './App.css';

const url = 'https://course-api.com/react-tours-project/';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([
    //{
    //id: 1,
    //name: 'john',
    //info: 'lorem lopersm',
    //image: 'url',
    //price: 2000,
    //},
  ]);

  let fetchTours = async () => {
    // setIsLoading(true);
    try {
      const tours = await tours(url);
      const response = await response.json();
      console.log(tours);
      setIsLoading(true);
      setTours(tours);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}
