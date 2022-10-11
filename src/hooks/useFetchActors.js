import { useEffect, useState } from 'react';
import peopleServices from "../Services/peopleServices";
import { useObserver } from './useObserver';

const useFetchActors = (lastElement, search) => {
    console.log(search)
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [next, setNext] = useState(true);
    const [page, setPage] = useState(1);
    const backToTop = () => {
      window.scrollTo(0, 0)
  }
        useObserver(lastElement, next, loading, () => setPage(page + 1))
    useEffect(() => {
        ;(async () => {
          try {
            setLoading(true)
            const actors = await peopleServices.getPeople(page, search);
            setActors((prevState) => [...prevState, ...actors.results])
              if(search){
                  setActors(actors.results)
                  setPage(1)
              }
            setNext(actors.next)
            setLoading(false)
            setError(null)
          } catch (error) {
            setLoading(false)
            setError(error)
          }
        })()
      }, [page, search])
    
      return {
        actors,
        loading,
        error,
        next,
        backToTop
      }
}


export default useFetchActors;