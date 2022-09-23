import React from 'react'
import Loader from '../Components/Loader/Loader'
import useFetchStarships from '../hooks/useFetchStarships';
import './Starships.css'

const Starships = () => {
  const { starships, loading, handlePage, backToTop, next } = useFetchStarships()

  if (loading) <Loader />
  console.log(starships)

  return (
    <div className="container">
      <ul className="list" style={{ color: 'white' }}>
        {starships.map((item) => (
          <li className="list_item" key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.model}</p>
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
