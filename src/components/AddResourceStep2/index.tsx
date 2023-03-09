import { ArrowBackIos } from "@mui/icons-material";
import { Box, Typography, Button, TextareaAutosize } from "@mui/material";
import { useMemo } from "react";
import { FEE, LEARNIGN_STEP, MENU_STEP } from "../../constants/form";

const AddResourcesStep2 = (
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
    prevStepList: string[],
    setFormData: (state: any) => any,
    setRootStep: any,
    setPrevStepList: any,
    isLogin: any,
    userInfo: any,
    onSubmit: any,
  }) => {

  const isDisabled = useMemo(() => (
    formData.feeType === ''
    || formData.ageList.length === 0
    || formData.about === '')
    , [formData]);

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
          新增學習資源
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: '20px',
            width: "100%",
          }}
        >
          <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>費用</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginTop: "10px"
            }}
          >
            {FEE.map(({ label, value }) => (
              <Box
                key={label}
                onClick={() => {
                  setFormData((state: any) => ({ ...state, feeType: value }));
                }}
                sx={{
                  backgroundColor: '#fff',
                  border: '1px solid #DBDBDB',
                  borderRadius: '8px',
                  padding: '10px',
                  width: 'calc(calc(100% - 16px) / 3)',
                  display: 'flex',
                  justifyItems: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  ...(formData.feeType === value
                    ? {
                      backgroundColor: '#DEF5F5',
                      border: '1px solid #16B9B3',
                    }
                    : {}),
                }}
              >
                <Typography sx={{ margin: 'auto' }}>{label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: '20px',
            width: "100%",
          }}
        >
          <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>適合年齡</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: "column",
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginTop: "10px"
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}>
              {LEARNIGN_STEP.slice(0, 2).map(({ label, value }) => (
                <Box
                  key={label}
                  onClick={() => {
                    if (formData.ageList.includes(label)) {
                      setFormData((state: any) => ({ ...state, ageList: state.ageList.filter((data: any) => data !== label) })
                      );
                    } else {
                      setFormData((state: any) => ({ ...state, ageList: [...state.ageList, label] }));
                    }
                  }}
                  sx={{
                    backgroundColor: '#fff',
                    border: '1px solid #DBDBDB',
                    borderRadius: '8px',
                    padding: '10px',
                    width: 'calc(calc(100% - 16px) / 2)',
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    ...(formData.ageList.includes(label)
                      ? {
                        backgroundColor: '#DEF5F5',
                        border: '1px solid #16B9B3',
                      }
                      : {}),
                  }}
                >
                  <Typography sx={{ margin: 'auto' }}>{label}</Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}>
              {LEARNIGN_STEP.slice(2).map(({ label, value }) => (
                <Box
                  key={label}
                  onClick={() => {
                    if (formData.ageList.includes(label)) {
                      setFormData((state: any) => ({ ...state, ageList: state.ageList.filter((data: any) => data !== label) })
                      );
                    } else {
                      setFormData((state: any) => ({ ...state, ageList: [...state.ageList, label] }));
                    }
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    border: '1px solid #DBDBDB',
                    borderRadius: '8px',
                    padding: '10px',
                    width: 'calc(calc(100% - 16px) / 2)',
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    ...(formData.ageList.includes(label)
                      ? {
                        backgroundColor: '#DEF5F5',
                        border: '1px solid #16B9B3',
                      }
                      : {}),
                  }}
                >
                  <Typography sx={{ margin: 'auto' }}>{label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginTop: '20px',
            width: "100%",
          }}
        >
          <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>資源介紹</Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginTop: "10px"
            }}
          >
            <TextareaAutosize
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '10px',
                borderRadius: '8px',
                borderColor: 'rgb(0,0,0,0.87)',
              }}
              placeholder="寫下關於資源的介紹，讓其他島民更認識這個資源喔！也可以多描述一下使用上的經驗！"
              value={formData.about}
              onChange={(event) => {
                setFormData((state: any) => ({ ...state, about: event.target.value }));
              }}
            />
          </Box>
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
            "&[disabled]": {
              backgroundColor: "#eee !important",
            }
          }}
          onClick={() => onSubmit(MENU_STEP.ADD_RESOURCE_STEP2)}
          disabled={isDisabled}
        >
          下一步
        </Button>
      </Box>
    </Box>
  );
};

export default AddResourcesStep2;
