import { useEffect, useState } from "react";
import { extractId } from "../helpers/extractId";
import peopleServices from "../Services/peopleServices";

export const useFetchPilot = (item) => {
    const getId = () => {
        const ids = item?.pilots.map((pilot) => extractId(pilot))
        return ids;
    }
    const [person, setPerson] = useState();
    const [loadingActor, setLoading] = useState(true);
    const [error, setError] = useState(null)  
    
    const getPilot = async() => {
        try {
            setLoading(true)
            const actor = await Promise.all(getId().map((id)=> peopleServices.getPerson(id)))
            setPerson(actor)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() =>{
        getPilot()
    },[item])

    return {
        person,
        loadingActor,
        error
    }
}