importScripts('https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.10.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDbySpk-FzleEYM7nrAjJMFtJzesUIzKDY",
    authDomain: "push-notification-demo-542a3.firebaseapp.com",
    databaseURL: "https://push-notification-demo-542a3.firebaseio.com",
    projectId: "push-notification-demo-542a3",
    storageBucket: "",
    messagingSenderId: "401854770403",
    appId: "1:401854770403:web:db1655d2114c1d54"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title = 'Hello World';
    const options = {
        body: payload.data.status
    };
    console.log(payload);
    return self.registration.showNotification(title, options);
});