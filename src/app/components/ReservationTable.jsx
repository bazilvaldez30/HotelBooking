import React from 'react'

export default function ReservationTable({
  reservation,
  setReservation,
  searchValue,
}) {
  const handleChangeStatus = async (e) => {
    try {
      const status = e.target.value
      const response = await fetch(
        `http://localhost:3000/api/v1/reservations/${searchValue}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status }),
        }
      )
      if (!response.ok) {
        throw new Error('Failed to update status')
      }
      const json = await response.json()
      setReservation(json)
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }
  return (
    <section>
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
              <td className='border px-6 py-2'>
                {reservation.reservation_code}
              </td>
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
      <div className='grid md:grid-cols-3 grid-cols-1 md:max-w-[500px] mx-12 md:mx-auto gap-8 mt-12'>
        <button
          onClick={(e) => handleChangeStatus(e)}
          value='completed'
          className='px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md hover:scale-105'
        >
          Complete
        </button>
        <button
          onClick={(e) => handleChangeStatus(e)}
          value='cancelled'
          className='px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md hover:scale-105'
        >
          Cancel
        </button>
      </div>
    </section>
  )
}
