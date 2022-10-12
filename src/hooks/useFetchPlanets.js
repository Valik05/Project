import { useEffect } from 'react'
import { useState } from 'react'
import { planetServices } from '../Services/planetsServices'

export const useFetchPlanets = (search) => {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [count, setCount] = useState()
  const [page, setPage] = useState(1)

  const getPlanets = async () => {
    try {
      const planets = await planetServices.getPlanets(page, search)
      setPlanets(planets?.results)
      setLoading(false)
      setCount(planets.count)
    } catch (error) {
      setError(error)
    }
  }

  const pagesNumbers = () => {
    return Array.from(
      { length: Math.ceil(count / planets.length) },
      (_, i) => i + 1
    )
  }

  const setPageNumber = (number) => {
    setPage(number)
  }
  useEffect(() => {
    getPlanets()
  }, [page, search])

  return {
    planets,
    page,
    loading,
    totalPages: pagesNumbers(),
    error,
    setPageNumber,
  }
}
