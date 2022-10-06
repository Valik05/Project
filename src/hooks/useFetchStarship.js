import { useEffect, useState } from "react";
import { extractId } from "../helpers/extractId";
import starshipsServices from "../Services/starshipsServices";

export const useFetchStarship = (person) => {
    const getId = ()=> {
        const ids = person?.starships.map((item) => extractId(item))
        return ids;
    }
    const [starships, setStarships] = useState();
    const [loadingStarships, setLoading] = useState(true);
    const [error, setError] = useState(null)  

    const getStarship = async() => {
        try {
            setLoading(true)
            const starships = await Promise.all(getId().map((id)=> starshipsServices.getStarship(id)))
            setStarships(starships)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() =>{
        getStarship()
    },[person])

    return {
        starships,
        loadingStarships,
        error
    }
}