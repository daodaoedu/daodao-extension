async function main() {
  // const userInfo = await chrome.identity.getProfileUserInfo((userInfo) => userInfo);
  // chrome.identity.getAuthToken({
  //     interactive: true,
  //     // account: {
  //     //   id: userInfo.id,
  //     // }
  // }, (token) => {
  //   console.log("test");
  //   if (chrome.runtime.lastError) {
  //     console.error(chrome.runtime.lastError.message);
  //     return;
  //   }
  //   // 如果成功取得 token，則會在這裡使用 token
  //   console.log("token", token);
  // });  

}

// chrome.identity.getProfileUserInfo(function (userInfo) {
//   console.log("userInfo=> ", userInfo);
  
//   chrome.identity.getAuthToken({
//       interactive: true,
//       // account: {
//       //   id: userInfo.id,
//       // }
//   }, function (token) {
//     console.log("test");
    
//     if (chrome.runtime.lastError) {
//       console.error(chrome.runtime.lastError.message);
//       return;
//     }
//     // 如果成功取得 token，則會在這裡使用 token
//     console.log("token", token);
//   });  
//   console.log("userInfo: ", userInfo);
  
// // console.log(userInfo.email);
// // console.log(userInfo.id);
// });

// chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
//     if (request) {
//       console.log('request ', request);
//       sendResponse({ success: true, message: 'Token has been received' });
//     }
// });

// connect to api
console.log('hey background');
main();
export {};