// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCIMGJ3PsitRaVx07-Ch2s2QxiysvTuaDo",
      authDomain: "kwitter-97ce1.firebaseapp.com",
      databaseURL: "https://kwitter-97ce1-default-rtdb.firebaseio.com",
      projectId: "kwitter-97ce1",
      storageBucket: "kwitter-97ce1.appspot.com",
      messagingSenderId: "253797144062",
      appId: "1:253797144062:web:078709a31029ab9c755caf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //Showing user name on second page
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML=" Welcome " + user_name + " ! ";
    
    function addRoom()
    {
          room_name=document.getElementById("addRoom").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"  
                    });
                    localStorage.setItem("room_name",room_name);
                    window.location="kwitter_page.html";
    }
 
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-" + Room_name)

      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("")
      
}
