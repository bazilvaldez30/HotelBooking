'use client'

import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import BackButton from '../components/BackButton'
import Scanner from '../components/Scanner'
import ReservationTable from '../components/ReservationTable'
import { notification } from 'antd'
import { FaPaperPlane } from 'react-icons/fa'
import LogoImage from '../components/LogoImage'

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
    try {
      const response = await fetch(
        `https://dog.silverconcha-beta.c66.me/api/v1/reservations/${searchValue}`
      )

      console.log(response)

      if (!response.ok) {
        notification['error']({
          placement: 'top',
          message: 'No ticket found',
        })
        throw new Error('Failed to fetch ticket data')
      }

      const json = await response.json()
      setReservation(json)
    } catch (error) {
      console.error('Error fetching reservation data:', error)
    }
  }

  return (
    <section className='flex flex-col min-h-screen items-center justify-center p-24 md:pt-0 border-4 space-y-16'>
      <LogoImage />
      {!reservation && (
        <div className='md:mx-auto px-12 md:px-0 space-y-5 w-[450px]'>
          <BackButton />
          <TitleHeader>Hotel scan</TitleHeader>
          <Scanner
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <button
            disabled={!searchValue}
            onClick={handleSubmit}
            className='w-full bg-blue-600 hover:bg-blue-700 py-4 text-white font-semibold text-xl rounded-md disabled:bg-gray-600 disabled:opacity-80 disabled:cursor-not-allowed flex justify-center items-center gap-2 group'
          >
            Submit
            <FaPaperPlane className='group-hover:-translate-y-1 group-hover:translate-x-1' />
          </button>
        </div>
      )}
      {reservation && (
        <ReservationTable
          reservation={reservation}
          setReservation={setReservation}
          searchValue={searchValue}
        />
      )}
    </section>
  )
}
