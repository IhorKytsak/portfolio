import { Modal, useTheme, IconButton, Box, Slide } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { useEffect } from 'react'
import { useState } from 'react'

export const CustomModalAnimated = ({
  open,
  handleClose,
  children,
  sx,
  ariaLable,
  closeOnParentClick = false,
  showCloseButton = false,
}) => {
  const theme = useTheme()
  const [modalHeight, setModalHeight] = useState('100vh')

  useEffect(() => {
    const updateModalHeight = () => {
      const vh = window.innerHeight * 0.01
      setModalHeight(`${vh * 100}px`)
    }

    updateModalHeight() // Initial calculation
    window.addEventListener('resize', updateModalHeight)

    return () => window.removeEventListener('resize', updateModalHeight)
  }, [])

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={`${ariaLable}-title`}
      aria-describedby={`${ariaLable}-description`}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100000,
      }}
    >
      <Slide
        onClick={(e) => {
          e.stopPropagation()
        }}
        direction='right'
        in={open}
        mountOnEnter
        unmountOnExit
      >
        <Box
          onClick={(e) => {
            if (closeOnParentClick) {
              e.stopPropagation()
              handleClose()
            }
          }}
          sx={{
            // minHeight: '100vh',
            height: modalHeight,
            outline: 'none',
            ...sx,
            position: 'relative',
            maxWidth: '100vw',
            bgcolor: theme.palette.background.paper,
          }}
        >
          {children}

          {/* Close Button */}
          {showCloseButton && (
            <IconButton
              onClick={(e) => {
                e.stopPropagation()
                handleClose()
              }}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 100,
                color: theme.palette.common.black,
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Box>
      </Slide>
    </Modal>
  )
}
