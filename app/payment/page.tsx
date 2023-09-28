'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function page() {
    const searchParams = useSearchParams();
    const reference = searchParams.get('reference')
  return (
    <>
      Reference Number : {reference}
    </>
  )
}
