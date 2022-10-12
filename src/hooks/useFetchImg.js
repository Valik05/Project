import { useEffect, useState } from "react"
import API from "../API";



export const useFetchImg = (id, item) => {
    const [img, setImg] = useState();
    const [loadingImg, setLoading] = useState(true);
    const [error, setError] = useState(null)


    const getImg = async() => {
        try{
            setLoading(true)
            const {config:{url}} = await API.get(`https://starwars-visualguide.com/assets/img/${item}/${id}.jpg`)
            setImg(url)
            setLoading(false)
        }catch(e){
            setError(e)
            setLoading(false)
        }
    }
    useEffect(() => {
        getImg()
    },[])

    return {
        img,
        error,
        loadingImg
    }
}