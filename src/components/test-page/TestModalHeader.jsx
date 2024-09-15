import {
  Box,
  useTheme,
  IconButton,
  Typography,
  useMediaQuery,
  Divider,
} from '@mui/material'
import { useSwiper } from 'swiper/react'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'

export const TestModalHeader = ({
  currentIndex,
  scanLength,
  slot,
  handleHeaderHeight,
}) => {
  const theme = useTheme()
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef(null)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const updateHeaderHeight = () => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }

  useEffect(() => {
    // Initial measurement
    updateHeaderHeight()

    // Add resize event listener
    window.addEventListener('resize', updateHeaderHeight)

    return () => {
      // Cleanup event listener
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [headerRef])

  useEffect(() => {
    if (headerHeight) {
      handleHeaderHeight(headerHeight)
    }
  }, [headerHeight, handleHeaderHeight])

  return (
    <div
      ref={headerRef}
      slot={slot}
      style={{
        position: 'sticky',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // pt: 4,
        top: `calc(env(safe-area-inset-top) + 0px)`,
        zIndex: 102,
        gap: '3px',
        width: '100%',
        maxWidth: '800px',
        backgroundColor: theme.palette.background.paper,
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '32px 32px 0px',
        }}
      >
        <Typography
          variant='h6'
          sx={{ textAlign: 'center', fontSize: isMobile ? '18px' : '24px' }}
        >
          {'blockchain-verified-modal-title'}
        </Typography>
        <Box
          sx={{
            width: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ICOBN
        </Box>
      </Box>

      {scanLength > 1 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '32px',
            pb: '16px',
          }}
        >
          <IconButton sx={{ p: 0 }} onClick={() => {}}>
            <KeyboardArrowLeft fontSize='large' />
          </IconButton>
          <Typography variant='h6' sx={{ textAlign: 'center', flexGrow: 1 }}>
            {currentIndex + 1} of {scanLength}
          </Typography>
          <IconButton sx={{ p: 0 }} onClick={() => {}}>
            <KeyboardArrowRight fontSize='large' />
          </IconButton>
        </Box>
      )}

      <Divider sx={{ borderColor: 'rgba(0,0,0,0.08);', width: '100%' }} />
    </div>
  )
}
