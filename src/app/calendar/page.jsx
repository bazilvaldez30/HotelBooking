'use client'

import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import TitleHeader from '../components/TitleHeader'
import BackButton from '../components/BackButton'

export default function Calendar() {
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
      start: '2024-02-15T10:00:00',
      end: '2024-02-18T12:00:00',
    },
  ]

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
    alert('test')
  }

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
          />
        </div>
      </div>
    </section>
  )
}
