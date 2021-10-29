import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
var Uname = document.getElementById('name');
var provider = new GoogleAuthProvider();
var login = document.getElementById('login');
// console.log(login);
login.onclick=(e)=>{
  e.preventDefault();
        
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // console.log(user)
    login.style.display = "none";
    Uname.innerText = user.displayName.slice(0,6)+"...";
    window.Storage.user = user;
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log('user not logged in')
    // ...
  });
        
}
let logout = document.getElementById('logout')
logout.onclick=(e)=>{
  e.preventDefault();
  signOut(auth);
  window.Storage.user = null;
  window.Storage.cards=null;
  login.style.display = "block";
  Uname.innerText = "";
  document.getElementById('hovers').style.display = 'none';
  window.location='../index.html'
}
  


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    Uname.innerText = user.displayName.slice(0,6)+"...";
    login.style.display = "none";
    window.Storage.user = user
    console.log("user exists")
    // ...
  } else {
    // User is signed out
    // ...
    window.Storage.user = null
    console.log("signout successful")
  }
});



