import React, { useCallback, useMemo } from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Typography } from "@mui/material";
import { CATEGORIES, RESOURCE_TYPES, MENU_STEP } from "../../constants/form";

const AddResources = (
  {
    formData,
    setFormData,
    setRootStep,
    setPrevStepList,
  }: {
    formData: any,
    setFormData: (state: any) => any,
    setRootStep: any,
    setPrevStepList: any,
  }) => {

  const isDisabled = useMemo(() => (
    formData.feeType === ''
    && formData.ageList.length === 0
    && formData.about === '')
    , [formData]);

  const onSubmit = useCallback(() => {
    setRootStep(MENU_STEP.ADD_RESOURCE_STEP2);
    setPrevStepList((state: any) => [...state, MENU_STEP.HOME]);
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
          新增學習資源
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box
            component="li"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>資源名稱</Typography>
            <TextField
              sx={{ width: "100%", marginTop: "10px", backgroundColor: "#fff" }}
              value={formData.name}
              onChange={(event) => setFormData((state: any) => ({ ...state, name: event.target.value }))}
            />
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: "20px",
            }}
          >
            <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>類型（複選）</Typography>
            <Autocomplete
              multiple
              value={formData.categoryList}
              onChange={(_, newValue) => {
                setFormData((state: any) => ({ ...state, categoryList: newValue }));
              }}
              options={RESOURCE_TYPES}
              getOptionLabel={(option) => option.label}
              renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip
                    label={option.label}
                    variant="outlined"
                    {...getTagProps({ index })}
                  />
                ))
              }
              sx={{ width: "100%", marginTop: "10px", backgroundColor: "#fff", cursor: "pointer" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                />
              )}
            />
          </Box>
          <Box
            component="li"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: "20px",
            }}>
            <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>領域（複選）</Typography>
            <Autocomplete
              multiple
              value={formData.areaList}
              onChange={(_, newValue) => {
                setFormData((state: any) => ({ ...state, areaList: newValue }));
              }}
              options={CATEGORIES}
              getOptionLabel={(option) => option.label}
              renderTags={(tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip
                    label={option.label}
                    variant="outlined"
                    {...getTagProps({ index })}
                  />
                ))
              }
              sx={{ width: "100%", marginTop: "10px", backgroundColor: "#fff", cursor: "pointer" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                />
              )}
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
          onClick={onSubmit}
        // disabled={isDisabled}
        >
          下一步
        </Button>
      </Box>
    </Box>
  );
};

export default AddResources;
