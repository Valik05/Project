import { useEffect, useState } from "react"
import peopleServices from "../Services/peopleServices";

export const useFetchActor = (id) => {
    const [person, setPerson] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const getPerson = async() => {
       try {
        setLoading(true)
        const person = await peopleServices.getPerson(id);
        setPerson(person)
        setLoading(false)
       } catch (error) {
        setError(error)
        setLoading(false)
       }
    }

    useEffect(() => {
        getPerson();
    },[id])

    return {
        person,
        loading,
        error
    }
}