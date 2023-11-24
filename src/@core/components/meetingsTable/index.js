import Table from 'src/@core/components/table'
import Progress from '../progress/index'
import avata1 from '/public/images/58028 1 (1).svg'
import avata2 from '/public/images/58028 1 (2).svg'
import Image from 'next/image'
import { SettingsContext } from 'src/@core/context/settingsContext'
import React, { useEffect, useContext } from 'react'

const Meetings = () => {
  const { handlePageTilte } = useContext(SettingsContext)
  useEffect(() => {
    handlePageTilte('Meetings')
  }, [handlePageTilte])

  const group = (
    <>
      <Image
        alt='Remy Sharp'
        src={avata1}
        style={{ borderRadius: '100%', position: 'relative', left: '15px', zIndex: '10' }}
      />
      <Image
        alt='Remy Sharp'
        src={avata2}
        style={{ borderRadius: '100%', position: 'relative', left: '10px', zIndex: '8' }}
      />
      <Image
        alt='Remy Sharp'
        src={avata1}
        style={{ borderRadius: '100%', position: 'relative', left: '5px', zIndex: '5' }}
      />
      <Image alt='Remy Sharp' src={avata2} style={{ borderRadius: '100%' }} />
    </>
  )

  const data = [
    {
      id: 1,
      name: 'Interior Design ',
      status: 'Sed venenatis, sem',
      startsIn: '2 Days',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 2,
      name: 'UI/UX Design',
      status: 'Sed venenatis',
      startsIn: '23 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 3,
      name: 'Design',
      status: 'Venenatis sem',
      startsIn: '1 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 4,
      name: 'Interior Design ',
      status: 'Sed venenatis, sem',
      startsIn: '2 Days',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 5,
      name: 'UI/UX Design',
      status: 'Sed venenatis',
      startsIn: '23 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 6,
      name: 'Design',
      status: 'Venenatis sem',
      startsIn: '1 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 7,
      name: 'Interior Design ',
      status: 'Sed venenatis, sem',
      startsIn: '2 Days',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 8,
      name: 'UI/UX Design',
      status: 'Sed venenatis',
      startsIn: '23 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 9,
      name: 'Design',
      status: 'Venenatis sem',
      startsIn: '1 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 10,
      name: 'Interior Design',
      status: 'Sed venenatis, sem',
      startsIn: '2 Days',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 11,
      name: 'UI/UX Design',
      status: 'Sed venenatis',
      startsIn: '23 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 12,
      name: 'Design',
      status: 'Venenatis sem',
      startsIn: '1 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 13,
      name: 'Interior Design',
      status: 'Sed venenatis, sem',
      startsIn: '2 Days',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 14,
      name: 'UI/UX Design',
      status: 'Sed venenatis',
      startsIn: '23 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 15,
      name: 'Design',
      status: 'Venenatis sem',
      startsIn: '1 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 16,
      name: 'Interior Design',
      status: 'Sed venenatis, sem',
      startsIn: '2 Days',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 17,
      name: 'UI/UX Design',
      status: 'Sed venenatis',
      startsIn: '23 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 18,
      name: 'Design',
      status: 'Venenatis sem',
      startsIn: '1 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 19,
      name: 'Interior Design',
      status: 'Sed venenatis, sem',
      startsIn: '2 Days',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 20,
      name: 'UI/UX Design',
      status: 'Sed venenatis',
      startsIn: '23 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 21,
      name: 'Design',
      status: 'Venenatis sem',
      startsIn: '1 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 22,
      name: 'Interior Design',
      status: 'Sed venenatis, sem',
      startsIn: '2 Days',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 23,
      name: 'UI/UX Design',
      status: 'Sed venenatis',
      startsIn: '23 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 24,
      name: 'Design',
      status: 'Venenatis sem',
      startsIn: '1 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 25,
      name: 'Interior Design',
      status: 'Sed venenatis, sem',
      startsIn: '2 Days',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 26,
      name: 'UI/UX Design',
      status: 'Sed venenatis',
      startsIn: '23 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    },
    {
      id: 27,
      name: 'Design',
      status: 'Venenatis sem',
      startsIn: '1 Hours',
      participants: group,
      date: 'Aug 11,2023',
      progress: <Progress />
    }
  ]

  return <Table data={data} rows={10} columns={12} />
}

export default Meetings
