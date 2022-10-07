import { useEffect, useState } from "react"
import starshipsServices from "../Services/starshipsServices";

export const useFetchStarsheeps = (id) => {
    const [person, setPerson] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const getStarship = async() => {
       try {
        setLoading(true)
        const person = await starshipsServices.getStarship(id);
        setPerson(person)
        setLoading(false)
       } catch (error) {
        setError(error)
        setLoading(false)
       }
    }

    useEffect(() => {
        getStarship();
    },[id])

    return {
        person,
        loading,
        error
    }
}