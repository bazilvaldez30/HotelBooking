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

const reservation = [
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
      name: 'Dagupan Suite',
      asset_code: 'DGP-SU',
      price: 3800.0,
      created_at: '2024-02-29T11:24:21.708Z',
      updated_at: '2024-02-29T11:24:21.708Z',
      description: 'Luxurious suite with modern amenities.',
    },
  },
]

const testEvents = [
  {
    id: 1,
    title: 'TEST EVENT',
    start: '2024-02-27T10:00:00',
    end: '2024-02-29T12:00:00',
  },
  {
    id: 2,
    title: 'TEST 2',
    start: '2024-02-27T10:00:00',
    end: '2024-02-29T12:00:00',
  },
]

export default function Calendar() {
  const [open, setOpen] = useState(false)
  const [selectedReservation, setSelectedReservation] = useState({})
  const [reservationsData, setReservationsData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      /*  const response = await fetch('http://localhost:3000/api/v1/reservations')
      const reservation = await response.json() */
      setReservationsData(reservation)
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

  console.log(selectedReservation)

  return (
    <section>
      <div className='text-center py-[60px]'>
        <div className='mb-[40px]'>
          <TitleHeader>Calendar</TitleHeader>
        </div>

        <div className='mx-auto max-w-screen-lg whitespace-pre-wrap'>
          <div className='mb-5'>
            <BackButton />
          </div>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            selectable={false}
            events={testEvents}
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
          <div className='p-4 text-lg'>
            <p className='mb-2'>
              <strong>Reservation Code:</strong>{' '}
              {selectedReservation.reservation_code}
            </p>
            <p className='mb-2'>
              <strong>Asset Description:</strong>{' '}
              {selectedReservation?.asset?.description}
            </p>
            <p className='mb-2'>
              <strong>Start Date:</strong> {selectedReservation.start_date}
            </p>
            <p className='mb-2'>
              <strong>End Date:</strong> {selectedReservation.end_date}
            </p>
            <p className='mb-2'>
              <strong>Price:</strong> {selectedReservation.price}
            </p>
            <p className='mb-2'>
              <strong>Status:</strong> {selectedReservation.status}
            </p>
            <p className='mb-2'>
              <strong>Paid:</strong> {selectedReservation.paid ? 'Yes' : 'No'}
            </p>
            <p className='mb-2'>
              <strong>Asset Name:</strong> {selectedReservation?.asset?.name}
            </p>
            <p className='mb-2'>
              <strong>Asset Code:</strong>{' '}
              {selectedReservation?.asset?.asset_code}
            </p>
          </div>
        </Modal>
      )}
    </section>
  )
}
