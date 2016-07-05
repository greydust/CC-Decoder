var config = {
    apiKey: "AIzaSyBsq6Rs0dt9axeDm4WiJnFpvCOGpckprBc",
    databaseURL: "https://cc-decoderbackend.firebaseio.com",
};

var twConfig = {
    apiKey: "AIzaSyBgSpvVSe0bnWMf0rHR9VILRNsQsPebf_s",
    databaseURL: "https://cc-decoderbackendtw.firebaseio.com",
};

var currentDB = null;

function InitializeJP() {
    if (currentDB != null) {
        currentDB.delete();
    }
    currentDB = firebase.initializeApp(config, "JP");
    currentDB.database().goOffline();
}

function InitializeTW() {
    if (currentDB != null) {
        currentDB.delete();
    }
    currentDB = firebase.initializeApp(twConfig, "TW");
    currentDB.database().goOffline();
}

InitializeJP();

