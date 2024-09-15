import { Modal, useTheme, IconButton, Box, Slide } from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

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
            height: 'calc(100vh - env(safe-area-inset-bottom))',
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
