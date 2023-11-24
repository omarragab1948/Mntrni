import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/router'

const Table = ({ data, rows, columns }) => {
  const [selectedRows, setSelectedRows] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = rows
  const router = useRouter()

  const handleCheckboxChange = id => {
    const newSelectedRows = selectedRows.includes(id)
      ? selectedRows.filter(rowId => rowId !== id)
      : [...selectedRows, id]
    setSelectedRows(newSelectedRows)
  }

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow)

  const isAllRowsSelected = selectedRows.length === currentRows.length

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1)
  }

  const handleRoute = id => {
    router.push(`/spaces/meetings/meetinginfo/${id}`)
  }

  return (
    <Grid xs={12} lg={columns} sx={{ overflowX: 'auto' }}>
      <Box
        style={{
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
          padding: '10px',
          borderRadius: '10px'
        }}
      >
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '8px', textAlign: 'left' }}>
                <input
                  type='checkbox'
                  onChange={() => setSelectedRows(isAllRowsSelected ? [] : currentRows.map(row => row.id))}
                  checked={isAllRowsSelected}
                />
              </th>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '14px', color: '#000', fontWeight: '600' }}>
                NAME
              </th>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '14px', color: '#000', fontWeight: '600' }}>
                STATUS
              </th>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '14px', color: '#000', fontWeight: '600' }}>
                STARTS IN
              </th>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '14px', color: '#000', fontWeight: '600' }}>
                PARTICIPANTS
              </th>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '14px', color: '#000', fontWeight: '600' }}>
                date
              </th>
              <th style={{ padding: '8px', textAlign: 'left', fontSize: '14px', color: '#000', fontWeight: '600' }}>
                PROGRESS
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map(row => (
              <tr
                className='hover-row'
                key={row.id}
                style={{
                  borderTop: '1px solid #ddd',
                  borderBottom: '1px solid #ddd',
                  cursor: 'pointer',
                  transition: '200ms'
                }}
                onClick={() => handleRoute(row.id)}
              >
                <td style={{ padding: '8px', textAlign: 'left' }}>
                  <input
                    type='checkbox'
                    onChange={() => handleCheckboxChange(row.id)}
                    checked={selectedRows.includes(row.id)}
                  />
                </td>
                <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}>
                  <h3
                    style={{
                      width: '46px',
                      height: '46px',
                      backgroundColor: '#DEFFE1',
                      fontSize: '24px',
                      borderRadius: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {row.name.slice(0, 1)}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5px' }}>
                    <h3 style={{ color: '#00061F', fontSize: '18px', fontWeight: '700', margin: '0' }}>{row.name}</h3>
                    <h3 style={{ color: '#6F7885', fontSize: '15px', fontWeight: '400', margin: '0' }}>
                      {row.name}.com
                    </h3>
                  </div>
                </td>
                <td
                  style={{ padding: '8px', textAlign: 'left', color: '#6F7885', fontSize: '18px', fontWeight: '400' }}
                >
                  {row.status}
                </td>
                <td
                  style={{ padding: '8px', textAlign: 'left', color: '#005B99', fontSize: '14px', fontWeight: '700' }}
                >
                  {row.startsIn}
                </td>
                <td style={{ textAlign: 'left' }}>{row.participants}</td>
                <td
                  style={{ padding: '8px', textAlign: 'left', color: '#6F7885', fontSize: '16px', fontWeight: '500' }}
                >
                  {row.date}
                </td>
                <td style={{ padding: '8px', textAlign: 'left' }}>{row.progress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
      <div style={{ textAlign: 'center', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={{
            boxShadow: '0px 6px 20px rgba(144, 144, 144, 0.20)',
            border: 'none',
            borderRadius: '100%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <KeyboardArrowLeftIcon />
        </button>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / rowsPerPage)}
          onPageChange={handlePageChange}
        />
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
          style={{
            boxShadow: '0px 6px 20px rgba(144, 144, 144, 0.20)',
            border: 'none',
            borderRadius: '100%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </Grid>
  )
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0 10px' }}>
      {pageNumbers.map(number => (
        <span
          key={number}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            margin: '2px',
            cursor: 'pointer',
            backgroundColor: currentPage === number ? '#765DA5' : '',
            color: currentPage === number ? '#ffffff' : '#000000',
            borderRadius: '100%'
          }}
          onClick={() => onPageChange(number)}
        >
          {number}
        </span>
      ))}
    </div>
  )
}

export default Table
