import Link from 'next/link'
import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'

export default function BackButton() {
  return (
    <Link
      href={'/'}
      /* className='flex gap-2 items-center hover:bg-blue-200 w-fit py-2 px-2 pe-4 text-lg rounded-md' */
      className='text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex w-fit items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 gap-2 group'
    >
      <MdKeyboardBackspace className='w-7 h-7 group-hover:-translate-x-2' />
      <span className='group-hover:translate-x-1'>Dashboard</span>
    </Link>
  )
}
