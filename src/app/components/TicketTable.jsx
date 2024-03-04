import Link from 'next/link'
import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'

const TicketTable = ({ ticket }) => {
  return (
    <section className='mx-12'>
      <Link
        href={'/'}
        className='flex gap-2 items-center hover:bg-blue-200 w-fit py-2 px-2 pe-4 text-lg mb-5'
      >
        <MdKeyboardBackspace className='w-7 h-7' />
        Pool
      </Link>
      <div className='overflow-x-auto max-w-sm md:max-w-3xl lg:max-w-7xl '>
        <table className='table-auto text-center'>
          <thead>
            <tr>
              <th className='border-2 px-6 py-2'>ID</th>
              <th className='border-2 px-6 py-2'>Ticket Date</th>
              <th className='border-2 px-6 py-2'>Adults</th>
              <th className='border-2 px-6 py-2'>Children</th>
              <th className='border-2 px-6 py-2'>Status</th>
              <th className='border-2 px-6 py-2'>Created At</th>
              <th className='border-2 px-6 py-2'>Updated At</th>
              <th className='border-2 px-6 py-2'>Ticket Code</th>
              <th className='border-2 px-6 py-2'>Price</th>
              <th className='border-2 px-6 py-2'>Paid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-2 px-6 py-2'>{ticket.id}</td>
              <td className='border-2 px-6 py-2'>{ticket.ticket_date}</td>
              <td className='border-2 px-6 py-2'>{ticket.number_of_adults}</td>
              <td className='border-2 px-6 py-2'>
                {ticket.number_of_children}
              </td>
              <td className='border-2 px-6 py-2'>{ticket.status}</td>
              <td className='border-2 px-6 py-2'>{ticket.created_at}</td>
              <td className='border-2 px-6 py-2'>{ticket.updated_at}</td>
              <td className='border-2 px-6 py-2'>{ticket.ticket_code}</td>
              <td className='border-2 px-6 py-2'>{ticket.price}</td>
              <td className='border-2 px-6 py-2'>
                {ticket.paid ? 'Yes' : 'No'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 md:max-w-[500px] mx-12 md:mx-auto gap-8 mt-12'>
        <button className='px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md hover:scale-105'>
          Confirm
        </button>
        <button className='px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md hover:scale-105'>
          Complete
        </button>
        <button className='px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md hover:scale-105'>
          Cancel
        </button>
      </div>
    </section>
  )
}

export default TicketTable
