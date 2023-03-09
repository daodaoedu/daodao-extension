import { useState, useLayoutEffect, useCallback } from "react";
import StepWizard from 'react-step-wizard';
import { MENU_STEP, FEE } from "../constants/form";
import Profile from "../components/Profile";
import Login from "../components/Login";
import AddResource from "../components/AddResource";
import AddResourceStep2 from "../components/AddResourceStep2";
import PersonalInfo from "../components/PersonalInfo";
import FinishedAddResource from "../components/FinishedAddResource";
import { Box } from "@mui/material";
import Navigation from "../shared/components/Navigation";
import Footer from "../shared/components/Footer";
import toast from "react-hot-toast";

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

  const onSubmitForm = useCallback(async () => {
    const { image, url, feeType, about, name, userUrl } = formData;
    const userName = (isLogin ? userInfo?.name : formData?.userName) || "匿名";
    const email = (isLogin ? userInfo?.email : formData?.email) || "無";
    const areaList = (formData?.areaList || []).map(({ label }: any) => ({ name: label }));
    const categoryList = (formData?.categoryList || []).map(({ label }: any) => ({ name: label }));
    const ageList = (formData?.ageList || []).map((label: any) => ({ name: label }));
    // const keywords = (formData?.keywords || []).map((keyword: any) => ({ name: keyword }));
    let payload: any = {
      "parent": {
        "database_id": "ecd5616c101c4ab085d45777e397fb18"
      },
      "properties": {
        "資源類型": {
          "type": "multi_select",
          "multi_select": areaList,
        },
        "創建者": {
          "type": "multi_select",
          "multi_select": [
            {
              "name": userName,
            }
          ]
        },
        "縮圖": {
          "type": "files",
          "files": [
            {
              "name": image || 'https://www.daoedu.tw/preview.webp',
              "type": "external",
              "external": {
                "url": image || 'https://www.daoedu.tw/preview.webp'
              }
            }
          ]
        },
        "領域名稱": {
          "type": "multi_select",
          "multi_select": categoryList
        },
        "補充資源": {
          "type": "rich_text",
          "rich_text": []
        },
        "連結": {
          "type": "url",
          "url": url || "https://www.daoedu.tw"
        },
        "費用": {
          "type": "select",
          "select": {
            "name": FEE.find(item => item?.value === feeType)?.label || ""
            ,
            "color": "pink"
          }
        },
        // "影片": {
        //   "id": "jC%3CM",
        //   "type": "url",
        //   "url": null
        // },
        "介紹": {
          "type": "rich_text",
          "rich_text": [
            {
              "type": "text",
              "text": {
                "content": about,
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": about,
              "href": null
            }
          ]
        },
        "地區": {
          "type": "multi_select",
          "multi_select": []
        },
        "年齡層": {
          "type": "multi_select",
          "multi_select": ageList,
        },
        "資源名稱": {
          "type": "title",
          "title": [
            {
              "type": "text",
              "text": {
                "content": name,
                "link": null
              },
              "annotations": {
                "bold": false,
                "italic": false,
                "strikethrough": false,
                "underline": false,
                "code": false,
                "color": "default"
              },
              "plain_text": name,
              "href": null
            }
          ]
        }
      },
      // "url": "https://www.notion.so/kagi-5d9590f27014431fb0c21ca4444b808e"
    };

    if (userUrl) {
      payload.properties["個人頁面"] = {
        "type": "url",
        "url": userUrl || ""
      };
    }

    if (email) {
      payload.properties["創建者聯絡方式"] = {
        "type": "rich_text",
        "rich_text": [
          {
            "type": "text",
            "text": {
              "content": email,
              "link": null
            },
            "annotations": {
              "bold": false,
              "italic": false,
              "strikethrough": false,
              "underline": false,
              "code": false,
              "color": "default"
            },
            "plain_text": email,
            "href": null
          }
        ]
      };
    }

    return fetch("https://api.daoedu.tw/notion/addresource",
      {
        method: "POST",
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(res => {
        console.log("res: ", res);
      })
  }, [formData, isLogin, userInfo]);

  const onSubmit = useCallback((currentStep) => {

    if (isLogin) {
      toast.promise(onSubmitForm().then(() => {
        setRootStep(MENU_STEP.FINISHED_ADD_RESOURCE);
        setPrevStepList((state: any) => [...state, MENU_STEP.ADD_PERSONAL_INFO] as any);
      }), {
        success: '新增資源成功！',
        error: '新增資源失敗，請稍後重試',
        loading: '新增資源中...',
      })
    } else {
      if (currentStep === MENU_STEP.ADD_PERSONAL_INFO) {
        toast.promise(onSubmitForm().then(() => {
          setRootStep(MENU_STEP.FINISHED_ADD_RESOURCE);
          setPrevStepList((state: any) => [...state, MENU_STEP.ADD_PERSONAL_INFO] as any);
        }), {
          success: '新增資源成功！',
          error: '新增資源失敗，請稍後重試',
          loading: '新增資源中...',
        })
      } else {
        setRootStep(MENU_STEP.ADD_PERSONAL_INFO);
        setPrevStepList((state: any) => [...state, MENU_STEP.ADD_RESOURCE_STEP2] as any);
      }
    }
  }, [isLogin, onSubmitForm]);

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
          onSubmit={onSubmit}
        />
        <PersonalInfo
          formData={formData}
          prevStepList={prevStepList}
          setFormData={setFormData}
          setRootStep={setRootStep}
          setPrevStepList={setPrevStepList}
          isLogin={isLogin}
          userInfo={userInfo}
          onSubmit={onSubmit}
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



