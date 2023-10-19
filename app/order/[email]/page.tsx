import Order from '@/app/components/Order'
import React from 'react'
type Params ={
  params:{
    email:string
  }
}

export default  function page({params:{email}}:Params) {

  return (
    <>
      <Order email={email}/>
    </>
  )
}
