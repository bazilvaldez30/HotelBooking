import Link from 'next/link'
import TitleHeader from './components/TitleHeader'
import { FaSwimmingPool } from 'react-icons/fa'
import { FaHotel } from 'react-icons/fa6'
import { FaCalendarDays } from 'react-icons/fa6'

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-between p-24'>
      <div className='mx-auto space-y-12 text-center'>
        <TitleHeader>DASHBOARD</TitleHeader>
        <div className='grid md:grid-cols-3 gap-6 text-xl font-semibold'>
          <Link
            href='/pool'
            className='text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg py-12 px-28 text-center me-2 mb-2 flex flex-col justify-center items-center gap-1 hover:scale-105'
          >
            <FaSwimmingPool className='w-9 h-9' /> Pool
          </Link>
          <Link
            href='/hotel'
            className='text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg py-12 px-28 text-center me-2 mb-2 flex flex-col justify-center items-center gap-2 hover:scale-105 '
          >
            <FaHotel className='w-7 h-7' />
            Hotel
          </Link>
          <Link
            href='/calendar'
            className='text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg py-12 px-20 text-center me-2 mb-2 flex flex-col justify-center items-center gap-2 hover:scale-105 '
          >
            <FaCalendarDays className='w-7 h-7' /> Calendar
          </Link>
        </div>
      </div>
    </main>
  )
}
