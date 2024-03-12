import Link from 'next/link'
import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { convertDate } from '../lib/utils'
import { notification } from 'antd'

export default function ReservationTable({
  reservation,
  setReservation,
  searchValue,
}) {
  const handleChangeStatus = async (e) => {
    try {
      const status = e.target.value
      const response = await fetch(
        `https://dog.silverconcha-beta.c66.me/api/v1/reservations/${searchValue}`,
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
      setReservation(json.reservation)
      notification['success']({
        placement: 'top',
        message: 'Status updated successfully',
      })
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const handleBack = () => {
    setReservation(null)
  }

  return (
    <section className='mx-12'>
      <button
        onClick={handleBack}
        className='text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex w-fit items-center me-2 mb-2 gap-2 group'
      >
        <MdKeyboardBackspace className='w-7 h-7 group-hover:-translate-x-2' />
        <span className='group-hover:translate-x-1'> Hotel</span>
      </button>
      <div className='overflow-x-auto w-[550px] mt-5'>
        <div className='p-4 bg-white rounded-lg md:p-8 '>
          <dl className='grid max-w-screen-xl gap-8 p-4 mx-auto text-gray-900 grid-cols-2 '>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>{reservation.id}</dt>
              <dd className='text-gray-500'>ID</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {reservation.reservation_code}
              </dt>
              <dd className='text-gray-500'>Reservation Code</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {' '}
                {reservation.start_date}
              </dt>
              <dd className='text-gray-500'>Start Date</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {' '}
                {reservation.end_date}
              </dt>
              <dd className='text-gray-500'>End Date</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {reservation?.asset?.name}
              </dt>
              <dd className='text-gray-500'>Asset Name</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {reservation.price}
              </dt>
              <dd className='text-gray-500'>Price</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold capitalize'>
                {reservation.status}
              </dt>
              <dd className='text-gray-500'>Status</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {convertDate(reservation.created_at)}
              </dt>
              <dd className='text-gray-500'>Created At</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {convertDate(reservation.updated_at)}
              </dt>
              <dd className='text-gray-500'>Updated At</dd>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <dt className='mb-2 text-xl font-extrabold'>
                {reservation.paid ? 'Yes' : 'No'}
              </dt>
              <dd className='text-gray-500'>Paid</dd>
            </div>
          </dl>
        </div>
      </div>
      {reservation.status === 'confirmed' && (
        <div className='flex  justify-center items-center mt-12 gap-8'>
          <button
            onClick={(e) => handleChangeStatus(e)}
            value='completed'
            className='px-9 py-2 md:w-auto bg-green-500 hover:bg-green-600 text-white rounded-md hover:scale-105'
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
