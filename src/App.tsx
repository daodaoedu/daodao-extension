
import { useState, useLayoutEffect } from "react";
import Home from "./pages";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    family_name: "",
    given_name: "",
    id: "",
    locale: "",
    name: "匿名",
    picture: "",
    verified_email: false,
  });
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useLayoutEffect(() => {
    chrome.storage.sync.get('userInfo', (result: any) => {
      console.log("result: ", result);
      if (Object.keys(result).length > 0) {
        setUserInfo(result?.userInfo);
        setIsLoading(false);
        setIsLogin(true);
      } else {
        setIsLoading(false);
        setIsLogin(false);
        chrome.storage.sync.remove('userInfo');
      }
    });

    chrome.identity.onSignInChanged.addListener((account: any, signedIn) => {
      // account：使用者的 Google 帳戶資訊
      // signedIn：布林值，表示使用者是否已登入
      if (signedIn) {
        // 如果使用者已登入，則執行相關操作
        setUserInfo(account);
        console.log("account: ", account);
        setIsLoading(false);
        setIsLogin(true);
      } else {
        // 如果使用者已登出，則執行相關操作
        setIsLoading(false);
        setIsLogin(false);
      }
    });
  }, [setIsLogin, setUserInfo]);

  return (
    <Home
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />
  )
}

export default App;
