import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import Dots from '../dotsMenu'
import Progress from '../progress'
import { Divider } from '@mui/material'
import Image from 'next/image'
import user1 from '/public/images/58028 1.svg'
import user2 from '/public/images/58028 1 (1).svg'
import user3 from '/public/images/58028 1 (2).png'
import messages from '/public/images/comment-alt-middle 13.svg'
import attach from '/public/images/comment-alt-middle 14.svg'

const ExpandMore = styled(props => {
  const { expand, ...other } = props

  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: '96%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button
            sx={{
              backgroundColor: '#765DA5',
              color: 'white',
              fontSize: '16px',
              fontWeight: '700',
              borderRadius: 53,
              width: '115px',
              padding: '10px 20px',
              ':hover': { backgroundColor: '#765DA5' }
            }}
          >
            Design
          </Button>
          <Dots />
        </Box>
        <Typography
          sx={{ marginTop: '15px', fontSize: '20px', color: '#00061F', fontWeight: '700', marginBottom: '10px' }}
        >
          Interior Design
        </Typography>
        <Typography sx={{ fontWeight: '400', fontSize: '15px', color: '#6F7885', marginBottom: '10px' }}>
          Praesent maximus neque nec suscipit rutrum. Orci varius.
        </Typography>
        <FormGroup sx={{ fontWeight: '600', fontSize: '16px', color: '#6F7885' }}>
          <FormControlLabel control={<Checkbox />} label='About' />
        </FormGroup>
        <FormGroup sx={{ fontWeight: '600', fontSize: '16px', color: '#6F7885', marginBottom: '10px' }}>
          <FormControlLabel control={<Checkbox />} label='Career' />
        </FormGroup>
        <Divider />
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Typography sx={{ fontSize: '15px', color: '#6F7885', fontWeight: '700' }}>Progress</Typography>
            <Typography sx={{ fontSize: '15px', color: '#6F7885', fontWeight: '700' }}>7/10</Typography>
          </Box>
          <Box>
            <Progress />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Image src={user1} alt='user1' width={40} />
              <Image src={user2} alt='user2' width={40} />
              <Image src={user3} alt='user3' width={40} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src={messages} alt='messages' />
                <Typography sx={{ marginLeft: '10px', fontWeight: '600', fontSize: '16px', color: '#6F7885' }}>
                  2
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                <Image src={attach} alt='attach' />
                <Typography sx={{ marginLeft: '10px', fontWeight: '600', fontSize: '16px', color: '#6F7885' }}>
                  2
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
