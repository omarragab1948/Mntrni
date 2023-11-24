import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/system'
import { Input, Typography } from '@mui/material'
import AutoComplete from '../autocomplete/index'
import Link from 'next/link'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

export default function CustomizedDialogs({ popup, handleEdit }) {
  const handleClose = () => {
    handleEdit()
  }

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={popup}
        sx={{ zIndex: '10000000000' }}
      >
        <DialogTitle
          sx={{ m: 0, paddingX: 2, paddingY: '10px', color: '#00061F', fontSize: '28px', fontWeight: '600' }}
          id='customized-dialog-title'
        >
          New Goal
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 12,
            color: theme => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
              <Typography sx={{ color: '#00061F', fontSize: '18px', fontWeight: '500' }}>Goal Name:</Typography>
              <TextField id='demo-helper-text-misaligned-no-helper' label='Name' />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
              <Typography sx={{ color: '#00061F', fontSize: '18px', fontWeight: '500' }}>Goal Description:</Typography>
              <textarea style={{ minHeight: '180px', minWidth: '400px' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
              <Typography sx={{ color: '#00061F', fontSize: '18px', fontWeight: '500' }}>Start Date:</Typography>
              <Input type='date' />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
              <Typography sx={{ color: '#00061F', fontSize: '18px', fontWeight: '500' }}>End Date:</Typography>
              <Input type='date' />
            </Box>
            <Box>
              <AutoComplete />
            </Box>
            <Box sx={{ marginTop: '10px' }}>
              <Link href={''} style={{ textDecoration: 'none', color: '#765DA5' }}>
                Invite Collaboration using email
              </Link>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: '#765DA5',
              color: '#ffffff',
              ':hover': {
                backgroundColor: '#765DA5'
              }
            }}
          >
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  )
}
