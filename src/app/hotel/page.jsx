'use client'

import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import BackButton from '../components/BackButton'
import Scanner from '../components/Scanner'
import TicketTable from '../components/TicketTable'

export default function Page() {
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = async (qr) => {
    alert(`${qr}`)
  }

  const ticket = {
    id: 11,
    ticket_date: '2024-02-29',
    number_of_adults: 3,
    number_of_children: 3,
    status: 'confirmed',
    created_at: '2024-02-28T02:29:33.465Z',
    updated_at: '2024-02-28T02:29:33.465Z',
    ticket_code: 'POOL-0005',
    price: '1140.0',
    paid: true,
  }

  return (
    <section className='flex flex-col min-h-screen items-center justify-center p-24 border-4 space-y-44'>
      <div className='md:mx-auto px-12 md:px-0 space-y-5 w-[450px]'>
        <BackButton />
        <TitleHeader>Hotel scan</TitleHeader>
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
      <TicketTable ticket={ticket} />
    </section>
  )
}
