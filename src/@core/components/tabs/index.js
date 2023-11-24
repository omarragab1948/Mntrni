import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'next/image'
import first from '/public/images/categories 10.1.svg'
import second from '/public/images/categories 15.svg'
import third from '/public/images/categories 16.svg'
import fourth from '/public/images/categories 18.svg'
import groupImage from '/public/images/Group 176.svg'
import user1 from '/public/images/58028 1.png'
import { Button, InputBase } from '@mui/material'
import sent from 'public/images/sent 6.svg'
import addImage from 'public/images/images (1) 9.svg'
import attachment from 'public/images/images (1) 7.svg'
import send from 'public/images/send (1) 3.svg'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddGroup from '/public/images/add-group 1.svg'
import DotsMenu from '../../components/dotsMenu/index'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Progress from '../../components/progress/index'
import message from '/public/images/comment-alt-middle 21.svg'
import attachment2 from '/public/images/comment-alt-middle 22.svg'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const messages = {
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
  }

  const meetingParticipants = [
    { name: 'Amanda Doe', image: user1 },
    { name: 'Amanda Doe', image: user1 },
    { name: 'Amanda Doe', image: user1 },
    { name: 'Amanda Doe', image: user1 }
  ]

  const group = (
    <>
      <Image
        alt='Remy Sharp'
        src={user1}
        style={{
          borderRadius: '100%',
          position: 'relative',
          left: '30px',
          zIndex: '10',
          width: '35px',
          height: '35px'
        }}
      />
      <Image
        alt='Remy Sharp'
        src={user1}
        style={{ borderRadius: '100%', position: 'relative', left: '20px', zIndex: '8', width: '35px', height: '35px' }}
      />
      <Image
        alt='Remy Sharp'
        src={user1}
        style={{ borderRadius: '100%', position: 'relative', left: '12px', zIndex: '5', width: '35px', height: '35px' }}
      />
      <Image alt='Remy Sharp' src={user1} style={{ borderRadius: '100%', width: '35px', height: '35px' }} />
    </>
  )

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={first} alt='first' />
                <Typography sx={{ marginLeft: '5px' }}>Chat</Typography>
              </Box>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={second} alt='first' />
                <Typography sx={{ marginLeft: '5px' }}>Your Meeting</Typography>
              </Box>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={third} alt='first' />
                <Typography sx={{ marginLeft: '5px' }}>Goals</Typography>
              </Box>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={fourth} alt='first' />
                <Typography sx={{ marginLeft: '5px' }}>Notes</Typography>
              </Box>
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box
          sx={{
            paddingTop: '10px',
            paddingX: '10px',
            paddingBottom: '10px',
            backgroundColor: '#FAF8FF',
            overflow: 'auto',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
          }}
        >
          {messages.chat.map((message, index) => (
            <Box key={index} sx={{ display: 'flex', marginTop: '20px' }}>
              <Image src={messages.image} alt='sender' />
              <Box sx={{ marginLeft: '10px', width: '100%' }}>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ marginRight: '10px', color: '#000000', fontSize: '15px', fontWeight: '600' }}>
                    {messages.name}
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
        <Box>
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ marginY: '10px' }}>
          <Typography sx={{ color: '#00061F', fontWeight: '700', fontSize: '18px' }}>Meeting Info</Typography>
          <Typography sx={{ color: '#6F7885', fontSize: '16px', fontWeight: '400' }}>
            Sed venenatis, sem quis hendrerit vulputate, nibh odio imperdiet eros, tincidunt ornare purus lacus rhoncus
            turpis. Suspendisse vel venenatis tellus, et accumsan justo. Praesent maximus neque nec suscipit rutrum.
            Orci varius natoque penatibus et magnis dis.
          </Typography>
        </Box>
        <Box>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-around' }}>
                <Typography sx={{ color: '#00061F', fontWeight: '700', fontSize: '18px' }}>Participants</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'end' }}>
                  <Button sx={{ backgroundColor: '#EEE4FF', color: '#765DA5' }}>
                    <Image src={AddGroup} alt='AddGroup' style={{ marginRight: '5px' }} />
                    Add
                  </Button>
                  <Typography sx={{ marginX: '15px' }}>5</Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {meetingParticipants.map((participant, index) => (
                <Box
                  key={index}
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginY: '20px' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Image src={participant.image} alt='participant' />
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        marginLeft: '20px'
                      }}
                    >
                      <Typography sx={{ color: '#000', fontSize: '18px', fontWeight: '600' }}>
                        {participant.name}
                      </Typography>
                      <Typography sx={{ color: '#828291' }}>Meeting host</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: '36px',
                        height: '36px',
                        backgroundColor: '#765DA5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '100%'
                      }}
                    >
                      <Image src={groupImage} alt='group' />
                    </Box>
                    <DotsMenu />
                  </Box>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box>
          <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 490, backgroundColor: '#EFEBF8' }}
          >
            <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Search Google Maps'
              inputProps={{ 'aria-label': 'Search for goals' }}
            />
          </Paper>
        </Box>
        <Box sx={{ height: '342px', overflow: 'auto' }}>
          <Box sx={{ marginTop: '10px' }}>
            <Box sx={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.04)', padding: '10px' }}>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}
              >
                <Typography
                  sx={{
                    backgroundColor: '#B1FFEC',
                    color: '#00B88B',
                    fontSize: '16px',
                    fontWeight: '700',
                    padding: '5px 10px',
                    borderRadius: '15px'
                  }}
                >
                  MARK AS COMPLETE
                </Typography>
                <DotsMenu />
              </Box>
              <Box sx={{ marginBottom: '20px' }}>
                <Typography sx={{ color: '#00061F', fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>
                  Interior Design
                </Typography>
                <Typography sx={{ color: '#6F7885', fontSize: '16px', fontWeight: '400' }}>
                  Nulla facilisi. Nulla at ornare tortor. Aliquam eu cursus nulla. Cras posuere suscipit.
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}
                >
                  <Typography>Progress</Typography>
                  <Typography>7/10</Typography>
                </Box>
                <Box>
                  <Progress />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <Box sx={{ position: 'relative', right: '15px' }}>{group}</Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box
                    sx={{ marginRight: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <Image src={message} alt='message' style={{ marginRight: '5px' }} />2
                  </Box>
                  <Box
                    sx={{ marginRight: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <Image src={attachment2} alt='attachment' style={{ marginRight: '5px' }} />2
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.04)', padding: '10px', marginTop: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <Typography
                sx={{
                  backgroundColor: '#00B88B',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '700',
                  padding: '5px 10px',
                  borderRadius: '15px'
                }}
              >
                COMPLETED
              </Typography>
              <DotsMenu />
            </Box>
            <Box sx={{ marginBottom: '20px' }}>
              <Typography sx={{ color: '#00061F', fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>
                Interior Design
              </Typography>
              <Typography sx={{ color: '#6F7885', fontSize: '16px', fontWeight: '400' }}>
                Nulla facilisi. Nulla at ornare tortor. Aliquam eu cursus nulla. Cras posuere suscipit.
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                <Typography>Progress</Typography>
                <Typography>7/10</Typography>
              </Box>
              <Box>
                <Progress />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <Box sx={{ position: 'relative', right: '15px' }}>{group}</Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box
                  sx={{ marginRight: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Image src={message} alt='message' style={{ marginRight: '5px' }} />2
                </Box>
                <Box
                  sx={{ marginRight: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Image src={attachment2} alt='attachment' style={{ marginRight: '5px' }} />2
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.04)', padding: '10px', marginTop: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <Typography
                sx={{
                  backgroundColor: '#00B88B',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '700',
                  padding: '5px 10px',
                  borderRadius: '15px'
                }}
              >
                COMPLETED
              </Typography>
              <DotsMenu />
            </Box>
            <Box sx={{ marginBottom: '20px' }}>
              <Typography sx={{ color: '#00061F', fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>
                Interior Design
              </Typography>
              <Typography sx={{ color: '#6F7885', fontSize: '16px', fontWeight: '400' }}>
                Nulla facilisi. Nulla at ornare tortor. Aliquam eu cursus nulla. Cras posuere suscipit.
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                <Typography>Progress</Typography>
                <Typography>7/10</Typography>
              </Box>
              <Box>
                <Progress />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
              <Box sx={{ position: 'relative', right: '15px' }}>{group}</Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box
                  sx={{ marginRight: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Image src={message} alt='message' style={{ marginRight: '5px' }} />2
                </Box>
                <Box
                  sx={{ marginRight: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <Image src={attachment2} alt='attachment' style={{ marginRight: '5px' }} />2
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '10px' }}>
          <Button
            sx={{
              backgroundColor: '#765DA5',
              color: '#fff',
              ':hover': {
                backgroundColor: '#765DA5'
              }
            }}
          >
            + Add New Goal
          </Button>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
          }}
        >
          <Box>
            <Typography sx={{ color: '#00061F', fontSize: '18px', fontWeight: '700', marginY: '20px' }}>
              Meeting Notes
            </Typography>
            <Typography sx={{ color: '#6F7885', fontWeight: '400', fontSize: '16px' }}>
              Nulla facilisi. Nulla at ornare tortor. Aliquam eu cursus nulla. Cras posuere suscipit.
            </Typography>
            <Typography sx={{ color: '#6F7885', fontWeight: '400', fontSize: '16px' }}>
              Sed venenatis, sem quis hendrerit vulputate, nibh odio imperdiet eros, tincidunt ornare purus lacus
              rhoncus turpis. Suspendisse vel venenatis tellus, et accumsan justo. Praesent maximus neque nec suscipit
              rutrum. Orci varius natoque penatibus et magnis dis.
            </Typography>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
            <Button
              sx={{
                backgroundColor: '#765DA5',
                width: 'fit-content',
                color: '#fff',
                ':hover': {
                  backgroundColor: '#765DA5'
                }
              }}
            >
              + Add Notes
            </Button>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  )
}
