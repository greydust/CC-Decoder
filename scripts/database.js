var config = {
    apiKey: "AIzaSyBsq6Rs0dt9axeDm4WiJnFpvCOGpckprBc",
//        authDomain: "cc-decoderbackend.firebaseapp.com",
    databaseURL: "https://cc-decoderbackend.firebaseio.com",
//        storageBucket: "cc-decoderbackend.appspot.com",
};
firebase.initializeApp(config);
firebase.database().goOffline();