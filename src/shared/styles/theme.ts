// 👇️ ts-nocheck disables type checking for entire file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// https://github.com/mui-org/material-ui/blob/master/examples/nextjs/src/theme.js
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      "'-apple-system', 'PingFang TC', 'NotoSans TC', 'sans-serif'",
    ],
    // fontFamily: ["PingFang TC", "NotoSans TC"],
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 567,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: "span",
          body2: "span",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#37b9eb",
      light: "#defaff",
      dark: "#007bbb",
    },
    link: {
      main: "#1461ad",
      contrastText: "#fff",
    },
    text: {
      main: "#0f0f0f",
    },
    helper: {
      main: "#71717a",
    },
  },
});

export default theme;
