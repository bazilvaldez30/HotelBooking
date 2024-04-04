'use client'

import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import BackButton from '../components/BackButton'
import Scanner from '../components/Scanner'
import TicketTable from '../components/TicketTable'
import { notification } from 'antd'
import { FaPaperPlane } from 'react-icons/fa'
import LogoImage from '../components/LogoImage'

export default function Page() {
  const [searchValue, setSearchValue] = useState('')
  const [ticket, setTicket] = useState(null)
  console.log(ticket)
  const handleSubmit = async () => {
    try {
      console.log(process.env.API_ENDPOINT)
      const response = await fetch(
        `https://dog.silverconcha-beta.c66.me/api/v1/tickets/${searchValue}`
      )

      if (!response.ok) {
        notification['error']({
          placement: 'top',
          message: 'No ticket found',
        })
        throw new Error('Failed to fetch ticket data')
      }

      const json = await response.json()
      setTicket(json)
    } catch (error) {
      console.error('Error fetching ticket data:', error)
    }
  }

  return (
    <section className='flex flex-col min-h-screen items-center justify-center p-24 md:pt-0 border-4 space-y-16'>
      <LogoImage />
      {!ticket && (
        <div className='mx-auto space-y-5 w-[450px]'>
          <BackButton />
          <TitleHeader>Pool scan</TitleHeader>
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
      {ticket && (
        <TicketTable
          ticket={ticket}
          setTicket={setTicket}
          searchValue={searchValue}
        />
      )}
    </section>
  )
}
