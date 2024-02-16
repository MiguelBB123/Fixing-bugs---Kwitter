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

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}