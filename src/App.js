import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import imageRickMorty from "./img/rick-morty.png"
import { useState } from 'react';
import Characters from './components/Characters';


function App() {
  const [characters, setCharacters] = useState (null)
  
  const reqApi = async () => {
  const api = await fetch('https://rickandmortyapi.com/api/character')

  const characterApi = await api.json();

console.log(characterApi)
  setCharacters(characterApi.results)
}

  return (
    <div className="App" >
      <header className="App-header" style={{background:"#90a955"}}> 
        <h1 className='title'>Rick and morty</h1>
        {characters ?(
        <Characters  characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
        <img src ={imageRickMorty} alt="Rick and morty" className='img-home'/>
        <button onClick={reqApi} className="btn-search">buscar personajes</button>
        </>
        )}
      </header>
    </div>
  );
}

export default App;