import React, { useState } from "react";
import StepWizard from 'react-step-wizard';
import { MENU_STEP } from "../constants/form";
import AddResources from "../components/AddResources";
import AddResourcesStep2 from "../components/AddResourcesStep2";
import { Box } from "@mui/material";
import Navigation from "../shared/components/Navigation";
import Footer from "../shared/components/Footer";

const HomePage = () => {
  const [rootStep, setRootStep] = useState(MENU_STEP.HOME);

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
        <AddResources setRootStep={setRootStep} />
        <AddResourcesStep2 setRootStep={setRootStep} />
      </StepWizard>
      <Footer />
    </Box>
  );
};

export default HomePage;



