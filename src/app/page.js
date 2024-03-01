import Image from 'next/image'
import Link from 'next/link'
import TitleHeader from './components/TitleHeader'

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-between p-24'>
      <div className='mx-auto space-y-12 text-center'>
        <TitleHeader>DASHBOARD</TitleHeader>
        <div className='grid grid-cols-3 gap-6 text-xl font-semibold'>
          <Link
            href='/pool'
            className='bg-blue-600 hover:bg-blue-500 py-12 px-20 text-white hover:scale-105 rounded-md'
          >
            Pool
          </Link>
          <Link
            href='/hotel'
            className='bg-blue-600 hover:bg-blue-500 py-12 px-20 text-white hover:scale-105 rounded-md'
          >
            Hotel
          </Link>
          <Link
            href='/calendar'
            className='bg-blue-600 hover:bg-blue-500 py-12 px-20 text-white hover:scale-105 rounded-md'
          >
            Calendar
          </Link>
        </div>
      </div>
    </main>
  )
}
