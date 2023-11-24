import { Button, Grid } from '@mui/material'
import React, { useEffect, useContext } from 'react'
import { SettingsContext } from 'src/@core/context/settingsContext'
import Tabs from '../../../../@core/components/tabs/index'
import Image from 'next/image'
import meeting from '/public/images/teleconference-concept-screenshot-happy-businessman-making-video-call-gesturing-laptop-webcamera_116547-28145-transformed 1.png'
import mic0 from '/public/images/mic 1.svg'
import mic1 from '/public/images/mic 3.svg'
import mic2 from '/public/images/mic 5.svg'
import mic3 from '/public/images/mic 1 (1).svg'
import meeting2 from '/public/images/friends-family-making-videocall-catching-up 1.png'

import { Box } from '@mui/system'

const Index = () => {
  const { handlePageTilte } = useContext(SettingsContext)
  useEffect(() => {
    handlePageTilte('Meeting Room')
  }, [])

  return (
    <Grid container>
      <Grid xs={12} lg={7}>
        <Box sx={{ width: '100%', backgroundColor: '#000000', padding: '5px' }}>
          <Box sx={{ height: '300px' }}>
            <Image src={meeting} alt='meeting' style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '5px' }}>
            <Image src={meeting2} alt='meeting' style={{ width: '20%', borderRadius: '10px', height: '50%' }} />
            <Image src={meeting2} alt='meeting' style={{ width: '20%', borderRadius: '10px', height: '50%' }} />
            <Image src={meeting2} alt='meeting' style={{ width: '20%', borderRadius: '10px', height: '50%' }} />
            <Image src={meeting2} alt='meeting' style={{ width: '20%', borderRadius: '10px', height: '50%' }} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: '10px' }}>
            <Button
              sx={{
                width: '40px',
                height: '44px',
                backgroundColor: '#2D2D2D',
                borderRadius: '100%',
                marginRight: '5px'
              }}
            >
              <Image src={mic0} alt='mic1' style={{ width: '100%', height: '100%' }} />
            </Button>
            <Button
              sx={{
                width: '40px',
                height: '44px',
                backgroundColor: '#2D2D2D',
                borderRadius: '100%',
                marginRight: '5px'
              }}
            >
              <Image src={mic1} alt='mic1' style={{ width: '100%', height: '100%' }} />
            </Button>
            <Button
              sx={{
                width: '60px',
                height: '44px',
                backgroundColor: '#D95140',
                borderRadius: '30px',
                marginRight: '5px'
              }}
            >
              <Image src={mic2} alt='mic1' style={{ width: '100%', height: '100%' }} />
            </Button>
            <Button sx={{ color: '#ffffff', backgroundColor: '#765DA5', borderRadius: '30px' }}>
              <Image src={mic3} alt='mic1' style={{ marginRight: '5px' }} />
              Collaborate
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid xs={12} lg={5}>
        <Tabs />
      </Grid>
    </Grid>
  )
}

export default Index
