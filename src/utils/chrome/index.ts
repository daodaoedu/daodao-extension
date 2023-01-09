
export const getUserData = async () => {
  return chrome.storage.sync.get('userInfo', (userInfo) => userInfo)
}


// export const getAuthToken = (callback: (token: any) => any) => {
//     chrome.identity.getAuthToken({
//       interactive: true,
//     }, (token) => {
//       if (chrome.runtime.lastError) {
//         console.error(chrome.runtime.lastError.message);
//         return;
//       }
//       // 如果成功取得 token，則會在這裡使用 token
//       // console.log("token", token);
//       callback(token);
//     });
// }

// chrome.identity.onSignInChanged.addListener(function (account_id, signedIn) {
//     if (signedIn) {
//         user_signed_in = true;
//     } else {
//         user_signed_in = false;
//     }
// });