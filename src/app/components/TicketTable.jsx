import Link from 'next/link'
import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { convertDate } from '../lib/utils'

const TicketTable = ({ ticket, setTicket, searchValue }) => {
  const handleChangeStatus = async (e) => {
    try {
      const status = e.target.value
      console.log(status)
      const response = await fetch(
        `http://localhost:3000/api/v1/tickets/${searchValue}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status }),
        }
      )
      if (!response.ok) {
        console.log('error')
        throw new Error('Failed to update status')
      }
      const json = await response.json()
      setTicket(json)
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const handleBack = () => {
    setTicket(null)
  }

  return (
    <section className='mx-12'>
      <button
        onClick={handleBack}
        className='text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex w-fit items-center me-2 mb-2 gap-2 group'
      >
        <MdKeyboardBackspace className='w-7 h-7 group-hover:-translate-x-2' />
        <span className='group-hover:translate-x-1'> Pool</span>
      </button>
      <div className='overflow-x-auto w-[550px] mt-5'>
        <div className='p-4 bg-white rounded-lg md:p-8 '>
          <dl className='grid max-w-screen-xl gap-8 p-4 mx-auto text-gray-900 grid-cols-2 '>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>{ticket.id}</dt>
              <dd className='text-gray-500'>ID</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {ticket.ticket_code}
              </dt>
              <dd className='text-gray-500'>Ticket Code</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {ticket.ticket_date}
              </dt>
              <dd className='text-gray-500'>Ticket Date</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {ticket.number_of_adults} Adults
              </dt>
              <dd className='text-gray-500'>Adults</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {ticket.number_of_children} Children
              </dt>
              <dd className='text-gray-500'>Children</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>{ticket.price}</dt>
              <dd className='text-gray-500'>Price</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold capitalize'>
                {ticket.status}
              </dt>
              <dd className='text-gray-500'>Status</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {convertDate(ticket.created_at)}
              </dt>
              <dd className='text-gray-500'>Created At</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {convertDate(ticket.updated_at)}
              </dt>
              <dd className='text-gray-500'>Updated At</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {ticket.paid ? 'Yes' : 'No'}
              </dt>
              <dd className='text-gray-500'>Paid</dd>
            </div>
          </dl>
        </div>
      </div>

      {ticket.status === 'confirmed' && (
        <div className='flex  justify-center items-center mt-12 gap-8'>
          <button
            onClick={(e) => handleChangeStatus(e)}
            value='completed'
            className='px-9 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md hover:scale-105'
          >
            Complete
          </button>
          <button
            onClick={(e) => handleChangeStatus(e)}
            value='cancelled'
            className='px-12 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md hover:scale-105'
          >
            Cancel
          </button>
        </div>
      )}
    </section>
  )
}

export default TicketTable
