import React from 'react'

const TicketTable = ({ ticket }) => {
  return (
    <div className='overflow-x-auto max-w-sm md:max-w-3xl lg:max-w-7xl mx-12'>
      <table className='table-auto text-center'>
        <thead>
          <tr>
            <th className='border px-6 py-2'>ID</th>
            <th className='border px-6 py-2'>Ticket Date</th>
            <th className='border px-6 py-2'>Adults</th>
            <th className='border px-6 py-2'>Children</th>
            <th className='border px-6 py-2'>Status</th>
            <th className='border px-6 py-2'>Created At</th>
            <th className='border px-6 py-2'>Updated At</th>
            <th className='border px-6 py-2'>Ticket Code</th>
            <th className='border px-6 py-2'>Price</th>
            <th className='border px-6 py-2'>Paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-6 py-2'>{ticket.id}</td>
            <td className='border px-6 py-2'>{ticket.ticket_date}</td>
            <td className='border px-6 py-2'>{ticket.number_of_adults}</td>
            <td className='border px-6 py-2'>{ticket.number_of_children}</td>
            <td className='border px-6 py-2'>{ticket.status}</td>
            <td className='border px-6 py-2'>{ticket.created_at}</td>
            <td className='border px-6 py-2'>{ticket.updated_at}</td>
            <td className='border px-6 py-2'>{ticket.ticket_code}</td>
            <td className='border px-6 py-2'>{ticket.price}</td>
            <td className='border px-6 py-2'>{ticket.paid ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TicketTable
