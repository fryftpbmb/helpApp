import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBfC81atti7cH2O05laHJdwN7JvOvryjQI",
    authDomain: "helpapp-7d3e9.firebaseapp.com",
    databaseURL: "https://helpapp-7d3e9.firebaseio.com",
    projectId: "helpapp-7d3e9",
    storageBucket: "helpapp-7d3e9.appspot.com",
    messagingSenderId: "752065049328",
    appId: "1:752065049328:web:e9e56e870c049afb428835",
    measurementId: "G-PQSKTPZB61"
}

// 二重に読み込まないように
if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default firebase