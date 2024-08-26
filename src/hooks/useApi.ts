import { useCallback, useEffect, useState } from "react"

interface Gif {
    id: string;
    title: string;
    images: {
      downsized_medium: {
        url: string;
      };
    };
  }

export const useApi = (url:string) => {
    const[data, setData]=useState<Gif[] | null>(null)
    const[loading, setLoading]=useState(false)

    const fetchApi = useCallback (async() => {
        setLoading(true)
        try {
            const res=await fetch(url)
            const datos =await res.json()
            setData(datos.data);
        } catch (error) {
            console.log(error);  
        }finally{
            setLoading(false)
        }
    }, [url])   

    useEffect(()=>{
        fetchApi()
    }, [fetchApi])

    return {loading, data}
}