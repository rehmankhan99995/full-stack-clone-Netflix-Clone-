import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {
  const [apiData,setApiData]=useState([]);
  const cardsRef=useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjAxYTAxMjUxZGZiMzE1YTgwNTE4MjA0ZWNmZjU5MCIsIm5iZiI6MTczMzk5MDAzOC43NTIsInN1YiI6IjY3NWE5Njk2OWFlNTI2ZDUwOGE5Y2EwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WHbXo6dARqwifv3nji1VZ0qYu6X8MNnsEn081nTVeno'
    }
  };
  
 
const handlewheel=(event)=>{
event.preventDefault();
cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  
  cardsRef.current.addEventListener('wheel',handlewheel)
},[])

  
  
  
  return (
    <div className='title-cards'>
      <h2>{title?title:"popular on Netflix"} </h2>
    <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index)=>{

     
     return <Link to={`/player/${card.id}`} className="card" key={index}>
      <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
     <p>{card.original_title}</p>
     </Link>
     })}
    </div>
    </div>
  )
}

export default TitleCards
