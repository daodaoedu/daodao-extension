import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "@emotion/styled";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Typography } from "@mui/material";
import { CATEGORIES, MENU_STEP } from "../../constants/form";

const ContainerWrapper = styled.div`
  /* width: 600px; */
  .wrap {
    margin: 0 auto;
    width: 368px;
    box-shadow: 0px 0px 20px rgba(38, 38, 38, 0.2);
    border-radius: 16px 16px 16px 16px;
    background: #f7f8fa;
  }
  .bar {
    background: #293a3d;
    padding: 11px 0 11px 31px;
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bar-img-top {
    width: 68px;
  }
  .bar-img-down {
    width: 20px;
    margin: 0 21.76px 0 0;
  }
  .banner {
    font-size: 22px;
    font-weight: 700;
    line-height: 140%;
    color: #293a3d;
    text-align: center;
    margin: 24px 0 24px 0;
  }
  .content {
    margin: 0 24px 24px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-item {
    width: 320px;
    height: 40px;
    color: #536166;
    margin: 11px 0 20px 0;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
  }

  .footer {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    padding: 14px 27px 14px 0;
    color: #536166;
    border-top: 1px solid #dbdbdb;
    margin-top: 24px;
  }
  .section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
    &:hover {
      background-color: #dbdbdb;
      border-radius: 4px;
      margin-left: 272px;
    }
  }
  .user-icon {
    padding-right: 10.5px;
  }
  /* background-color: black; */
`;

const AddResources = ({ setRootStep }: { setRootStep: any }) => {
  const [formData, setFormData] = useState<
    {
      name: string,
      categoryList: { label: string; key: string; value: string; image: string; }[],
      areaList: { label: string; key: string; value: string; image: string; }[],
    }>({
      name: "",
      categoryList: [],
      areaList: [],
    });

  return (
    <ContainerWrapper>
      <div className="banner">
        <h1>新增學習資源</h1>
      </div>
      <div className="content">
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
            <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>名稱</Typography>
            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              value={formData.name}
              onChange={(event) => setFormData((state) => ({ ...state, name: event.target.value }))}
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
            <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>類型</Typography>
            <Autocomplete
              multiple
              value={formData.categoryList}
              onChange={(_, newValue) => {
                setFormData(state => ({ ...state, categoryList: newValue }));
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
              sx={{ width: "100%" }}
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
            <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>領域</Typography>
            <Autocomplete
              multiple
              value={formData.areaList}
              onChange={(_, newValue) => {
                setFormData(state => ({ ...state, areaList: newValue }));
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
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField
                  {...params}
                />
              )}
            />
          </Box>
        </Box>
      </div>
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
          onClick={() => setRootStep(MENU_STEP.ADD_RESOURCE_STEP2)}
        >
          下一步
        </Button>
      </Box>
    </ContainerWrapper>
  );
};

export default AddResources;
