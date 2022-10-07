import { useEffect, useState } from "react";
import { extractId } from "../helpers/extractId";
import filmsServices from "../Services/filmsServices";

export const useFetchFilms = (person) => {
    const getId = ()=> {
        const ids = person?.films.map((item) => extractId(item))
        return ids;
    }
    const [films, setFilms] = useState();
    const [loadingFilms, setLoading] = useState(true);
    const [error, setError] = useState(null)  

    const getFilms = async() => {
        try {
            setLoading(true)
            const films = await Promise.all(getId().map((id)=> filmsServices.getFilms(id)))
            setFilms(films)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() =>{
        getFilms()
    },[person])

    return {
        films,
        loadingFilms,
        error
    }
}