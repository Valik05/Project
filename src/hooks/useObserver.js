import { useEffect, useRef } from "react";

export const useObserver = (lastElement,canLoad, loading, callback) =>{
    const observer = useRef()
    useEffect(() =>{
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        const cb = (entries) =>{
            if(entries[0].isIntersecting && canLoad){
                 callback()
            }
        }
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(lastElement.current)
      },[loading])
}