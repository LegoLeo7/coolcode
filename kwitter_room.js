
const firebaseConfig = {
    apiKey: "AIzaSyC6IEVPTrallwktpruvM9gpYotiZJWv9sE",
    authDomain: "kwitterproject-2c58a.firebaseapp.com",
    projectId: "kwitterproject-2c58a",
    storageBucket: "kwitterproject-2c58a.appspot.com",
    messagingSenderId: "686976718355",
    appId: "1:686976718355:web:bd4424b1ead7b2303451e6"
  };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
  

  
   });});}
getData();
