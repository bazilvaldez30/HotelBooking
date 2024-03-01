import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'
import { BsQrCodeScan } from 'react-icons/bs'

export default function Scanner({ handleSubmit, searchValue, setSearchValue }) {
  const [error, setError] = useState(null)
  const [isScannerOpen, setIsScannerOpen] = useState(false)

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleScan = (data) => {
    try {
      if (data) {
        const qrValue = data.text
        setSearchValue(qrValue)
        handleSubmit(qrValue)
        setIsScannerOpen(false)
        console.log(data)
      }
    } catch (error) {
      setError(error)
    }
  }

  const handleError = (err) => {
    console.error(err)
    setError(err)
  }

  const handleScanButtonClick = () => {
    setIsScannerOpen((prev) => !prev)
  }

  return (
    <div>
      <div className='flex'>
        <input
          type='text'
          value={searchValue}
          onChange={handleSearchChange}
          placeholder='Search...'
          className='mr-4 py-4 px-5 w-full md:text-xl'
        />
        <button onClick={handleScanButtonClick}>
          <BsQrCodeScan
            className={`w-9 h-9 ${isScannerOpen && 'text-green-500'}`}
          />
        </button>
      </div>
      {isScannerOpen && (
        <QrReader
          className='mt-5'
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{
            width: '100%',
          }}
        />
      )}
      {error && <p>Error: {error.message}</p>}
    </div>
  )
}
