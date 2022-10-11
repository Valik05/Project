import { useState, useEffect } from 'react'

import starshipsServices from '../Services/starshipsServices'
const useFetchStarships = (search) => {
  const [starships, setStarships] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [next, setNext] = useState(true)
  const [page, setPage] = useState(1)
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
        const starhip = await starshipsServices.getStarships(page,search)
        
        setStarships((prevState) => [...prevState, ...starhip.results])
        if(search){
          setStarships(starhip.results)
          setPage(1)
        }
        setNext(starhip.next)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    })()
  }, [page, search])

  return {
    starships,
    loading,
    error,
    handlePage,
    backToTop,
    next,
    search
  }
}

export default useFetchStarships
