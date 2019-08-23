
var admin = require("firebase-admin");

var serviceAccount = require("./push-notification-demo-542a3-firebase-adminsdk-nnyfj-3ba320400e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodefirebase-f5a31.firebaseio.com"
});

var registrationToken = "eXhqqkz6Jwg:APA91bGwgSVGjkrnwAl6dCuQAPIpoX404J4DjrqXvXCj39K8BXdIy1LupQfrLZMkfRwG5L4ra82csJx7Pb118xVoNydXzER2BqVIIPUoi32ehUD7-6T5oHYbL_Z-jiZk5Ha41n2cisBG";

var payload = {
  notification: {
    title: "Account Deposit",
    body: "A deposit to your savings account has just cleared."
  }
};

var options = {
  priority: "high",
  timeToLive: 60 * 60 *24
};

admin.messaging().sendToDevice(registrationToken, payload, options)
  .then(function(response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });