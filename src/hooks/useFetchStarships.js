import { useState, useEffect } from 'react'

import starshipsServices from '../Services/starshipsServices'
const useFetchStarships = () => {
  const [starships, setStarships] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [next, setNext] = useState(true)
  const [page, setPage] = useState(1)
  console.log(next)
  const handlePage = () => {
    if (next) {
      setPage((prevState) => prevState + 1)
    }
    }
  const backToTop = () => {
      window.scrollTo(0, 0)
  }
  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const starhips = await starshipsServices.getStarships(page)
        setStarships((prevState) => [...prevState, ...starhips.results])
        setNext(starhips.next)
        setLoading(false)
        setError(null)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    })()
  }, [page])

  return {
    starships,
    loading,
    error,
    handlePage,
    backToTop,
    next,
  }
}

export default useFetchStarships
