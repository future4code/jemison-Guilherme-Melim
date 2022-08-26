import {useEffect, useState} from 'react'
import axios from 'axios'

export function useRequestData (url){
    const [data, setData]= useState()
    const [loading, setLoading]= useState(false)
    const [erro, setErro]= useState('')

    useEffect(()=>{
        setLoading(true)
        axios.get(url, {headers:{auth: localStorage.getItem('token')}})
            .then((response)=>{
                setLoading(false)
                setData(response.data)
                
            })
            .catch((error) =>{
                setLoading(false)
                setErro(error)
            })
    }, [url])

    return [data, loading, erro]
}