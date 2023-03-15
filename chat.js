
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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name",user_name);

    window.location = "chat_room.html";
}



