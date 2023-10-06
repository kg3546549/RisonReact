import { createTheme } from "@mui/material/styles";
import { makeStyles, createStyles } from '@mui/styles';

export const theme = createTheme({
  typography: {
    fontWeightRegular: 400,
    
  },
	palette: {
      primary: {
        // main: "#f2f0eb",
        main: "#f2f0eb",        
        contrastText: '#4C4637',
        // contrastText: '#ffffff',
      },
      secondary: {
        main: "#fcba03",
        // main:"#ffffff",
      },
    }
    
});

export const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },

  MenuButton: {
    borderRadius:5,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: 'grey',
    },
  },

  AdvertisingImg: {
    margin : 'auto',
    position : 'absolute',
    top: '50%',
    left : '50%',
    transform : "translate(-50%,-50%)",
    height : 500,
  }

})