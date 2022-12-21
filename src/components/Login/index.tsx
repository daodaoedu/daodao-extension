import { ArrowBackIos } from "@mui/icons-material";
import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useImperativeHandle, useRef, useState, useCallback } from "react";
import { CATEGORIES, MENU_STEP } from "../../constants/form";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

const Login = (
  {
    formData,
    prevStepList,
    setFormData,
    setRootStep,
    setPrevStepList,
  }: {
    formData: any,
    prevStepList: any,
    setFormData: (state: any) => any,
    setRootStep: any,
    setPrevStepList: any,
  }) => {
  const provider = new GoogleAuthProvider();
  const onLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // console.log('result', result);
        const { displayName } = result.user;
        const db = getFirestore();
        const docRef = doc(db, 'user', result?.user?.uid);
        getDoc(docRef).then((docSnap) => {
          toast.success(`歡迎登入！ ${displayName}`);
          setRootStep(MENU_STEP.HOME);
          setPrevStepList((state: any) => []);
        });
      })
      .catch((error) => {
        console.log('error', error);
        toast.error('登入失敗', {
          style: {
            marginTop: '70px',
          },
        });
      });
  };

  return (
    <Box sx={{ padding: "24px", }}>
      <Box
        sx={{
          position: "relative",
          fontSize: "22px",
          fontWeight: 700,
          lineHeight: "140%",
          color: "#293a3d",
          textAlign: "center",
        }}>
        <Box
          onClick={() => {
            const step = prevStepList.pop();
            setRootStep(step);
            setPrevStepList(prevStepList);
          }}
          sx={{
            position: 'absolute',
            left: "0px",
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
          登入
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
          onClick={onLogin}
        // disabled={isDisabled}
        >
          Google 登入
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
