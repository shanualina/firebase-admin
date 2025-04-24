const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// ✅ Load your Firebase service account key JSON file
const serviceAccount = require("./healers-meet-firebase-adminsdk-7sb7s-b47abc4765.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(bodyParser.json());

app.post("/send-chat-request", async (req, res) => {
  const { title, description, userId, requestId } = req.body;

  const message = {
    token:
      "dRxSDrosTAK0IWPx5DO30O:APA91bHOcD97cUcffhJmBEMMzYs3U_OobI72OnkCYF2GjjOayFBMzLAOq53afAuTMRvzQfMpChMZt6LsLMV2jgZni1FdN5CCp-grHrzxHrsngvxzSfpw0TM",
    data: {
      type: "CHAT_REQUEST",
      title: title,
      description: description,
      userId: userId,
      requestId: requestId,
      sound: "default",
      click_action: "CHAT_REQUEST",
      body: JSON.stringify({ description, userId, requestId }),
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
    res.status(200).json({ success: true, messageId: response });
  } catch (error) {
    console.error("Error sending FCM:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/accepted", async (req, res) => {
  const { token, title, description, userId, requestId } = req.body;

  const message = {
    token: token,
    data: {
      type: "CHAT_REQUEST",
      title: title,
      description: description,
      userId: userId,
      requestId: requestId,
      sound: "default",
      click_action: "CHAT_REQUEST",
      body: JSON.stringify({ description, userId, requestId }),
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
    res.status(200).json({ success: true, messageId: response });
  } catch (error) {
    console.error("Error sending FCM:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
app.listen(3000, () => {
  console.log(`🚀 Server running on http://localhost:${3000}`);
});
