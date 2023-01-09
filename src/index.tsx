import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from "./shared/styles/theme";
import GlobalStyles from "./shared/styles/Global";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* For custum reset css */}
      <GlobalStyles />
      {/* mui normalize css */}
      <CssBaseline />
      <Toaster
        position="top-center"
        containerStyle={{ background: 'none', marginTop: '80px' }}
        toastOptions={{
          style: {
            color: '#16b9b3',
            border: '1px solid #16b9b3',
            marginTop: '50px',
          },
          iconTheme: {
            primary: '#16b9b3',
            secondary: '#16b9b3',
          },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
