import './App.css';
import axios from 'axios';
import CardTile from './components/CardTile/CardTile';
import Header from './components/Header/Header';
import apiUrl from "./assets/config/config"
import { useEffect, useState } from 'react';

function App() {

  const [songData,setSongData] = useState([]);

  const getData = async(endPoint)=>{

    try{
      const data = await axios.get(apiUrl+endPoint);
      return data.data;
    }
    catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getData("/albums/top");
      setSongData(data);
    }
    fetchData();
  },[])

  return (
    <div className="App">
      {/* {console.log(songData)} */}
      <Header/>
      <div className='card-holder'>
      {
        songData.map((song)=>{
          return  <CardTile song={song} key={song.id}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
