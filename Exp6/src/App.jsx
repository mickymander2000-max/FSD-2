import Form from './Form'
import { CssBaseline, Box, ThemeProvider, createTheme } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff',
      light: '#4dd9ff',
      dark: '#0099cc',
    },
    secondary: {
      main: '#ff006e',
      light: '#ff4494',
      dark: '#c2004e',
    },
    background: {
      default: '#0a0e27',
      paper: '#1a1f3a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
    success: {
      main: '#00d897',
    },
    error: {
      main: '#ff6b6b',
    },
  },
  typography: {
    fontFamily: '"Sora", "Segoe UI", sans-serif',
    h4: {
      fontWeight: 700,
      background: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(0, 212, 255, 0.1)',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundImage: 'linear-gradient(135deg, #00d4ff 0%, #ff006e 100%)',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 212, 255, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          pt: 5,
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0d1629 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-50%',
            left: '-50%',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(255, 0, 110, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Form />
      </Box>
    </ThemeProvider>
  )
}

export default App
