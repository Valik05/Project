import React from 'react'
import Loader from '../Components/Loader/Loader'
import useFetchStarships from '../hooks/useFetchStarships'

const Starships = () => {
  const { starships, loading, handlePage, next } = useFetchStarships()

  if (loading) <Loader />
  console.log(starships)

  return (
    <div>
      Starships
      {next && (
        <button onClick={handlePage} style={{ color: 'white' }}>
          Clock
        </button>
      )}
      <ul style={{ color: 'white' }}>
        {starships.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Starships
