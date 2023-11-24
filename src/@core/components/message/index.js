import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

const index = ({ message }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingX: '10px',
          paddingY: '5px',
          width: '100%'
        }}
      >
        <Box
          sx={{
            width: '40px',
            height: '40px',
            backgroundColor: '#765DA5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            borderRadius: '100%',
            marginRight: '5px'
          }}
        >
          <Image src={message.image} alt='chat image' />
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', width: '60%', marginLeft: '10px' }}
        >
          <Typography
            sx={{ fontSize: '16px', fontWeight: '600', color: '#000000', display: 'flex', justifyContent: 'start' }}
          >
            {message.name}
          </Typography>
          <Typography
            sx={{ fontSize: '16px', fontWeight: '400', color: '#828291', display: 'flex', justifyContent: 'start' }}
          >
            {message.message}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#828291', display: 'flex' }}>
            13:06 PM
          </Typography>
          <Typography
            sx={{
              width: '25px',
              height: '25px',
              backgroundColor: '#765DA5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              borderRadius: '100%',
              margin: 'auto'
            }}
          >
            3
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default index
