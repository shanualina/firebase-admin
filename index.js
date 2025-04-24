// const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

// const appID = "45f4e9c9e77449378a4e24fd48a1f1d5";
// const appCertificate = "1d7d28cadfb7443cadec694061a78de5";
// const channelName = "test123"; // must match exactly on frontend
// const uid = 0; // or any unique integer (0 means auto-assign by Agora)
// const role = RtcRole.PUBLISHER;

// const expirationTimeInSeconds = 3600; // 1 hour token validity
// const currentTimestamp = Math.floor(Date.now() / 1000);
// const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

// const token = RtcTokenBuilder.buildTokenWithUid(
//   appID,
//   appCertificate,
//   channelName,
//   uid,
//   role,
//   privilegeExpiredTs
// );

// console.log("Generated Token:", token);
const fs = require("fs");

const json = require("./healers-meet-firebase-adminsdk-7sb7s-b47abc4765.json");
const envString = JSON.stringify(json).replace(/\n/g, "\\n");
console.log(envString);
