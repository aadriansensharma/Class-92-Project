
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
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() [
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
]

function send()
{
     msg = document.getElementById("msg").value;
     firebase.datanase().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output")
    firebase_message_id = childKey;
    messsage_data = childData;
    
    //Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='src='tick.png'></h4>";
    message_with_tag = "<h4 class='messsage_h4'>" + message + "</h4>";
    like_button ="button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "span class='glyphicon glyphicon-thumbs-up'>Like: "+ like+"</span></button><hr>"; 

    row = name_wth_tag + message_with_tag + like-button + span_with_tag;
    document.getElementById("output").innerHTML += row;
    //End code
})}
getData();


function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
}

