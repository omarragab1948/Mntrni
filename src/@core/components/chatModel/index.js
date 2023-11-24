import React from 'react'
import Typography from '@mui/material/Typography'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import SearchIcon from '@mui/icons-material/Search'
import VideocamIcon from '@mui/icons-material/Videocam'
import CloseIcon from '@mui/icons-material/Close'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import { Box } from '@mui/system'
import { Button, Divider } from '@mui/material'
import Image from 'next/image'
import sent from 'public/images/sent 6.svg'
import addImage from 'public/images/images (1) 9.svg'
import attachment from 'public/images/images (1) 7.svg'
import send from 'public/images/send (1) 3.svg'
import InputBase from '@mui/material/InputBase'

const ChatModel = ({ back, selectedMessage, height, padding }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {height && (
          <Box>
            <Button onClick={back} sx={{ color: '#6F7885', fontSize: '15px', fontWeight: '700', marginLeft: '5px' }}>
              <ArrowLeftIcon />
              Back
            </Button>
          </Box>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '5px'
            }}
          >
            <Image src={selectedMessage.image} alt='chat image' />
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}
            >
              <Typography sx={{ marginLeft: '5px', color: '#000000', fontSize: '18px', fontWeight: '600' }}>
                {selectedMessage.name}
              </Typography>
              <Typography sx={{ marginLeft: '5px', color: '#00B88B', fontSize: '14px', fontWeight: '400' }}>
                Online
              </Typography>
            </Box>
          </Box>
          <Box>
            <VideocamIcon sx={{ fontSize: '26px', marginLeft: '5px', cursor: 'pointer' }} />
            <SearchIcon sx={{ fontSize: '26px', marginLeft: '5px', cursor: 'pointer' }} />
            {height && <FullscreenIcon sx={{ fontSize: '26px', marginLeft: '5px', cursor: 'pointer' }} />}
            {height && <CloseIcon sx={{ fontSize: '26px', marginLeft: '5px', cursor: 'pointer' }} onClick={back} />}
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          paddingTop: '10px',
          paddingX: '10px',
          paddingBottom: padding || '100px',
          backgroundColor: '#FAF8FF',
          overflow: 'auto',
          height: height || '404px'
        }}
      >
        {selectedMessage.chat.map((message, index) => (
          <Box key={index} sx={{ display: 'flex', marginTop: '20px' }}>
            <Image src={selectedMessage.image} alt='sender' />
            <Box sx={{ marginLeft: '10px', width: '100%' }}>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ marginRight: '10px', color: '#000000', fontSize: '15px', fontWeight: '600' }}>
                  {selectedMessage.name}
                </Typography>
                <Typography sx={{ color: '#ACACAC', fontSize: '14px', fontWeight: '400' }}>
                  {new Date(message.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Typography>
              </Box>
              <Box
                sx={{
                  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.04)',
                  padding: '15px',
                  borderRadius: '0 10px 10px 10px',
                  marginBottom: '10px'
                }}
              >
                <Typography>{message.sent}</Typography>
              </Box>
              <Box
                sx={{
                  padding: '15px'
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                  <Typography sx={{ marginRight: '10px', color: '#000000', fontSize: '15px', fontWeight: '600' }}>
                    You
                  </Typography>
                  <Typography sx={{ color: '#ACACAC', fontSize: '14px', fontWeight: '400' }}>
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </Typography>
                  <Image src={sent} alt='sent' style={{ marginLeft: '5px' }} />
                </Box>
                <Typography
                  sx={{
                    color: '#ffffff',
                    borderRadius: '10px 0 10px 10px',
                    backgroundColor: '#765DA5',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.04)',
                    padding: '20px 10px'
                  }}
                >
                  {message.received}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          width: '95%',
          height: '60px',
          zIndex: '1000',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          paddingX: '10px'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder='Type Message'
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image src={addImage} alt='addImage' style={{ cursor: 'pointer' }} />
            <Image src={attachment} alt='attachment' style={{ margin: '0 10px', cursor: 'pointer' }} />
            <Box
              sx={{
                backgroundColor: '#765DA5',
                width: '40px',
                height: '40px',
                borderRadius: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Image src={send} alt='send' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatModel
