import React, {useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader'
import { extractId } from '../helpers/extractId';
import useFetchStarships from '../hooks/useFetchStarships';
import './Starships.css'
import {SearchContext} from "../context/search-context";

const Starships = () => {
    const search = useContext(SearchContext);
    const { starships, loading, handlePage, backToTop, next} = useFetchStarships(search.query);

  const navigate = useNavigate();

const handleClick = (url) => {
    const id = extractId(url)
     navigate(`/starship/${id}`)
   }
  if (loading) {
    return <Loader/>
  }
  
 
  return (
    <div className="container">
      <ul className="list" style={{ color: 'white' }}>
        {starships.map(({name, model, url }) => (
          <li className="list_item" key={uuidv4()} onClick={() => handleClick(url)}>
            <h3>{name}</h3>
            <p>{model}</p>
          </li>
        ))}
      </ul>
      {next &&
        (!loading ? (
          <button
            type="button"
            className="view_button"
            onClick={handlePage}
          >
            VIEW MORE
          </button>
        ) : null)}
      {!next && !starships.length <= 0 ? (
        <button type="button" className="view_button" onClick={backToTop} >
                  BACK TO TOP
        </button>
      ) : 'Not Found'}
    </div>
  )
}

export default Starships
