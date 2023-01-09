import React, { useCallback, useLayoutEffect, useMemo } from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Typography } from "@mui/material";
import { CATEGORIES, MENU_STEP } from "../../constants/form";

const FinishedAddResource = (
  {
    formData,
    prevStepList,
    setFormData,
    setRootStep,
    setPrevStepList,
    userInfo,
    isLogin,
  }: {
    formData: any,
    prevStepList: any,
    setFormData: (state: any) => any,
    setRootStep: any,
    setPrevStepList: any,
    userInfo: any,
    isLogin: any,
  }) => {

  const isDisabled = useMemo(() => (
    formData.feeType === ''
    && formData.ageList.length === 0
    && formData.about === '')
    , [formData]);



  const onClose = useCallback(() => {
    setRootStep(MENU_STEP.HOME);
    setPrevStepList((state: any) => []);
  }, [setRootStep, setPrevStepList]);

  return (
    <Box sx={{ padding: "24px", }}>
      <Box
        sx={{
          fontSize: "22px",
          fontWeight: 700,
          lineHeight: "140%",
          color: "#293a3d",
          textAlign: "center",

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
          新增完成！
        </Typography>
      </Box>
      <Box sx={{ margin: "20px 0 20px 0" }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
            color: "#536166",
          }}>
          感謝你貢獻學習資源！
          我們會接著進行審核，審核通過後就就可以在網站上看到你新增的資源囉！
        </Typography>
      </Box>
      <Box sx={{ margin: "24px 0", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
        <Typography
          component="a"
          href="https://www.daoedu.tw"
          target="_blank"
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
            color: "#16B9B3",
            textDecorationLine: "underline",
            textAlign: 'center',

          }}>
          查看所有資源
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <Button
          sx={{
            width: "320px",
            height: "40px",
            // backgroundColor: "#16b9b3 !important",
            color: "#1F4645",
            fontSize: "16px",
            borderRadius: "20px",
            border: "#ffffff",
            boxShadow: "0px 4px 10px rgba(89, 182, 178, 0.5)",
            backgroundColor: "#fff !important",
          }}
          onClick={onClose}
        // disabled={isDisabled}
        >
          關閉
        </Button>
      </Box>
    </Box>
  );
};

export default FinishedAddResource;
