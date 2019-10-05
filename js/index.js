
function guardarDatos() { //guarda el nombre y la contraseña
  localStorage.nombre = document.getElementById("user").value;
localStorage.contraseña = document.getElementById("pwd").value;
}



function UsuarioAutenticacion(){ //autentica al usuario
   var nombre = document.getElementById("user").value;
   var contraseña = document.getElementById("pwd").value;
if (nombre=="Andrea" && contraseña=="1234"){
  guardarDatos()
window.location.href = "mainpage.html";// Redirige a la pagina principal.

}

else{
   
return alert("Algunos de los campos igresados no es correcto o hay campos vacios, por favor verifique");
}
}

function mostrarNombreUsuario() {
  if ((localStorage.nombre != undefined) && (localStorage.contraseña != undefined)) {
       document.getElementById("user").innerHTML = localStorage.nombre ;
   } 
}

function BorrarDatos(){
   localStorage.removeItem ('nombre');
   localStorage.removeItem ('contraseña');

}

  //AUTENTICACION CON GOOGLE

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);
    window.location.replace("mainpage.html");// Redirige a la pagina principal.

  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://andreaf19.github.io/2daentregaopcional/";
        console.log('User signed out.');

    });
  }
  function onLoad() {
    gapi.load('auth2', function() {
      gapi.auth2.init()
  
    });
  }

