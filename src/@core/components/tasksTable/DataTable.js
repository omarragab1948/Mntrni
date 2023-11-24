import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ffffff'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function createData(title, dueDate, status) {
  return { title, dueDate, status }
}

const rows = [
  createData('Interior Design ', 'Aug 11,2023', 'Pending'),
  createData('UI/UX Design', 'Aug 11,2023', 'Pending'),
  createData('Design', 'Aug 11,2023', 'Pending')
]

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Typography
                sx={{
                  color: '#000000',
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  display: 'flex',
                  justifyContent: 'start'
                }}
              >
                title
              </Typography>
            </StyledTableCell>
            <StyledTableCell align='right'>
              <Typography
                sx={{
                  color: '#000000',
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  display: 'flex',
                  justifyContent: 'start'
                }}
              >
                due date
              </Typography>
            </StyledTableCell>
            <StyledTableCell align='right'>
              <Typography
                sx={{
                  color: '#000000',
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  display: 'flex',
                  justifyContent: 'start'
                }}
              >
                status
              </Typography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                <Typography
                  sx={{
                    color: ' #00061F',
                    fontSize: '18px',
                    fontWeight: 700,
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    sx={{
                      width: '46px',
                      height: '46px',
                      backgroundColor: index === 0 ? '#DEFFE1' : index === 1 ? '#DAEDFE' : '#F6B0B1',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '100%',
                      marginRight: '5px'
                    }}
                  >
                    {row.title.slice(0, 1)}
                  </Box>

                  {row.title}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Typography
                  sx={{
                    color: '#6F7885',
                    fontSize: '16px',
                    fontWeight: 500,
                    display: 'flex',
                    justifyContent: 'start'
                  }}
                >
                  {row.dueDate}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Typography
                  sx={{
                    color: '#B91100',
                    fontSize: '14px',
                    fontWeight: 700,
                    backgroundColor: '#FFF6ED',
                    bordeRradius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'start',
                    width: 'fit-content'
                  }}
                >
                  {row.status}
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
