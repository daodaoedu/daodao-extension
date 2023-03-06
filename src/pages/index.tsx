import { useState, useLayoutEffect } from "react";
import StepWizard from 'react-step-wizard';
import { MENU_STEP } from "../constants/form";
import Profile from "../components/Profile";
import Login from "../components/Login";
import AddResource from "../components/AddResource";
import AddResourceStep2 from "../components/AddResourceStep2";
import PersonalInfo from "../components/PersonalInfo";
import FinishedAddResource from "../components/FinishedAddResource";
import { Box } from "@mui/material";
import Navigation from "../shared/components/Navigation";
import Footer from "../shared/components/Footer";

const HomePage = ({
  userInfo, setUserInfo, isLogin, setIsLogin, isLoading, setIsLoading
}: {
  userInfo: any, setUserInfo: any, isLogin: any, setIsLogin: any, isLoading: any, setIsLoading: any
}) => {
  const [prevStepList, setPrevStepList] = useState([]);
  const [rootStep, setRootStep] = useState(MENU_STEP.HOME);
  const [formData, setFormData] = useState<
    {
      name: string,
      categoryList: { label: string; key: string; value: string; image: string; }[],
      areaList: { label: string; key: string; value: string; image: string; }[],
      ageList: { label: string; key: string; value: string; image: string; }[],
      feeType: string,
      about: string,
      userName: string,
      userUrl: string,
      email: string,
      image: string,
      url: string,
      keywords: [],
    }>({
      name: "",
      categoryList: [],
      areaList: [],
      ageList: [],
      feeType: "",
      about: "",
      userName: "",
      userUrl: "",
      email: "",
      image: "",
      url: "",
      keywords: [],
    });

  useLayoutEffect(() => {
    if (typeof chrome?.tabs?.query === 'function') {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tabId = tabs[0].id;

        // https://stackoverflow.com/questions/66549560/executescript-is-undefined-or-not-a-function-in-a-manifestv3-extension
        // https://developer.chrome.com/docs/extensions/reference/scripting/
        chrome.scripting.executeScript({
          target: { tabId: tabId as any },
          func: () => {
            const docTitle = document.title;
            const ogTitle = document.head.querySelector('meta[property="og:title"]')?.getAttribute("content") as any;
            const tagTitle = document.head.querySelector('title')?.innerText;
            const ogSiteName = document.head.querySelector('meta[property="og:site_name"]')?.getAttribute("content") as any;
            const tagDesc = document.head.querySelector('meta[name="description"]')?.getAttribute("content") as any;
            const ogDesc = document.head.querySelector('meta[property="og:description"]')?.getAttribute("content") as any;
            const ogImage = document.head.querySelector('meta[property="og:image"]')?.getAttribute("content") as any;
            const url = document.head.querySelector('meta[property="og:url"]')?.getAttribute("content") as any;
            const keywords = document.head.querySelector('meta[name="keywords"]')?.getAttribute("content") as any;
            const image = document.head.querySelector('meta[name="image"]')?.getAttribute("content") as any;
            const websiteFormData = {
              name: docTitle || tagTitle || ogTitle?.content || ogSiteName || "",
              categoryList: [],
              areaList: [],
              ageList: [],
              feeType: "",
              about: tagDesc || ogDesc || "",
              userName: "",
              email: "",
              image: ogImage || image,
              url: url || "",
              keywords: (keywords || "")
                .split(",")
                .map((keyword: string) => keyword.trim())
                .filter((item: any) => item === ''),
            };
            return websiteFormData;
          }
        },
          (payload) => {
            console.log("payload:======", payload);
            setFormData(payload[0].result as any);
          });
      });
    }
  }, []);

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
        {/* global step */}
        <Profile
          formData={formData}
          prevStepList={prevStepList}
          setFormData={setFormData}
          setRootStep={setRootStep}
          setPrevStepList={setPrevStepList}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          isLoading={isLoading}
          setIsLoading={setIsLoading}

        />
        <Login
          formData={formData}
          prevStepList={prevStepList}
          setFormData={setFormData}
          setRootStep={setRootStep}
          setPrevStepList={setPrevStepList}
          setUserInfo={setUserInfo}
          setIsLogin={setIsLogin}
        />
        {/* page step */}
        <AddResource
          formData={formData}
          setFormData={setFormData}
          setRootStep={setRootStep}
          setPrevStepList={setPrevStepList}
        />
        <AddResourceStep2
          formData={formData}
          prevStepList={prevStepList}
          setFormData={setFormData}
          setRootStep={setRootStep}
          setPrevStepList={setPrevStepList}
          isLogin={isLogin}
          userInfo={userInfo}
        />
        <PersonalInfo
          formData={formData}
          prevStepList={prevStepList}
          setFormData={setFormData}
          setRootStep={setRootStep}
          setPrevStepList={setPrevStepList}
          isLogin={isLogin}
          userInfo={userInfo}
        />
        <FinishedAddResource
          formData={formData}
          prevStepList={prevStepList}
          setFormData={setFormData}
          setRootStep={setRootStep}
          setPrevStepList={setPrevStepList}
          userInfo={userInfo}
          isLogin={isLogin}
        />
      </StepWizard>
      <Footer
        setRootStep={setRootStep}
        currentStep={rootStep}
        setPrevStepList={setPrevStepList}
        setUserInfo={setUserInfo}
        userInfo={userInfo}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </Box>
  );
};

export default HomePage;



