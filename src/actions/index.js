import { auth, provider, storage } from "../firebase";
import db from "../firebase";
import { GET_ARTICLES, SET_LOADER_STATUS, SET_USER } from "./actionType";

const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

const setLoading = (status) => ({
  type: SET_LOADER_STATUS,
  status: status,
});

const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

export function signInApi() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => dispatch(setUser(payload)))
      .catch((error) => console.log(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signoutApi() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => dispatch(setUser(null)))
      .catch((error) => console.log(error.message));
  };
}

export function postArticleApi(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (payload.image !== "" || payload.video !== "") {
      const upload =
        payload.image !== ""
          ? storage.ref(`images/${payload.image[0].name}`).put(payload.image[0])
          : storage
              .ref(`videos/${payload.video[0].name}`)
              .put(payload.video[0]);

      upload.on(
        "state-changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          // console.log(`Progress ${progress}%`);
          // console.log(payload);
          if (snapshot.state === "RUNNING") {
            // console.log(`Progress ${progress}%`);
          }
        },
        (error) => console.log(error.log),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video !== "" ? downloadURL : "",
            sharedImage: payload.image !== "" ? downloadURL : "",
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: "",
        sharedImage: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getArticlesAPI() {
  return (dispatch) => {
    dispatch(setLoading(true));
    let payload;

    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        // console.log(payload);
        dispatch(getArticles(payload));
        dispatch(setLoading(false));
      });
  };
}
