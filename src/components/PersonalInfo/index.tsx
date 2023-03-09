import { ArrowBackIos } from "@mui/icons-material";
import { Box, Typography, TextField, Button } from "@mui/material";
import { MENU_STEP } from "../../constants/form";

const PersonalInfo = (
  {
    formData,
    prevStepList,
    setFormData,
    setRootStep,
    setPrevStepList,
    isLogin,
    userInfo,
    onSubmit,
  }: {
    formData: any,
    prevStepList: any,
    setFormData: (state: any) => any,
    setRootStep: any,
    setPrevStepList: any,
    isLogin: any,
    userInfo: any,
    onSubmit: any,
  }) => {
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
          個人資訊 Personal Information
        </Typography>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
            color: "#536166",
          }}>
          歡迎留下你的個人資訊，你的名稱將會顯示在資源頁面上，讓其他使用者能認識身為貢獻者的你。You are welcome to leave your personal information, your name will be displayed on the resource page, so that other users can know you as a contributor.
        </Typography>
      </Box>

      <Box
        component="ul"
        sx={{ width: '100%' }}
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
          <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>您的名稱 Your Name</Typography>
          <TextField
            sx={{ width: "100%", marginTop: "10px", backgroundColor: "#fff" }}
            value={formData.userName}
            onChange={(event) => setFormData((state: any) => ({ ...state, userName: event.target.value }))}
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
            sx={{ width: "100%", marginTop: "10px", backgroundColor: "#fff" }}
            value={formData.email}
            onChange={(event) => setFormData((state: any) => ({ ...state, email: event.target.value }))}
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
          <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>您的個人頁面 Your Page</Typography>
          <Typography sx={{ color: "#293A3D", fontSize: '12px', fontWeight: 700, margin: "8px 0" }}>如果你想要推廣自己的個人頁面，我們可以幫你推廣，未來預設為使用者的個人頁面 If you want to promote your own personal page, we can help you promote it, and it will be defaulted as the user's personal page in the future.</Typography>
          <TextField
            sx={{ width: "100%", marginTop: "10px", backgroundColor: "#fff" }}
            value={formData.userUrl}
            onChange={(event) => setFormData((state: any) => ({ ...state, userUrl: event.target.value }))}
          />
        </Box>
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
            backgroundColor: "#16b9b3 !important",
            color: "#ffffff",
            borderRadius: "20px",
            border: "#ffffff",
            boxShadow: "0px 4px 10px rgba(89, 182, 178, 0.5)",
          }}
          onClick={() => onSubmit(MENU_STEP.ADD_PERSONAL_INFO)}
        >
          下一步 Next
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
