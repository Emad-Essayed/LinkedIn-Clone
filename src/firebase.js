import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDdXebAGhAO-hAYEKOwjc8uJOemssfzVBE",
//   authDomain: "dummy-linkedin-clone-161ec.firebaseapp.com",
//   projectId: "dummy-linkedin-clone-161ec",
//   storageBucket: "dummy-linkedin-clone-161ec.appspot.com",
//   messagingSenderId: "837853937883",
//   appId: "1:837853937883:web:7aaddd8e10b754ae87ccfe",
// };

const firebaseConfig = {
  apiKey: "AIzaSyC_b08MhM5CqF7j2wnK8SXtvQgEMqbEqGw",

  authDomain: "linkedin-clone-e8401.firebaseapp.com",

  projectId: "linkedin-clone-e8401",

  storageBucket: "linkedin-clone-e8401.appspot.com",

  messagingSenderId: "274709239187",

  appId: "1:274709239187:web:87a6c037bb73bbaa594466",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;
