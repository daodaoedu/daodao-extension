import { Box, Skeleton, Typography } from "@mui/material";
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  getAuth,
} from 'firebase/auth';
import { firebaseConfig } from "../../../constants/config";
import { initializeApp } from 'firebase/app';
import { MENU_STEP } from "../../../constants/form";

const Footer = ({ currentStep, setRootStep, setPrevStepList }: { currentStep: any, setRootStep: any, setPrevStepList: any }) => {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const [user, isLoading] = useAuthState(auth);

  const isLogin = useMemo(() => user !== null, [user]);
  const [userName, setUserName] = useState("匿名");

  useLayoutEffect(() => {
    setUserName(user?.displayName as any || '匿名');
  }, [user]);

  const onGoToProfile = useCallback(() => {
    setPrevStepList((state: any) => [...state, currentStep]);
    setRootStep(MENU_STEP.PROFILE);
  }, [currentStep, setPrevStepList, setRootStep]);

  const onLogin = useCallback(() => {
    setPrevStepList((state: any) => [...state, currentStep]);
    setRootStep(MENU_STEP.LOGIN);
  }, [currentStep, setPrevStepList, setRootStep]);

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
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "5px",
            cursor: 'pointer'
          }}
          onClick={() => {
            if (isLogin) {
              onGoToProfile();
            } else {
              onLogin();
            }
          }}
        >
          {
            isLoading
              ? <>
                <Box
                  component="img"
                  sx={{
                    paddingRight: "10.5px"
                  }}
                  src="img/icon-user.svg"
                  alt="icon-user"
                />
                <Skeleton variant="text" width={60} />
              </>
              : (
                <>
                  <Box
                    component="img"
                    sx={{
                      paddingRight: "10.5px"
                    }}
                    src="img/icon-user.svg"
                    alt="icon-user"
                  />
                  <Typography>{userName}</Typography>
                  {
                    isLogin
                      ? <></>
                      : (
                        <>
                          <Typography>
                            {` / `}
                            登入
                          </Typography>
                        </>
                      )
                  }
                </>
              )
          }
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
