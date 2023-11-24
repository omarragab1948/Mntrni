// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardContent, Divider } from '@mui/material'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import OptionsMenu from 'src/@core/components/option-menu'
import Card from 'src/@core/components/goalsCard/index'
import Image from 'next/image'
import goal from '../../../public/images/categories 10.svg'
import user1 from '../../../public/images/58028 1.png'
import user2 from '../../../public/images/58028 2.svg'
import user4 from '../../../public/images/58028 1 (2).png'
import { useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import Messsage from '../../@core/components/message/index'
import ChatModel from '../../@core/components/chatModel/index'
import { useContext } from 'react'
import { SettingsContext } from 'src/@core/context/settingsContext'
import Layout from './Layout'
import GoalModel from '../../@core/components/goalModel/index'

const Spaces = () => {
  const [messageWindow, setMessageWindow] = useState(false)
  const [openChat, setOpenChat] = useState(false)
  const { handlePageTilte } = useContext(SettingsContext)
  const [popup, setPopup] = useState(false)

  const handleEdit = () => {
    setPopup(prev => !prev)
  }

  useEffect(() => {
    handlePageTilte('Spaces')
  }, [])

  const handle = () => {
    setMessageWindow(prev => !prev)
    setOpenChat(false)
  }
  const [selectedMessage, setSelectedMessage] = useState(null)

  const goBack = () => {
    setOpenChat(false)
  }

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

  const handleOpenChat = message => {
    setSelectedMessage(message)
    setOpenChat(true)
  }

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
      <GoalModel popup={popup} handleEdit={handleEdit} />
      <Grid xs={12} md={9} lg={10} sx={{ position: 'relative' }}>
        <Box sx={{ borderRadius: '17px', height: '134px', width: '100%' }}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              position: 'relative',
              width: '100%'
            }}
          >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end', marginTop: '-15px' }}>
              <Box sx={{ position: 'relative', marginRight: '60px', display: 'flex' }}>{group}</Box>
              <OptionsMenu title={'Actions'} />
            </Box>
            <Box sx={{ marginY: '20px', display: 'flex', alignItems: 'center' }}>
              <Image src={goal} alt='goal' />
              <Typography sx={{ color: '#00061F', fontSize: '30px', fontWeight: '600' }}>Goals</Typography>
            </Box>
            <Grid container spacing={2} sx={{ marginTop: '20p' }}>
              <Grid
                xs={10}
                lg={4}
                sm={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}
              >
                <Card />
              </Grid>
              <Grid xs={10} sm={6} lg={4} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button
                  sx={{
                    minWidth: '95%',
                    maxWidth: '98%',
                    height: '423px',
                    border: '1px dashed  #6C72C2',
                    marginLeft: ''
                  }}
                  onClick={handleEdit}
                >
                  + Add Goal
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
        <Box sx={{ position: 'fixed', transition: '300ms', right: messageWindow ? '327px' : '-23px', bottom: '240px' }}>
          <Button
            onClick={handle}
            sx={{
              width: '5px',
              height: '100px',
              boxShadow: '0px 2px 6px 0px rgba(47, 43, 61, 0.14)'
            }}
          >
            {messageWindow ? (
              <ArrowForwardIosIcon sx={{ color: '#6F7885', position: 'relative', left: '-10px' }} />
            ) : (
              <ArrowBackIosNewIcon sx={{ color: '#6F7885', position: 'relative', left: '-10px' }} />
            )}
          </Button>
        </Box>
        <Box
          sx={{
            position: 'fixed',
            backgroundColor: 'white',
            height: '75%',
            right: '0',
            bottom: '0px',
            transition: '300ms',
            width: messageWindow ? '350px' : '0',
            boxShadow: '0px 2px 6px 0px rgba(47, 43, 61, 0.14)',
            borderRadius: '15px 0 0 0 ',
            zIndex: '99999',
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              paddingLeft: '15px',
              paddingY: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography sx={{ color: '#00061F', fontSize: '20px', fontWeight: '600' }}>Messages</Typography>
            <Box sx={{ display: 'flex' }}>
              <SearchIcon sx={{ fontSize: '27px', color: '#6F7885' }} />
              <Button sx={{ width: 'fit-content', padding: '0' }} onClick={handle}>
                <CloseIcon sx={{ fontSize: '27px', color: '#6F7885' }} />
              </Button>
            </Box>
          </Box>
          <Divider />
          <Box>
            {messages.map(message => (
              <>
                <Button key={message.id} onClick={() => handleOpenChat(message)} sx={{ width: '100%' }}>
                  <Messsage message={message} />
                </Button>
                <Divider />
              </>
            ))}
          </Box>
          <Box
            sx={{
              position: 'relative',
              top: { xs: '330px', sm: '226px' },
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button
              sx={{
                border: '1px dashed  #6C72C2',
                borderRadius: '15px',
                width: '90%'
              }}
            >
              + Add a private conversation
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'fixed',
            backgroundColor: 'white',
            height: '75%',
            right: '0',
            bottom: '0px',
            transition: '300ms',
            width: openChat && messageWindow ? '350px' : '0',
            boxShadow: '0px 2px 6px 0px rgba(47, 43, 61, 0.14)',
            borderRadius: '15px 0 0 0 ',
            zIndex: '99999'
          }}
        >
          <Box
            sx={{
              paddingLeft: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          ></Box>
          {selectedMessage !== null && <ChatModel back={goBack} selectedMessage={selectedMessage} height={'404px'} />}
        </Box>
      </Grid>
    </Layout>
  )
}

export default Spaces
