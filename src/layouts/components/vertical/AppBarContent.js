// ** MUI Imports
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'

// ** Components
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import NottificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'

// ** images import
import notificatin from '../../../../public/images/categories 8.svg'
import set from '../../../../public/images/categories 9.svg'
import Link from 'next/link'

const AppBarContent = props => {
  // ** Props
  const { hidden, settings, setPageTitle, toggleNavVisibility } = props
  console.log(props)

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <Icon fontSize='1.5rem' icon='tabler:menu-2' />
          </IconButton>
        ) : null}

        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '34px',
            color: '#00061F',
            display: 'flex',
            flexDirection: 'column',
            position: settings.pageTitle === 'Dashboard' ? '' : 'relative',
            left: { xs: '0', lg: ['Spaces', 'Inbox', 'Meetings'].includes(settings.pageTitle) && '200px' },
            textTransform: 'capitalize'
          }}
        >
          {['Inbox', 'Meetings'].includes(settings.pageTitle) && (
            <Link
              href='/spaces'
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
          )}
          {settings.pageTitle}
        </Typography>
      </Box>
      <Box
        className='actions-right'
        sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', width: { xs: '245px', md: 'auto' } }}
      >
        <Box
          sx={{
            marginRight: '70px',
            display: { xs: 'none', md: 'block' },
            border: '1px solid #D6D6D6',
            borderRadius: '6px'
          }}
        >
          <IconButton type='button' aria-label='search'>
            <SearchIcon />
          </IconButton>
          <input type='text' placeholder='Search' style={{ border: 'none', outline: 'none' }} />
        </Box>
        <Box sx={{ cursor: 'pointer', marginTop: '7px' }}>
          <Image src={set} alt='settings' />
        </Box>
        <Box sx={{ marginX: '15px', marginTop: '7px', cursor: 'pointer' }}>
          <NottificationDropdown />
        </Box>
        <UserDropdown settings={settings} />
        <Typography sx={{ marginLeft: '15px' }} className='username'>
          Sami Leo
        </Typography>
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            border: '1px solid #D6D6D6',
            borderRadius: '6px',
            marginTop: '5px',
            width: '100%'
          }}
        >
          <IconButton type='button' aria-label='search'>
            <SearchIcon />
          </IconButton>
          <input type='text' placeholder='Search' style={{ border: 'none', outline: 'none' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default AppBarContent
