import { ArrowBackIos } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import { MENU_STEP } from "../../constants/form";
import toast from 'react-hot-toast';

const Login = (
  {
    formData,
    prevStepList,
    setFormData,
    setRootStep,
    setPrevStepList,
    setUserInfo,
    setIsLogin,
  }: {
    formData: any,
    prevStepList: any,
    setFormData: (state: any) => any,
    setRootStep: any,
    setPrevStepList: any,
    setUserInfo: any,
    setIsLogin: any,
  }) => {

  const onLogin = () => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      console.log("token: ", token);
      fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`, { method: "GET" })
        .then(res => res.json())
        .then((result) => {
          console.log("result: ", result);
          if (Boolean(result?.error)) {
            throw new Error(result?.error);
          } else {
            setUserInfo(result);
            setIsLogin(true);
            chrome.storage.sync.set({
              'userInfo': result
            });
            toast.success(`歡迎登入！ ${result?.name}`);
            setRootStep(MENU_STEP.HOME);
            setPrevStepList((state: any) => []);
          }
        })
        .catch((error) => {
          toast.error('登入失敗，請稍候重試');
          console.log("error: ", error);
          chrome.storage.sync.remove("userInfo");
          chrome.identity.removeCachedAuthToken({ token });
        })
    })
  }

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
