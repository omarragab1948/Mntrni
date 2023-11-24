// components/Layout.js

import React from 'react'
import Head from 'next/head'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Link from 'next/link'

const Layout = ({ children, title = 'Next.js App' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Grid container spacing={1}>
          <Grid xs={12} md={3} lg={2}>
            <Box
              sx={{
                height: '100%',
                position: 'relative',
                bottom: { lg: '63px' },
                zIndex: { lg: '1000000' },
                paddingX: '10px'
              }}
            >
              <Typography sx={{ fontSize: '20px', color: '#00061F', fontWeight: '700' }}>Spaces</Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'

                  // alignItems: 'center'
                }}
              >
                <Link
                  href={''}
                  style={{
                    marginTop: '10px',
                    textDecoration: 'none',
                    color: '#6F7885',
                    fontSize: '17px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <ArrowRightIcon />
                  Interior Design
                </Link>
                <Link
                  href={''}
                  style={{
                    textDecoration: 'none',
                    color: '#6F60AD',
                    fontSize: '17px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    margin: '15px 0'
                  }}
                >
                  <ArrowRightIcon />
                  My Space
                </Link>
                <Link
                  href={''}
                  style={{
                    textDecoration: 'none',
                    color: '#6F7885',
                    fontSize: '17px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '30px'
                  }}
                >
                  <ArrowRightIcon />
                  New Work
                </Link>
              </Box>
              <Button sx={{ border: '1px dashed  #6C72C2', borderRadius: '15px', width: '150px' }}>+ Add Space</Button>
            </Box>
          </Grid>
          {children}
        </Grid>
      </main>
    </div>
  )
}

export default Layout
