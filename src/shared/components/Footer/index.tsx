import { Box, Skeleton, Typography } from "@mui/material";
import { useCallback, useMemo } from "react";
import { MENU_STEP } from "../../../constants/form";


const Footer = ({ currentStep, setRootStep, setPrevStepList, userInfo, setUserInfo, isLogin, setIsLogin, isLoading, setIsLoading }
  : {
    currentStep: any, setRootStep: any, setPrevStepList: any, userInfo: any, setUserInfo: any, isLogin: any, setIsLogin: any, isLoading: any, setIsLoading: any
  }) => {
  const { name, picture } = useMemo(() => ({
    name: userInfo?.name,
    picture: userInfo?.picture || 'img/icon-user.svg',
  }), [userInfo]);

  const onGoToProfile = useCallback(() => {
    setPrevStepList((state: any) => [...state, currentStep]);
    setRootStep(MENU_STEP.PROFILE);
  }, [currentStep, setPrevStepList, setRootStep]);

  const onLogin = useCallback(() => {
    setPrevStepList((state: any) => [...state, currentStep]);
    setRootStep(MENU_STEP.LOGIN);
  }, [currentStep, setPrevStepList, setRootStep]);

  if (isLoading) {
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
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "5px",
              cursor: 'pointer'
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
            <Skeleton variant="text" width={60} />
          </Box> */}
        </Box>
      </Box>
    )
  }

  if (isLogin) {
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
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "5px",
              cursor: 'pointer'
            }}
            onClick={() => {
              onGoToProfile();
            }}
          >
            <Box
              component="img"
              sx={{
                marginRight: "10.5px",
                borderRadius: "100%",
                flex: "0 0 24px",
              }}
              width={24}
              height={24}
              src={picture}
              alt="icon-user"
            />
            <Typography>{name}</Typography>
          </Box> */}
        </Box>
      </Box>
    );
  }

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
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "5px",
            cursor: 'pointer'
          }}
          onClick={() => {
            onLogin();
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
          <Typography>
            匿名
            {` / `}
            登入
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
}

export default Footer;
