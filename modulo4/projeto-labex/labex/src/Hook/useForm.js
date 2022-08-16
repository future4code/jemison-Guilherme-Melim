import {useState} from 'react'

export function useForm (inicio){
    const [form, setForm] = useState({inicio})
    
    const onChange = (e)=>{
        const {name, value} =e.target
        setForm({...form,[name]:value})
    }
    return[form, onChange]
}