import React, { useEffect, useState } from "react";
import './App.css';
import Article from './components/article';
import Home from './pages/Home';
import Favorites from "./pages/Favorites";

function App() {
  const [favoriteArticle, setFavoriteArticle] = useState([]);

  useEffect(()=>{
    if(favoriteArticle.length >0){
        console.log(favoriteArticle);
    }
},[favoriteArticle])

const addToFavorite = (article) =>{
    console.log("favorite 1 :", article);

    if(article){
         const favorites = [...favoriteArticle, article];
         setFavoriteArticle(favorites);
    }
    
}

const removeFavorite = (article) => {
  if(article){
    const favorites = favoriteArticle.filter(at => at.id != article.id);
    setFavoriteArticle(favorites);
  }
}
  return (
    <div className="App">
    <Home favoriteArticle={favoriteArticle} addToFavorite={addToFavorite}/>
    <Favorites favoriteArticle={favoriteArticle}  removeFavorite={removeFavorite}/>
    </div>
  );
}

export default App;
