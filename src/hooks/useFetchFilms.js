import { useEffect, useState } from "react";
import { extractId } from "../helpers/extractId";
import filmsServices from "../Services/filmsServices";

export const useFetchFilms = (item) => {
    const getId = ()=> {
        const ids = item?.films.map((film) => extractId(film))
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
    },[item])

    return {
        films,
        loadingFilms,
        error
    }
}