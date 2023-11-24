import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import settings from 'public/images/pencil 13.svg'
import members from 'public/images/pencil 14.svg'
import chat from 'public/images/categories 13.svg'
import management from 'public/images/pencil 15.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@mui/material'

const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}))

export default function OptionsMenu({ position, color, title }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div style={{ position: position, right: 0, color: color }}>
      <Button
        id='demo-customized-button'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{
          backgroundColor: 'white',
          color: '#6F7885',
          fontWeight: '700',
          fontSize: 16
        }}
      >
        {title ? title : 'Monthly'}
      </Button>

      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        style={{ zIndex: '100000', boxShadow: '0px 8px 40px rgba(11, 20, 68, 0.25)' }}
      >
        <MenuItem onClick={handleClose} disableRipple sx={{ display: 'flex' }}>
          <Image src={settings} alt='settings' style={{ marginRight: '10px' }} />
          <Typography sx={{ color: '#6F7885', fontSize: '18px', fontWeight: '600' }}>Settings</Typography>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple sx={{ display: 'flex' }}>
          <Image src={members} alt='members' style={{ marginRight: '10px' }} />
          <Typography sx={{ color: '#6F7885', fontSize: '18px', fontWeight: '600' }}>Members</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple sx={{ display: 'flex' }}>
          <Link
            href={'/spaces/inbox'}
            style={{ textDecoration: 'none', color: '#6F7885', display: 'flex', width: '100%' }}
          >
            <Image src={chat} alt='chat' style={{ marginRight: '10px' }} />
            <Typography sx={{ color: '#6F7885', fontSize: '18px', fontWeight: '600' }}>Chat</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple sx={{ display: 'flex' }}>
          <Image src={management} alt='management' style={{ marginRight: '10px' }} />
          <Typography sx={{ color: '#6F7885', fontSize: '18px', fontWeight: '600' }}>Management</Typography>
        </MenuItem>
      </StyledMenu>
    </div>
  )
}
