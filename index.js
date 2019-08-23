const express = require('express');
const app = express();

app.use(express.json());

app.post('/push_notification', (req, res) => {
    const {body, title, fcm_token} = req.body;
    var admin = require("firebase-admin");
    var serviceAccount = require("./push-notification-demo-542a3-firebase-adminsdk-nnyfj-3ba320400e.json");
    var registrationToken = fcm_token;

    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://nodefirebase-f5a31.firebaseio.com"
        });
    }

    var payload = {
        notification: {
          title: title,
          body: body
        }
    };

    var options = {
        priority: "high",
        timeToLive: 60 * 60 *24
    };

    admin.messaging().sendToDevice(registrationToken, payload, options)
    .then(function(response) {
        // console.log("Successfully sent message:", response);
        return res.status(200).json({message: response});
    })
    .catch(function(error) {
        // console.log("Error sending message:", error);
        return res.status(500).json({error: error});
    });
});

app.listen(3000, console.log('Running on port 3000'));