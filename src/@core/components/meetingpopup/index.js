'use client'
import dynamic from 'next/dynamic'

import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

// import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import DotsMenu from '../../components/dotsMenu/index'
import avata1 from '/public/images/58028 1 (1).svg'
import avata2 from '/public/images/58028 1 (2).svg'
import Image from 'next/image'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import { useEffect } from 'react'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))
const DynamicReactQuill = dynamic(() => import('react-quill'), { ssr: false })

export default function CustomizedDialogs({ popup, handleEdit }) {
  const handleClose = () => {
    handleEdit()
  }
  const [text, setText] = React.useState('')

  const modules = {
    toolbar: [['bold', 'italic', 'underline']]
  }

  const group = (
    <>
      <Image
        alt='Remy Sharp'
        src={avata1}
        style={{ borderRadius: '100%', position: 'relative', left: '15px', zIndex: '10' }}
      />
      <Image
        alt='Remy Sharp'
        src={avata2}
        style={{ borderRadius: '100%', position: 'relative', left: '10px', zIndex: '8' }}
      />
      <Image
        alt='Remy Sharp'
        src={avata1}
        style={{ borderRadius: '100%', position: 'relative', left: '5px', zIndex: '5' }}
      />
      <Image alt='Remy Sharp' src={avata2} style={{ borderRadius: '100%' }} />
    </>
  )
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={popup}
        sx={{ zIndex: '1000000000' }}
      >
        <DialogTitle
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            color: '#00061F',
            fontSize: '28px',
            fontWeight: '600'
          }}
          id='customized-dialog-title'
        >
          Meeting Info
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{}}>
          {isClient && (
            <Box style={{ width: '100%' }}>
              <Typography sx={{ color: '#00061F', fontSize: '18px', fontWeight: '600', marginY: '20px' }}>
                Meeting Summary
              </Typography>
              <DynamicReactQuill
                className='text-black'
                theme='snow'
                value={text}
                onChange={setText}
                modules={modules}
              />
            </Box>
          )}
          <Box sx={{ marginBottom: '30px' }}>
            <Typography sx={{ color: '#00061F', fontSize: '18px', fontWeight: '600', marginTop: '20px' }}>
              Select Goals
            </Typography>
            <Typography sx={{ color: '#6F7885', fontSize: '16px', fontWeight: '400', marginBottom: '20px' }}>
              Select goals or tasks to be discussed in the meeting.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ color: '#00061F', fontSize: '15px', fontWeight: '700' }}>Interior Design</Typography>
                <DotsMenu />
              </Box>
              <Button sx={{ border: '1px dashed  #6C72C2', borderRadius: '15px', width: '174px' }}>
                Select New Goals
              </Button>
            </Box>
          </Box>
          <Box sx={{ marginBottom: '30px' }}>
            <Typography sx={{ color: '#00061f', fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>
              Add Participants
            </Typography>
            <Box sx={{ position: 'relative', right: '15px' }}>{group}</Box>
          </Box>
          <Box>
            <Typography sx={{ color: '#00061f', fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>
              Meeting Notes
            </Typography>
            <Typography sx={{ color: '#6F7885', fontSize: '18px', fontWeight: '400', marginBottom: '20px' }}>
              Sed venenatis, sem quis hendrerit vulputate, nibh odio imperdiet eros, tincidunt ornare purus lacus
              rhoncus turpis.
            </Typography>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox />
                <Typography sx={{ color: '#000', fontSize: '16px', fontWeight: '500' }}>
                  Maecenas mattis justo
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox />
                <Typography sx={{ color: '#000', fontSize: '16px', fontWeight: '500' }}>
                  Maecenas mattis justo
                </Typography>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              backgroundColor: '#765DA5',
              color: '#fff',
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
