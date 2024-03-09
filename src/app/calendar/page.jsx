'use client'

import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import TitleHeader from '../components/TitleHeader'
import BackButton from '../components/BackButton'
import { Modal } from 'antd'
import { FaCalendarDays } from 'react-icons/fa6'
import { convertDate } from '../lib/utils'

const dummyReservation = [
  {
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
  },
  {
    id: 2,
    reservation_code: 'HT-0002',
    start_date: '2024-03-30',
    end_date: '2024-04-09',
    asset_id: 1,
    created_at: '2024-02-29T11:24:21.756Z',
    updated_at: '2024-03-01T11:44:05.904Z',
    price: '38000.0',
    status: 'completed',
    paid: false,
    asset: {
      id: 1,
      name: 'Test Suite',
      asset_code: 'DGP-SU',
      price: 3800.0,
      created_at: '2024-02-29T11:24:21.708Z',
      updated_at: '2024-02-29T11:24:21.708Z',
      description: 'Luxurious suite with modern amenities.',
    },
  },
]

export default function Calendar() {
  const [open, setOpen] = useState(false)
  const [selectedReservation, setSelectedReservation] = useState({})
  const [reservationsData, setReservationsData] = useState([])
  const [calendarEvents, setCalendarEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      /* const response = await fetch('http://localhost:3000/api/v1/reservations')
      const reservations = await response.json() */

      const calendarEvents = dummyReservation.map((reservation) => ({
        id: reservation.id,
        title: reservation.reservation_code,
        start: reservation.start_date,
        end: reservation.end_date,
      }))

      setCalendarEvents(calendarEvents)
      setReservationsData(dummyReservation)
    }

    fetchData()
  }, [])

  const handleHover = (e) => {
    try {
      tippy(e.el, {
        content: e.event._def.title,
      })
    } catch (err) {
      console.log(err)
    }
  }

  const eventClick = (e) => {
    const publicId = e.event._def.publicId
    const ReservationInfo = reservationsData.filter((c) => {
      return c.id == publicId
    })

    setSelectedReservation(ReservationInfo[0])
    setOpen(true)
  }

  return (
    <section>
      <div className='text-center py-[60px]'>
        <div className='mb-[40px]'>
          <TitleHeader>
            <span className='flex items-center justify-center gap-3'>
              <FaCalendarDays className='w-12 h-12' /> Calendar
            </span>
          </TitleHeader>
        </div>

        <div className='mx-auto max-w-screen-lg whitespace-pre-wrap'>
          <div className='mb-5'>
            <BackButton />
          </div>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            selectable={false}
            events={calendarEvents}
            eventClick={(e) => eventClick(e)}
            eventMouseEnter={(e) => handleHover(e)}
            eventClassNames={'cursor-pointer'}
          />
        </div>
      </div>
      {selectedReservation && (
        <Modal
          title={
            <h1 className='text-2xl'>
              {selectedReservation.reservation_code} Details
            </h1>
          }
          visible={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={600}
          footer={null}
        >
          <div className='overflow-x-auto w-[550px] mt-5'>
            <div className='p-4 bg-white rounded-lg md:p-8 '>
              <dl className='grid max-w-screen-xl gap-8 p-4 mx-auto text-gray-900 grid-cols-2 '>
                <div className='flex flex-col items-center justify-center'>
                  <dt className='mb-2 text-xl font-extrabold'>
                    {selectedReservation.id}
                  </dt>
                  <dd className='text-gray-500'>ID</dd>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <dt className='mb-2 text-xl font-extrabold'>
                    {selectedReservation.reservation_code}
                  </dt>
                  <dd className='text-gray-500'>Reservation Code</dd>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <dt className='mb-2 text-xl font-extrabold'>
                    {' '}
                    {selectedReservation.start_date}
                  </dt>
                  <dd className='text-gray-500'>Start Date</dd>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <dt className='mb-2 text-xl font-extrabold'>
                    {' '}
                    {selectedReservation.end_date}
                  </dt>
                  <dd className='text-gray-500'>End Date</dd>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <dt className='mb-2 text-xl font-extrabold'>
                    {selectedReservation?.asset?.name}
                  </dt>
                  <dd className='text-gray-500'>Asset Name</dd>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <dt className='mb-2 text-xl font-extrabold'>
                    {selectedReservation.price}
                  </dt>
                  <dd className='text-gray-500'>Price</dd>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <dt className='mb-2 text-xl font-extrabold capitalize'>
                    {selectedReservation.status}
                  </dt>
                  <dd className='text-gray-500'>Status</dd>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <dt className='mb-2 text-xl font-extrabold'>
                    {convertDate(selectedReservation.created_at)}
                  </dt>
                  <dd className='text-gray-500'>Created At</dd>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <dt className='mb-2 text-xl font-extrabold'>
                    {convertDate(selectedReservation.updated_at)}
                  </dt>
                  <dd className='text-gray-500'>Updated At</dd>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <dt className='mb-2 text-xl font-extrabold'>
                    {selectedReservation.paid ? 'Yes' : 'No'}
                  </dt>
                  <dd className='text-gray-500'>Paid</dd>
                </div>
              </dl>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
