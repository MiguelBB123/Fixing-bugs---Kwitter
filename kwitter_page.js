const firebaseConfig = {
  apiKey: "AIzaSyAdMFbEE2P0PdcIaNVisW06D7RaOLX6wFw",
  authDomain: "fiuiuoiaamsgmdokwiter.firebaseapp.com",
  databaseURL: "https://fiuiuoiaamsgmdokwiter-default-rtdb.firebaseio.com",
  projectId: "fiuiuoiaamsgmdokwiter",
  storageBucket: "fiuiuoiaamsgmdokwiter.appspot.com",
  messagingSenderId: "815502276720",
  appId: "1:815502276720:web:728f5337f66fe455bd5cb5"
};
  
  firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
}

function getData() {firebase.database().ref("/"+roomName).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose"){
    firebaseMessageId = childKey;
    messageData = childData;
    console.log(firebaseMessageId);
    console.log(messageData)
    name = messageData['name'];
    message = messageData['message'];
    like = messageData['like'];
    nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
    likeButton = "<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+"onclick='updateLike(this.id)'>";
    spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

    row = nameWithTag + messageWithTag + likeButton + spanWithTag;
    document.getElementById("output").innerHTML += row;
}}); }); }
getData();

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
        window.location = "index.html";
}

function updateLike(messageId){
    console.log("botão like pressionado - "+ messageId);
    button_id = messageId;
    likes = document.getElementById(button_id).value;
    updatedLikes = Number(likes) +1;
    console.log(updatedLikes)

    firebase.database().ref(roomName).child(messageId).update({
        like: updatedLikes
    });
}