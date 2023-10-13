'use client'
import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


export default function OrderSusp() {
  return (
    <>
        <Skeleton className=" w-80 xl:w-96 min-h-[410px] h-max bg-white border border-gray-200" />
        <Skeleton className=" w-80 xl:w-96 min-h-[410px] h-max bg-white border border-gray-200" />
        <Skeleton className=" w-80 xl:w-96 min-h-[410px] h-max bg-white border border-gray-200" />
    </>
  )
}
