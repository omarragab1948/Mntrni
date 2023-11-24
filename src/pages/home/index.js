// ** MUI Imports
import { Box } from '@mui/system'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MeetingsTable from 'src/@core/components/meetingsTable/index.js'
import DashboardChart from '../../@core/components/charts/dashboardChart'
import TasksTable from 'src/@core/components/tasksTable/DataTable'
import Progress from '../../@core/components/progress/index'
import OptionsMenu from 'src/@core/components/option-menu'
import Image from 'next/image'
import time from '../../../public/images/time 1.svg'
import cat11 from '../../../public/images/categories 11.svg'
import cat12 from '../../../public/images/categories 12.svg'
import { Button } from '@mui/material'
import DotsMenu from '../../@core/components/dotsMenu/index'
import { useContext, useEffect } from 'react'
import { SettingsContext } from 'src/@core/context/settingsContext'

const Home = () => {
  const { handlePageTilte, pageTitle } = useContext(SettingsContext)

  console.log(pageTitle, handlePageTilte)

  const handleTitleChange = () => {
    handlePageTilte('Dashboard')
  }
  useEffect(() => {
    handleTitleChange()
  }, [handleTitleChange])

  return (
    <Grid container spacing={6} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ borderRadius: '17px', height: '134px' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Box
              sx={{
                mb: 2,
                backgroundColor: '#F0F0FE',
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '100%'
              }}
            >
              <Image src={time} alt='time' width={35} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: '40px', color: '#00061F', fontWeight: '700' }}>24</Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '600', color: ' #6F7885' }}>Pending Goals</Typography>
            </Box>
            <Box sx={{ position: 'absolute', right: '5px', top: '10px' }}>
              <DotsMenu />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ borderRadius: '17px', height: '134px' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Box
              sx={{
                mb: 2,
                backgroundColor: '#ECFDF3',
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '100%'
              }}
            >
              <Image src={cat11} alt='time' width={35} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: '40px', color: '#00061F', fontWeight: '700' }}>125</Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '600', color: ' #6F7885' }}>Completed Goals</Typography>
            </Box>
            <Box sx={{ position: 'absolute', right: '5px', top: '10px' }}>
              <DotsMenu />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ borderRadius: '17px', height: '134px' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <Box
              sx={{
                mb: 2,
                backgroundColor: '#E5F9FD',
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '100%'
              }}
            >
              <Image src={cat12} alt='time' width={35} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: '40px', color: '#00061F', fontWeight: '700' }}>113</Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '600', color: ' #6F7885' }}>Tasks</Typography>
            </Box>
            <Box sx={{ position: 'absolute', right: '5px', top: '10px' }}>
              <DotsMenu />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card sx={{ borderRadius: '17px', height: '134px' }}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              position: 'relative'
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '24px', color: '#00061F', fontWeight: '700', marginTop: '17px' }}>
                Completed goals
              </Typography>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <Progress />
              <Typography sx={{ fontSize: '15px', color: '#6C72C2', fontWeight: '700', marginLeft: '5px' }}>
                7/10
              </Typography>
            </Box>
            <Box sx={{ position: 'absolute', right: '5px', top: '10px' }}>
              <DotsMenu />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardContent>
            <Box sx={{ position: 'relative' }}>
              <OptionsMenu position={'absolute'} color={'#6F7885'} />
            </Box>
            <Box sx={{ position: 'relative', top: '40px', height: '446px', paddingBottom: '40px ' }}>
              <DashboardChart />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Typography sx={{ color: '#00061F', fontWeight: '600', fontSize: '30px' }}>Pending Tasks</Typography>
              <Button
                sx={{
                  backgroundColor: '#765DA5',
                  color: '#ffffff',
                  ':hover': {
                    backgroundColor: '#765DA5'
                  }
                }}
              >
                Add Goal
              </Button>
              <OptionsMenu position={'reltive'} color={'#6F7885'} title={'Grouped by: Space'} />
            </Box>
            <Box sx={{ position: 'relative', top: '40px', height: '403px', paddingBottom: '40px ' }}>
              <TasksTable />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography sx={{ color: '#00061F', fontWeight: '600', fontSize: '30px' }}>Upcoming Meetings</Typography>

            <MeetingsTable />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
