import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import avata2 from '/public/images/58028 1 (1).svg'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Image from 'next/image'

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={top100Films}
      sx={{ width: 300 }}
      getOptionLabel={option => option.name}
      renderOption={(props, option) => (
        <ListItem {...props}>
          <ListItemAvatar>
            <Image src={avata2} alt='avatar' />
          </ListItemAvatar>
          <ListItemText primary={option.name} />
        </ListItem>
      )}
      ListboxComponent={props => <List {...props} sx={{ '& > li': { borderBottom: '1px solid #e0e0e0' } }} />}
      renderInput={params => <TextField {...params} label='name' />}
    />
  )
}

const top100Films = [{ name: 'Ahmed' }, { name: 'Ali' }, { name: 'Mohamed' }]
