import React, { useEffect } from 'react'

const PREFIX: string = 'whatsapp-clone-';

export default function useLocalStorage({key, initialValue}:{key: string, initialValue: any}) {
    const prefixedKey = PREFIX + key;
    const [value, setValue] = React.useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue !== null){return  JSON.parse(jsonValue)}
        if(typeof initialValue === 'function'){ return initialValue()}
        else{return initialValue}
    })
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}   
