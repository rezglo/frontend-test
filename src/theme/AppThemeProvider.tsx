import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

interface Props {
  children: React.ReactElement
}

const rootElement = () => document.getElementById('root')

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '18px',
          color: 'black',
        },
        sizeSmall: {
          borderRadius: '15px',
        },
        sizeLarge: {
          borderRadius: '21px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover, &:focus': {
            boxShadow: 'none',
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 6,
          boxShadow: 'none',
          border: '1px solid #e8e3e3',
        },
      },
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          padding: '0px',
        },
      },
    },
  },
})

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
