import React, { useState } from "react";
import StepWizard from 'react-step-wizard';
import { MENU_STEP } from "../constants/form";
import AddResources from "../components/AddResources";
import AddResourcesStep2 from "../components/AddResourcesStep2";
import PersonalInfo from "../components/PersonalInfo";
import { Box } from "@mui/material";
import Navigation from "../shared/components/Navigation";
import Footer from "../shared/components/Footer";

const HomePage = () => {
  const [prevStepList, setPrevStepList] = useState([]);
  const [rootStep, setRootStep] = useState(MENU_STEP.HOME);
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
    <Box
      sx={{
        margin: "0 auto",
        width: "368px",
        boxShadow: "0px 0px 20px rgba(38, 38, 38, 0.2)",
        borderRadius: "16px 16px 16px 16px",
        background: "#f7f8fa",
      }}
    >
      <Navigation />
      <StepWizard initialStep={rootStep} isLazyMount key={rootStep}>
        <AddResources
          formData={formData}
          setFormData={setFormData}
          setRootStep={setRootStep}
          setPrevStepList={setPrevStepList}
        />
        <AddResourcesStep2
          formData={formData}
          prevStepList={prevStepList}
          setFormData={setFormData}
          setRootStep={setRootStep}
          setPrevStepList={setPrevStepList}
        />
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          setRootStep={setRootStep}
        />
      </StepWizard>
      <Footer />
    </Box>
  );
};

export default HomePage;



