import createMuiTheme from 'material-ui/styles/createMuiTheme';
import indigo from 'material-ui/colors/indigo';
import blue from 'material-ui/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    }
  },
});

export default theme;
