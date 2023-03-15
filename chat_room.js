const firebaseConfig = {
    apiKey: "AIzaSyCovSBIW84N03xNVUwBZFc-8vBOr85EQiU",
    authDomain: "c100-4bf76.firebaseapp.com",
    databaseURL: "https://c100-4bf76-default-rtdb.firebaseio.com",
    projectId: "c100-4bf76",
    storageBucket: "c100-4bf76.appspot.com",
    messagingSenderId: "295259218921",
    appId: "1:295259218921:web:0eb27ca35d84e70d762178"
  };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-Vindo(a)" + user_name + "!";


  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({

    purpose: "adicionado nome da sala"});

  localStorage.setItem("room_name", room_name);

  window.location = "chat_page.html";
}
  function getData()
{
  firebase.database().ref("/").on('value', function(snapshot)
  {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapShot){childKey =
  childSnapshot.key;
                    Room_names = childKey;
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

    });

  });

}
  getData();

  function redirectToRoomName (name)
{
  console.log(name);
  localStorage.setItem("room_name", name)
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}