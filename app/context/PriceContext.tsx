"use client"

import { ReactNode, createContext,useContext,useState } from "react"

export const PriceContext = createContext({})

type Props ={
    children?: ReactNode
}

export const PriceProvider = ({children}:Props)=>{
    const [price,setPrice]:any = useState(1)

    

    return(
        <PriceContext.Provider value={{price,setPrice}}>
            {children}
        </PriceContext.Provider>
    )

}

export const usePrice = ()=>{
    return useContext(PriceContext)
}
