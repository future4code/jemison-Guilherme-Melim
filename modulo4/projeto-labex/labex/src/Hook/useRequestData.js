import {useEffect, useState} from 'react'
import axios from 'axios'

export function useRequestData (url){
    const [viagem, setViagem]= useState(undefined)
    const [loading, setLoading]= useState(false)
    const [erro, setErro]= useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get(url)
            .then(response=>{
                setLoading(false)
                setViagem(response.data)
            })
            .catch(error =>{
                setLoading(false)
                setErro(error)
            })
    }, [url])

    return [viagem, loading, erro]
}