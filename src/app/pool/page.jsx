'use client'

import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import BackButton from '../components/BackButton'
import Scanner from '../components/Scanner'
import TicketTable from '../components/TicketTable'

const dummyTicket = {
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

export default function Page() {
  const [searchValue, setSearchValue] = useState('')
  const [ticket, setTicket] = useState(null)

  const handleSubmit = async () => {
   /*  const response = await fetch(
      `http://localhost:3000/api/v1/tickets/${searchValue}`
    )
    const json = await response.json() */
    setTicket(dummyTicket)
  }

  return (
    <section className='flex flex-col min-h-screen items-center justify-center p-24 border-4 space-y-44'>
      {!ticket && (
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
      )}
      {ticket && <TicketTable ticket={ticket} />}
    </section>
  )
}
