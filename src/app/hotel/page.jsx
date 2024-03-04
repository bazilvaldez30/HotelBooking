'use client'

import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import BackButton from '../components/BackButton'
import Scanner from '../components/Scanner'
import ReservationTable from '../components/ReservationTable'

const dummyReservationData = {
  id: 1,
  reservation_code: 'HT-0001',
  start_date: '2024-03-30',
  end_date: '2024-04-09',
  asset_id: 1,
  created_at: '2024-02-29T11:24:21.756Z',
  updated_at: '2024-03-01T11:44:05.904Z',
  price: '38000.0',
  status: 'confirmed',
  paid: false,
  asset: {
    id: 1,
    name: 'Dagupan Suite',
    asset_code: 'DGP-SU',
    price: 3800.0,
    created_at: '2024-02-29T11:24:21.708Z',
    updated_at: '2024-02-29T11:24:21.708Z',
    description: 'Luxurious suite with modern amenities.',
  },
}

export default function Page() {
  const [searchValue, setSearchValue] = useState('')
  const [reservation, setReservation] = useState(null)

  const handleSubmit = async () => {
    /*   const response = await fetch(
      `http://localhost:3000/api/v1/reservations/${searchValue}`
    )
    const json = await response.json() */
    setReservation(dummyReservationData)
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
      {reservation && <ReservationTable reservation={reservation} />}
    </section>
  )
}
