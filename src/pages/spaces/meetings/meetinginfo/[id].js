'use client'

import { Box } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useContext, useState } from 'react'
import { SettingsContext } from 'src/@core/context/settingsContext'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import { Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import time from '/public/images/clock (1) 1.svg'
import Progress from 'src/@core/components/progress/index'
import avata1 from '/public/images/58028 1 (1).svg'
import avata2 from '/public/images/58028 1 (2).svg'
import MeetingTable from 'src/@core/components/meetingTable/index'
import pencil from '/public/images/pencil 17.svg'
import MeetingPopup from 'src/@core/components/meetingpopup/index'

const Index = () => {
  const [popup, setPopup] = useState(false)
  const router = useRouter()
  const meetingId = router.query.id
  const { handlePageTilte } = useContext(SettingsContext)
  useEffect(() => {
    handlePageTilte('meetings')
  }, [])

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

  const data = [
    {
      id: 1,
      title: 'Interior Design ',
      description: 'Sed venenatis, sem',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Sed venenatis',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 3,
      title: 'Design',
      description: 'Venenatis sem',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 4,
      title: 'Interior Design ',
      description: 'Sed venenatis, sem',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Sed venenatis',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 6,
      title: 'Design',
      description: 'Venenatis sem',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 7,
      title: 'Interior Design ',
      description: 'Sed venenatis, sem',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 8,
      title: 'UI/UX Design',
      description: 'Sed venenatis',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 9,
      title: 'Design',
      description: 'Venenatis sem',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 10,
      title: 'Interior Design',
      description: 'Sed venenatis, sem',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    }
  ]
  const tableHeader = ['TITLE', 'DESCRIPTION', 'DUE DATE', 'PROGRESS', 'ACTION']

  const handleEdit = () => {
    setPopup(prev => !prev)
  }

  const handleRoom = () => {
    router.push('/spaces/meetings/meetingroom')
  }

  return (
    <Box sx={{ paddingLeft: { xs: '20px', lg: '150px' }, paddingRight: '20px' }}>
      <MeetingPopup popup={popup} handleEdit={handleEdit} />
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid xs={12} md={6}>
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: '34px',
              color: '#00061F',
              display: 'flex',
              flexDirection: 'column',
              textTransform: 'capitalize'
            }}
          >
            <Link
              href='/spaces/meetings'
              style={{
                color: '#6F7885',
                fontSize: '14px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                left: '-5px'
              }}
            >
              <ArrowLeftIcon />
              Back to Space
            </Link>
            Meeting {meetingId}
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#6F7885',
              fontSize: '16px',
              fontWeight: '500',
              marginTop: '10px'
            }}
          >
            <Image src={time} alt='time' style={{ marginRight: '10px' }} />
            TIME: Aug,11 at 02:00 PM
          </Typography>
          <Typography sx={{ color: '#036730', fontSize: '14px', fontWeight: '700', marginTop: '20px' }}>
            Completed
          </Typography>
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}
        >
          <Button
            onClick={handleRoom}
            sx={{
              boxShadow: '0px 8px 40px rgba(0, 0, 0, 0.10)',
              color: '#000',
              fontWeight: '700',
              fontSize: '16px',
              width: '144px',
              borderRadius: '15px'
            }}
          >
            Join Meeting
          </Button>
          <Button
            onClick={handleEdit}
            sx={{
              backgroundColor: '#765DA5',
              color: '#fff',
              fontSize: '16px',
              fontWeight: '700',
              width: '144px',
              borderRadius: '15px',
              marginX: '5px',
              ':hover': {
                backgroundColor: '#765DA5'
              }
            }}
          >
            <Image src={pencil} alt='pencil' style={{ marginRight: '10px' }} />
            Edit Info
          </Button>
          <Box
            sx={{
              width: '40%',
              display: 'flex',
              alignItems: 'start',
              flexDirection: 'column'
            }}
          >
            <Typography sx={{ color: '#00061F', fontSize: '24px', fontWeight: '700' }}>Progress</Typography>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <Progress />
              <Typography sx={{ marginLeft: '10px', color: '#6F7885', fontSize: '15px', fontWeight: '700' }}>
                7/10
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '30px' }}>
        <Typography sx={{ color: '#00061F', fontSize: '28px', fontWeight: '600' }}>
          Information About the Meeting
        </Typography>
        <Typography sx={{ color: '#6F7885', fontSiz: '18px', fontWeight: '400', lineHeight: '28px', marginY: '15px' }}>
          Sed venenatis, sem quis hendrerit vulputate, nibh odio imperdiet eros, tincidunt ornare purus lacus rhoncus
          turpis. Suspendisse vel venenatis tellus, et accumsan justo. Praesent maximus neque nec suscipit rutrum. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sit amet rutrum ipsum,
          non imperdiet ante. Nunc nec gravida ipsum. Nulla quis suscipit leo.
        </Typography>
        <Box>
          <Typography sx={{ color: '#00061F', fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>
            Members
          </Typography>
          <Box sx={{ position: 'relative', right: '15px' }}>{group}</Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: '30px' }}>
        <Typography sx={{ color: '#00061F', fontSize: '28px', fontWeight: '600' }}>Goals</Typography>
        <MeetingTable data={data} rows={5} tableHeader={tableHeader} />
      </Box>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end', marginTop: '20px' }}>
        <Button
          sx={{
            boxShadow: '0px 8px 40px rgba(0, 0, 0, 0.10)',
            color: '#000',
            fontWeight: '700',
            fontSize: '16px',
            width: '144px',
            borderRadius: '15px'
          }}
        >
          Update Goal
        </Button>
        <Button
          sx={{
            backgroundColor: '#765DA5',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '700',
            width: '144px',
            borderRadius: '15px',
            marginX: '5px'
          }}
        >
          + Create Goal
        </Button>
      </Box>
    </Box>
  )
}

export default Index
