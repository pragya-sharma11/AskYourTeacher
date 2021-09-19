import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
var Uname = document.getElementById('name');
var provider = new GoogleAuthProvider();
var login = document.getElementById('login');
console.log(login);
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
    console.log(user)
    //login.innerText=user.displayName;
    login.style.display = "none";
    Uname.innerText = user.displayName;
    document.getElementsByClassName('hover').style.display = 'inline';
    // ...user
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error)
    // ...
  });
        
}
let logout = document.getElementById('logout')
logout.onclick=(e)=>{
  e.preventDefault();
  signOut(auth);
  login.style.display = "block";
  Uname.innerText = "";
  document.getElementsByClassName('hover').style.display = 'none';

}
  


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("user exists")
    // ...
  } else {
    // User is signed out
    // ...
    console.log("signout successful")
  }
});



