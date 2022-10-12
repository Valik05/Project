import React from 'react'
import Loader from '../Components/Loader/Loader'
import Paginator from '../Components/Paginator/Paginator'
import { v4 as uuidv4 } from 'uuid'
import { useFetchPlanets } from '../hooks/useFetchPlanets'
import './Planets.css'
import { useContext } from 'react'
import { SearchContext } from '../context/search-context'
import { extractId } from '../helpers/extractId'
import { useNavigate } from 'react-router-dom'


const Planets = () => {
    const search = useContext(SearchContext)
    const navigate = useNavigate()
  const { planets, loading, totalPages, setPageNumber, page } = useFetchPlanets(
    search.query
  )
 
    const handleClick = (url) => {
        const id = extractId(url)
        navigate(`/planet/${id}`)
  }
  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <div className="container">
        <ul className="list" style={{ color: 'white' }}>
          {planets.map(({ name, url }) => (
            <li
              key={uuidv4()}
              className="list_item"
              onClick={() => handleClick(url)}
            >
              <h3>{name}</h3>
            </li>
          ))}
        </ul>
        <Paginator
          totalPages={totalPages}
          setPageNumber={setPageNumber}
          active={page}
        />
      </div>
    </div>
  )
}
export default Planets
