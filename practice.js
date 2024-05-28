const firebaseConfig = {
    apiKey: "AIzaSyABWBryuleePor8rKPEHa87Y0IhYgNBEY0",
    authDomain: "class-test-2faa8.firebaseapp.com",
    projectId: "class-test-2faa8",
    storageBucket: "class-test-2faa8.appspot.com",
    messagingSenderId: "297060597621",
    appId: "1:297060597621:web:12613d8d305a363a7f9d3c"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value; 
firebase.database().ref("/").child(user_name).update({});
}
