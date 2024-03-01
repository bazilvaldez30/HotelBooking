import Link from 'next/link'
import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'

export default function BackButton() {
  return (
    <Link
      href={'/'}
      className='flex gap-2 items-center hover:bg-blue-200 w-fit py-2 px-2 pe-4 text-lg'
    >
      <MdKeyboardBackspace className='w-7 h-7' />
      Dashboard
    </Link>
  )
}
