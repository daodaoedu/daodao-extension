import { ArrowBackIos } from "@mui/icons-material";
import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useImperativeHandle, useRef, useState, useCallback, useEffect } from "react";
import { CATEGORIES, MENU_STEP } from "../../constants/form";
import { firebaseConfig } from "../../constants/config";
import { initializeApp } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

const PersonalInfo = (
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
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const [user] = useAuthState(auth);
  const onLogout = useCallback(() => {

    const auth = getAuth();
    auth.signOut()
      .then((result) => {
        toast.success("登出成功！");
        setRootStep(MENU_STEP.HOME);
        setPrevStepList((state: any) => []);
      })
      .catch((error) => {
        console.log('error', error);
        toast.error('登出失敗', {
          style: {
            marginTop: '70px',
          },
        });
      });


    // setRootStep(MENU_STEP.FINISHED_ADD_RESOURCE);
    // setPrevStepList((state: any) => [...state, MENU_STEP.ADD_PERSONAL_INFO]);
  }, [setPrevStepList, setRootStep]);

  useEffect(() => {
    setUserName(user?.displayName as string);
    setEmail(user?.email as string);
  }, [user]);

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
          個人檔案
        </Typography>
      </Box>
      <Box
        component="ul"
        sx={{ width: '100%', marginTop: "20px" }}
      >
        <Box
          component="li"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>個人資訊</Typography>
          <TextField
            disabled
            sx={{ width: "100%", marginTop: "10px", backgroundColor: "#fff" }}
            value={userName}
            onChange={(event) => setUserName((event.target.value))}
          />
        </Box>
        <Box
          component="li"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: "20px"
          }}
        >
          <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>您的 E-mail</Typography>
          <TextField
            disabled
            sx={{ width: "100%", marginTop: "10px", backgroundColor: "#fff" }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
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
              color: "#1F4645",
              fontSize: "16px",
              borderRadius: "20px",
              border: "#ffffff",
              boxShadow: "0px 4px 10px rgba(89, 182, 178, 0.5)",
              backgroundColor: "#fff !important",
            }}
            onClick={onLogout}
          >
            登出
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
