import React from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader'
import { extractId } from '../helpers/extractId';
import useFetchStarships from '../hooks/useFetchStarships';
import './Starships.css'

const Starships = () => {
  const { starships, loading, handlePage, backToTop, next} = useFetchStarships()
  const navigate = useNavigate(); 
 console.log(starships)

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
          <li className="list_item" key={name} onClick={() => handleClick(url)}>
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
      {!next ? (
        <button type="button" className="view_button" onClick={backToTop} >
                  BACK TO TOP
        </button>
      ) : null}
    </div>
  )
}

export default Starships
