import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Box
        component="footer"
        sx={{
          fontFamily: "Noto Sans TC",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "140%",
          padding: "14px 27px 14px 0",
          color: "#536166",
          borderTop: "1px solid #dbdbdb",
          marginTop: "24px"
        }}>
        <Box
          component="section"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Box
            component="img"
            sx={{
              paddingRight: "10.5px"
            }}
            src="img/icon-user.svg"
            alt="icon-user"
          />
          <Typography>匿名</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
