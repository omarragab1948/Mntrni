import React, { useEffect, useContext } from 'react'
import Layout from '../Layout'
import { SettingsContext } from 'src/@core/context/settingsContext'
import { Grid, Box, Typography, Button, Divider, InputBase } from '@mui/material'
import Image from 'next/image'
import user1 from 'public/images/58028 1.png'
import user2 from 'public/images/58028 2.svg'
import user4 from 'public/images/58028 1 (2).png'
import SearchIcon from '@mui/icons-material/Search'
import ChatModel from 'src/@core/components/chatModel'
import { useState } from 'react'

const Inbox = () => {
  const { handlePageTilte } = useContext(SettingsContext)

  const [selectedMessage, setSelectedMessage] = useState({
    id: 3,
    image: user4,
    name: 'Alaa',
    message: 'Birthday Celebration',
    chat: [
      { sent: 'Hi team, we have a meeting tomorrow at 10 AM.', received: "Sure, I'll be there.", date: new Date() },
      {
        sent: "Hey everyone, let's celebrate John's birthday on Friday!",
        received: 'That sounds like a great idea! Count me in.',
        date: new Date()
      },
      {
        sent: "Hey everyone, let's celebrate John's birthday on Friday!",
        received: 'That sounds like a great idea! Count me in.',
        date: new Date()
      },
      {
        sent: "Hey everyone, let's celebrate John's birthday on Friday!",
        received: 'That sounds like a great idea! Count me in.',
        date: new Date()
      }
    ]
  })
  useEffect(() => {
    handlePageTilte('Inbox')
  }, [])

  const messages = [
    {
      id: 1,
      image: user1,
      name: 'Ahmed',
      message: 'Hello Ahmed',
      chat: [
        { sent: 'Hello Omar', received: 'Hello Ahmed, how are you?', date: new Date() },
        {
          sent: "Hey everyone, let's celebrate John's birthday on Friday!",
          received: 'That sounds like a great idea! Count me in.',
          date: new Date()
        }
      ]
    },
    {
      id: 2,
      image: user2,
      name: 'Ali',

      message: 'Meeting Tomorrow',
      chat: [
        { sent: 'Hi team, we have a meeting tomorrow at 10 AM.', received: "Sure, I'll be there.", date: new Date() },
        {
          sent: "Hey everyone, let's celebrate John's birthday on Friday!",
          received: 'That sounds like a great idea! Count me in.',
          date: new Date()
        },
        {
          sent: "Hey everyone, let's celebrate John's birthday on Friday!",
          received: 'That sounds like a great idea! Count me in.',
          date: new Date()
        },
        {
          sent: "Hey everyone, let's celebrate John's birthday on Friday!",
          received: 'That sounds like a great idea! Count me in.',
          date: new Date()
        }
      ]
    },
    {
      id: 3,
      image: user4,
      name: 'Alaa',
      message: 'Birthday Celebration',
      chat: [
        { sent: 'Hi team, we have a meeting tomorrow at 10 AM.', received: "Sure, I'll be there.", date: new Date() },
        {
          sent: "Hey everyone, let's celebrate John's birthday on Friday!",
          received: 'That sounds like a great idea! Count me in.',
          date: new Date()
        }
      ]
    }
  ]

  const group = (
    <>
      <Image
        alt='Remy Sharp'
        src={user4}
        style={{ borderRadius: '100%', position: 'relative', left: '55px', zIndex: '10' }}
      />
      <Image
        alt='Remy Sharp'
        src={user1}
        style={{ borderRadius: '100%', position: 'relative', left: '45px', zIndex: '9' }}
      />
      <Image
        alt='Remy Sharp'
        src={user4}
        style={{ borderRadius: '100%', position: 'relative', left: '35px', zIndex: '8' }}
      />
      <Image
        alt='Remy Sharp'
        src={user1}
        style={{ borderRadius: '100%', position: 'relative', left: '25px', zIndex: '5' }}
      />
    </>
  )

  return (
    <Layout>
      <Grid container xs={12} md={9} lg={10}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'end',
            marginTop: '-15px',
            height: '45px',
            paddingX: '25px'
          }}
        >
          <Box sx={{ position: 'relative', marginRight: '60px', display: 'flex' }}>
            {/* <Box
              sx={{
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: '-28px',
                zIndex: '10000',
                borderRadius: '100%'
              }}
            >
              <Image src={user1} alt='user1' width={35} />
            </Box>
            <Box
              sx={{
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: '10px',
                zIndex: '11000'
              }}
            >
              <Image src={user1} alt='user1' width={35} />
            </Box>
            <Box
              sx={{
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: '-4px',
                zIndex: '1000'
              }}
            >
              <Image src={user1} alt='user1' width={35} />
            </Box> */}
            {group}
          </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box
            sx={{
              backgroundColor: 'white',
              position: 'relative',
              borderLeft: '1px  solid #E9EAEF',
              borderTop: '1px  solid #E9EAEF',
              height: '100%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingY: '24px',
                paddingX: '10px'
              }}
            >
              <Typography sx={{ color: '#00061F', fontSize: '20px', fontWeight: '600' }}>Messages</Typography>
              <Box sx={{ display: 'flex' }}>
                <SearchIcon sx={{ fontSize: '27px', color: '#6F7885' }} />
              </Box>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              {messages.map(message => (
                <Box
                  key={message.id}
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
                    <Image src={user1} alt='chat image' />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'start',
                      width: '50%',
                      marginLeft: '10px'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#000000',
                        display: 'flex',
                        justifyContent: 'start'
                      }}
                    >
                      Design
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#00B88B',
                        display: 'flex',
                        justifyContent: 'start',
                        fontStyle: 'italic'
                      }}
                    >
                      Typing...
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#828291', display: 'flex' }}>
                      13:06 PM
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box sx={{ position: 'relative', top: '80px', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Button
                sx={{
                  border: '1px dashed  #6C72C2',
                  borderRadius: '15px'
                }}
              >
                + Add a private conversation
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Box
            sx={{
              position: 'relative',
              borderLeft: '1px  solid #E9EAEF',
              borderTop: '1px  solid #E9EAEF',
              height: '100%'
            }}
          >
            {/* <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 10px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '5px'
                  }}
                >
                  <Image src={user1} alt='chat image' />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'column'
                    }}
                  >
                    <Typography sx={{ marginLeft: '5px', color: '#000000', fontSize: '18px', fontWeight: '600' }}>
                      Design
                    </Typography>
                    <Typography sx={{ marginLeft: '5px', color: '#00B88B', fontSize: '14px', fontWeight: '400' }}>
                      Typing...
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <VideocamIcon sx={{ fontSize: '26px', marginLeft: '5px', cursor: 'pointer' }} />
                  <SearchIcon sx={{ fontSize: '26px', marginLeft: '5px', cursor: 'pointer' }} />
                  <DotsMenu sx={{ fontSize: '26px', marginLeft: '5px', cursor: 'pointer' }} />
                </Box>
              </Box>
            </Box> */}
            <Divider />
            <Box
              sx={{
                padding: '10px',
                paddingBottom: '55px',
                backgroundColor: '#FAF8FF',
                overflow: 'auto'

                // height: '404px'
              }}
            >
              <ChatModel selectedMessage={selectedMessage} height={false} padding={'0'} />
              {/* {messages.chat.map((message, index) => (
                <Box key={index} sx={{ display: 'flex', marginTop: '20px' }}>
                  <Image src={user1} alt='sender' />
                  <Box sx={{ marginLeft: '10px', width: '100%' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ marginRight: '10px', color: '#000000', fontSize: '15px', fontWeight: '600' }}>
                        Design
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
              ))} */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Inbox
