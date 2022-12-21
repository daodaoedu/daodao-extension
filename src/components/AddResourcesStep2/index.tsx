import { ArrowBackIos } from "@mui/icons-material";
import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useImperativeHandle, useRef, useState, useCallback } from "react";
import { CATEGORIES, MENU_STEP } from "../../constants/form";

const AddResourcesStep2 = (
  {
    formData,
    prevStepList,
    setFormData,
    setRootStep,
    setPrevStepList,
  }: {
    formData: any,
    prevStepList: string[],
    setFormData: (state: any) => any,
    setRootStep: any,
    setPrevStepList: any,
  }) => {

  console.log("prevStepList: ", prevStepList);

  const onSubmit = useCallback(() => {
    setRootStep(MENU_STEP.ADD_PERSONAL_INFO);
    setPrevStepList((state: any) => [...state, MENU_STEP.ADD_RESOURCE_STEP2]);
  }, [setPrevStepList, setRootStep]);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          fontSize: "22px",
          fontWeight: 700,
          lineHeight: "140%",
          color: "#293a3d",
          textAlign: "center",
          margin: "24px 0 24px 0",
        }}>
        <Box
          onClick={() => {
            const step = prevStepList.pop();
            setRootStep(step);
            setPrevStepList(prevStepList);
          }}
          sx={{
            position: 'absolute',
            left: "16px",
            top: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#fff",
            borderRadius: "100%",
            boxShadow: "0px 4px 5px rgba(196, 194, 193, 0.4)",
            width: "32px",
            height: "32px",
            cursor: "pointer",

          }}>
          <ArrowBackIos sx={{ marginLeft: "6px", fontSize: "18px" }} />
        </Box>
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

export default AddResourcesStep2;
