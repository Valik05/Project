import { useEffect, useState } from 'react';
import peopleServices from "../Services/peopleServices";
import { useObserver } from './useObserver';

const useFetchActors = (lastElement) => {
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [next, setNext] = useState(true);
    const [page, setPage] = useState(1);
        useObserver(lastElement, next, loading, () => setPage(page + 1))
    useEffect(() => {
        ;(async () => {
          try {
            setLoading(true)
            const actors = await peopleServices.getPeople(page)
            setActors((prevState) => [...prevState, ...actors.results])
            setNext(actors.next)
            setLoading(false)
            setError(null)
          } catch (error) {
            setLoading(false)
            setError(error)
          }
        })()
      }, [page])
    
      return {
        actors,
        loading,
        error,
        next,
      }
}


export default useFetchActors;