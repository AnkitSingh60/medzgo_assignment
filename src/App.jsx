import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      let res = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=random&type=video&key=AIzaSyB8ISqc9mU6E71OulGswURd51y2qjmWJHs&maxResults=5")
      let result = await res.json();
      let newResult = result.items;
      setData(newResult)
      // console.log("newResult:", newResult)
    } catch (error) {
      console.log('error:', error)

    }
  }



  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Card videos={data} />
    </>
  );
}

export default App;
