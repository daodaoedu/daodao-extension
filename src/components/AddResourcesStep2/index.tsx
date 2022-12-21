import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "@emotion/styled";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Typography } from "@mui/material";
import { CATEGORIES } from "../../constants/form";

const ContainerWrapper = styled.div`
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
`;

const AddResourcesStep2 = ({ setRootStep }: { setRootStep: any }) => {
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

    </ContainerWrapper>
  );
};

export default AddResourcesStep2;
