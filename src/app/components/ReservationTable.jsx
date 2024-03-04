import React from 'react'

export default function ReservationTable({ reservation, searchValue }) {
  return (
    <div className='overflow-x-auto max-w-sm md:max-w-3xl lg:max-w-7xl mx-12'>
      <table className='table-auto text-center'>
        <thead>
          <tr>
            <th className='border px-6 py-2'>ID</th>
            <th className='border px-6 py-2'>Reservation Code</th>
            <th className='border px-6 py-2'>Start Date</th>
            <th className='border px-6 py-2'>End Date</th>
            <th className='border px-6 py-2'>Asset Name</th>
            <th className='border px-6 py-2'>Price</th>
            <th className='border px-6 py-2'>Status</th>
            <th className='border px-6 py-2'>Created At</th>
            <th className='border px-6 py-2'>Updated At</th>
            <th className='border px-6 py-2'>Paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-6 py-2'>{reservation.id}</td>
            <td className='border px-6 py-2'>{reservation.reservation_code}</td>
            <td className='border px-6 py-2'>{reservation.start_date}</td>
            <td className='border px-6 py-2'>{reservation.end_date}</td>
            <td className='border px-6 py-2'>{reservation.asset.name}</td>
            <td className='border px-6 py-2'>{reservation.price}</td>
            <td className='border px-6 py-2'>{reservation.status}</td>
            <td className='border px-6 py-2'>{reservation.created_at}</td>
            <td className='border px-6 py-2'>{reservation.updated_at}</td>
            <td className='border px-6 py-2'>
              {reservation.paid ? 'Yes' : 'No'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
