import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBJAu7KXGKcphHP9rAOUZqVRR8bIjArgqU",
    authDomain: "portfolio-fb3f6.firebaseapp.com",
    databaseURL: "https://portfolio-fb3f6.firebaseio.com",
    projectId: "portfolio-fb3f6",
    storageBucket: "",
    messagingSenderId: "475766147934",
    appId: "1:475766147934:web:502a720424f1c86fa29dcf",
    measurementId: "G-QWLYSHP9E4"
};
firebase.initializeApp(config);
firebase.analytics();

export default firebase;