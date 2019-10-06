
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
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    window.location.href="mainpage.html";// Redirige a la pagina principal.
   
  }
  
  gapi.load('auth2', initSigninV2);

function initSigninV2() {
    gapi.auth2.init({
        client_id: '485493375484-pi1k1ntjhmlcem9kcts91liah5cpp4tf.apps.googleusercontent.com'
    }).then(function (_authInstance) {
        // now auth2 is fully initialized
    });
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
