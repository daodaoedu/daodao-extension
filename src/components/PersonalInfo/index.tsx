import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useImperativeHandle, useRef, useState, useCallback } from "react";
import { CATEGORIES, MENU_STEP } from "../../constants/form";

const PersonalInfo = (
  {
    formData,
    setFormData,
    setRootStep,
  }: {
    formData: any,
    setFormData: (state: any) => any,
    setRootStep: any,
  }) => {

  const onSubmit = useCallback(() => {
    setRootStep(MENU_STEP.ADD_RESOURCE_STEP2);
  }, [setRootStep]);

  return (
    <Box>
      <Box
        sx={{
          fontSize: "22px",
          fontWeight: 700,
          lineHeight: "140%",
          color: "#293a3d",
          textAlign: "center",
          margin: "24px 0 24px 0",
        }}>
        <Typography
          component="h1"
          sx={{
            fontWeight: 700,
            fontSize: "22px",
            lineHeight: "140%",
            color: "#293A3D",
          }}
        >
          新增學習資源
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            width: "320px",
            height: "40px",
            backgroundColor: "#16b9b3 !important",
            color: "#ffffff",
            borderRadius: "20px",
            border: "#ffffff",
            boxShadow: "0px 4px 10px rgba(89, 182, 178, 0.5)",
          }}
          onClick={onSubmit}
        >
          下一步
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
