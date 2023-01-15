import { createMuiTheme } from '@mui/material/styles';


export default createMuiTheme({
    palette: {
        primary: { // works
          main: '#00d1d7',
          contrastText: '#fff',
        },
        secondary: { // works
          main: '#FF0000',
          contrastText: '#fff',
        },
        companyWhite: {
            backgroundColor: 'transparent',
            color: '#FFFFFF',
        },
        companyBlue: {
            backgroundColor: 'transparent',
            color: '#00d1d7',
        },
        companyRed: { 
            backgroundColor: 'transparent',
            color: '#FF6666',
        },
        buttonRed: {
            backgroundColor: '#FF6666', 
            color: 'white',
        },
        companyGreen: { 
            backgroundColor: 'transparent', 
            color: '#00b387',
        },
        buttonGreen: {
            backgroundColor: '#00b387', 
            color: 'white',
        },
        companyYellow: { 
            backgroundColor: '#ffde00', 
            color: '#ffde00',
        },
    },
});