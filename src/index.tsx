import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from "./shared/styles/theme";
import GlobalStyles from "./shared/styles/Global";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* For custum reset css */}
      <GlobalStyles />
      {/* mui normalize css */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
