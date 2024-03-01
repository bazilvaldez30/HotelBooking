'use client'

import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import BackButton from '../components/BackButton'
import Scanner from '../components/Scanner'

export default function Page() {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = async (qr) => {
    alert(`${qr}`)
  }

  return (
    <section className='flex min-h-screen items-center justify-between p-24 border-4'>
      <div className='mx-auto space-y-5 w-[450px]'>
        <BackButton />
        <TitleHeader>Pool scan</TitleHeader>
        <Scanner
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <button
          onClick={handleSubmit}
          className='w-full bg-blue-600 hover:bg-blue-700 py-4 text-white font-semibold text-xl'
        >
          Submit
        </button>
      </div>
    </section>
  )
}
