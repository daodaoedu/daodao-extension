import { ArrowBackIos } from "@mui/icons-material";
import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useImperativeHandle, useRef, useState, useCallback } from "react";
import { CATEGORIES, MENU_STEP } from "../../constants/form";
import toast from "react-hot-toast";

const PersonalInfo = (
  {
    formData,
    prevStepList,
    setFormData,
    setRootStep,
    setPrevStepList,
    isLogin,
    userInfo,
  }: {
    formData: any,
    prevStepList: any,
    setFormData: (state: any) => any,
    setRootStep: any,
    setPrevStepList: any,
    isLogin: any,
    userInfo: any,
  }) => {

  const onSubmitForm = useCallback(async () => {
    const { image, url, about, name } = formData;
    const userName = (isLogin ? userInfo?.name : formData?.userName) || "";
    const email = (isLogin ? userInfo?.email : formData?.email) || "";
    const areaList = (formData?.areaList || []).map(({ label }: any) => ({ name: label }));
    const categoryList = (formData?.categoryList || []).map(({ label }: any) => ({ name: label }));
    const ageList = (formData?.ageList || []).map((label: any) => ({ name: label }));
    // const keywords = (formData?.keywords || []).map((keyword: any) => ({ name: keyword }));
    const payload = {
      "parent": {
        "database_id": "ecd5616c101c4ab085d45777e397fb18"
      },
      "properties": {
        "資源類型": {
          "id": "%3C%3Dko",
          "type": "multi_select",
          "multi_select": areaList,
        },
        "創建者": {
          "id": "A%7DLo",
          "type": "multi_select",
          "multi_select": [
            {
              "name": userName,
            }
          ]
        },
        "創建者聯絡方式": {
          "id": "A%7DLo",
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
        },
        "縮圖": {
          "id": "TZ_W",
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
          "id": "Vv%3Ew",
          "type": "multi_select",
          "multi_select": categoryList
        },
        "補充資源": {
          "id": "%5Bn%60T",
          "type": "rich_text",
          "rich_text": []
        },
        "連結": {
          "id": "%5E%3A%7By",
          "type": "url",
          "url": url || "https://www.daoedu.tw"
        },
        // "費用": {
        //   "id": "h%7B%3Dv",
        //   "type": "select",
        //   "select": {
        //     "id": "KAo|",
        //     "name": "部分免費",
        //     "color": "pink"
        //   }
        // },
        // "影片": {
        //   "id": "jC%3CM",
        //   "type": "url",
        //   "url": null
        // },
        "介紹": {
          "id": "k_Vg",
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
        // "標籤": {
        //   "id": "nWGj",
        //   "type": "multi_select",
        //   "multi_select": keywords
        // },
        "地區": {
          "id": "pai%5E",
          "type": "multi_select",
          "multi_select": []
        },
        "年齡層": {
          "id": "wS%3Cy",
          "type": "multi_select",
          "multi_select": ageList,
        },
        "資源名稱": {
          "id": "title",
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

  const onSubmit = useCallback(() => {
    toast.promise(onSubmitForm().then(() => {
      setRootStep(MENU_STEP.FINISHED_ADD_RESOURCE);
      setPrevStepList((state: any) => [...state, MENU_STEP.ADD_PERSONAL_INFO]);
    }), {
      success: '新增資源成功！',
      error: '新增資源失敗，請稍後重試',
      loading: '新增資源中...',
    })

  }, [setPrevStepList, setRootStep, onSubmitForm]);

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
          個人資訊
        </Typography>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
            color: "#536166",
          }}>
          歡迎留下你的個人資訊，你的名稱將會顯示在資源頁面上，讓其他使用者能認識身為貢獻者的你。
        </Typography>
      </Box>

      <Box
        component="ul"
        sx={{ width: '100%' }}
      >
        <Box
          component="li"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>您的名稱</Typography>
          <TextField
            sx={{ width: "100%", marginTop: "10px", backgroundColor: "#fff" }}
            value={formData.userName}
            onChange={(event) => setFormData((state: any) => ({ ...state, userName: event.target.value }))}
          />
        </Box>
        <Box
          component="li"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: "20px"
          }}
        >
          <Typography sx={{ color: "#293A3D", fontSize: '16px', fontWeight: 700 }}>您的 E-mail</Typography>
          <TextField
            sx={{ width: "100%", marginTop: "10px", backgroundColor: "#fff" }}
            value={formData.email}
            onChange={(event) => setFormData((state: any) => ({ ...state, email: event.target.value }))}
          />
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
          }}
          onClick={onSubmit}
        >
          下一步
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
