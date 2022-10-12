import { useEffect, useState } from 'react'
import { planetServices } from '../Services/planetsServices'

export const useFetchPlanet = (id) => {
  const [planet, setPerson] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  

  const getPlanet = async () => {
    try {
      setLoading(true)
      const planet = await planetServices.getPlanet(id)
      setPerson(planet)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getPlanet()
  }, [id])

  return {
    planet,
    loading,
    error,
  }
}
