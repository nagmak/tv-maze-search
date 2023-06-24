import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "src/styles/global.css"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    breakpoints: {
      values: {
        xs: 0,
        s: 640,
        m: 1024,
        lg: 1200,
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
