import styled from "@emotion/styled";
import { Box } from "@mui/material";


const Navigation = () => {
  return (
    <Box
      sx={{
        background: "#293a3d",
        padding: "11px 0 11px 31px",
        borderRadius: "16px 16px 0 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "68px",
        }}
        src="img/daodao_logo.png"
        alt="daodao_logo"
      />
      <Box component="a" href="#">
        <Box
          component="img"
          sx={{
            width: "20px",
            margin: "0 21.76px 0 0",
          }}
          src="/img/icon-cancel.svg"
          alt="icon_cancer"
        />
      </Box>
    </Box>
  );
}

export default Navigation;
