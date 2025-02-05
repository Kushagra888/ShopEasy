import React, { createContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50',
            light: '#8BC34A',
            dark: '#388E3C',
            contrastText: '#fff',
        },
        secondary: {
            main: '#388E3C',
            light: '#8BC34A',
            dark: '#1B5E20',
            contrastText: '#fff'
        },
        error: {
            main: '#D32F2F',
        },
        background: {
            default: '#f5f5f5',
            paper: '#fff',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 4,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
});

export const TemplateContext = createContext(null);

const TemplateProvider = ({ children }) => {
    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}

export default TemplateProvider;