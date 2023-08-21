import React from 'react'

type Params={
    params:{
        id:string,
    }
}

export default function Product({params:{id}}:Params) {
  return (
    <>
      {id}
    </>
  )
}
