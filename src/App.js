import logo from './logo.svg';
import './App.css';
import React , { useState } from 'react' ;

const CHAMPIONS_LOL = [
  {
    role: "adc",
    name: "vayne",
    img: "https://avatarfiles.alphacoders.com/291/thumb-1920-291911.jpg",
  },
  {
    role: "top",
    name: "sett",
    img: "https://avatarfiles.alphacoders.com/242/thumb-1920-242511.jpg",
  },
  {
    role: "jungler",
    name: "shaco",
    img: "https://avatarfiles.alphacoders.com/199/thumb-1920-199381.jpg",
  },
  {
    role: "mid",
    name: "zed",
    img: "https://avatarfiles.alphacoders.com/161/thumb-1920-161158.jpg",
  },
]

function App() {
  const [champions, setChampions] =  useState(CHAMPIONS_LOL)

  const deleteChampionByName = (name) => {
    const filteredChampions = champions.filter((champion) => champion.name !== name)
    return setChampions(filteredChampions);
  }

  const reset = () => {
    return setChampions(CHAMPIONS_LOL);
  }
  
  return (
    <div className="App">   
      <button style={{ backgroundColor: "blue" }} onClick={reset}>reset</button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {champions.map((champion, index) => {
          return(
            <div
              key={champion.name}
              style={{
                width: "calc((100% / 3) - 20px)",
                margin: "10px",
              }}
            >

              <img src={champion.img} style={{ width: "100%" }}/>
              <div>
                {champion.name}
              </div>
              <div>{champion.role}</div>
              <button 
                style={{ backgroundColor: "red" }}
                onClick={() => deleteChampionByName(champion.name)}
              >
                supprimez
              </button>
            </div>
          )
        })}  
      </div>
 
    </div>
  );
}

export default App;
