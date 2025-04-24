const admin = require("firebase-admin");

// Load your Firebase service account key
const serviceAccount = require("./healers-meet-firebase-adminsdk-7sb7s-b47abc4765.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Function to send FCM message
const sendNotification = async (fcmToken, title, body) => {
  const message = {
    token:
      "dRxSDrosTAK0IWPx5DO30O:APA91bHOcD97cUcffhJmBEMMzYs3U_OobI72OnkCYF2GjjOayFBMzLAOq53afAuTMRvzQfMpChMZt6LsLMV2jgZni1FdN5CCp-grHrzxHrsngvxzSfpw0TM",
    data: {
      type: "CHAT_REQUEST",
      title: "Chat Request from Shanoo",
      description: "Hey Vikash, Shanoo wants to chat",
      userId: "951",
      requestId: "111",
      //   icon: "chat_icon",
      sound: "default",
      click_action: "CHAT_REQUEST",
      body: '{"description":"Hey Vikash, Shanoo wants to chat","userId":"951","requestId":"CHAT_REQUEST_ID"}',
    },
    android: {
      priority: "high",
    },
    apns: {
      headers: {
        "apns-priority": "10",
      },
      payload: {
        aps: {
          sound: "default",
          "content-available": 1,
        },
      },
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Successfully sent message:", response);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

// Example usage
const userFcmToken = "YOUR_DEVICE_FCM_TOKEN";
sendNotification(userFcmToken, "Hello 👋", "This is a test notification.");
