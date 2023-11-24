import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import Image from 'next/image'
import cat8 from 'public/images/categories 8.svg'
import avatar from 'public/images/58028 1 (1).png'
import { Button } from '@mui/material'

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const notifications = [
    {
      id: 1,
      message: 'New message received',
      timestamp: new Date(),
      image: avatar
    },
    {
      id: 2,
      message: 'You have a new follower',
      timestamp: new Date(),
      image: avatar
    },
    {
      id: 3,
      message: 'You have a new follower',
      timestamp: new Date(),
      image: avatar
    }

    // Add more notifications as needed
  ]

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', zIndex: '10000000000' }}>
        <Tooltip title='Notifications'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <Image src={cat8} alt='cat8' />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: '375px',
            padding: '10px',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
          }}
        >
          <Typography sx={{ color: '#00061F', fontSize: '22px', fontWeight: '700' }}>Notifications</Typography>
          <Button sx={{ color: '#765DA5', fontSize: '16px', fontWeight: '600' }}>Mark all as read</Button>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px'
          }}
        >
          <Typography
            sx={{
              color: '#00061F',
              fontSize: '16px',
              fontWeight: '600',
              marginX: '35px',
              borderBottom: '1px solid #765DA5'
            }}
          >
            All
          </Typography>
          <Typography sx={{ color: '#6F7885', fontSize: '16px', fontWeight: '600' }}>Following</Typography>
        </Box>
        <Box>
          {notifications.map(not => (
            <MenuItem onClick={handleClose} key={not.id} sx={{ borderBottom: '1px solid #E9EAEF', borderRadius: '0' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={not.image} alt={not.image} />
                <Typography sx={{ marginLeft: '10px' }}>{not.message}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Box>
        <Box>
          <Button sx={{ color: '#765DA5', marginTop: '10px' }}>View all notification</Button>
        </Box>
      </Menu>
    </React.Fragment>
  )
}
