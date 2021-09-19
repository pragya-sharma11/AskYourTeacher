import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

var provider = new GoogleAuthProvider();
    let login = document.getElementById('login');
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
    let Uname = document.getElementById('name');
    Uname.innerText = user.displayName;
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



