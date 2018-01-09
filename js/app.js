// SPLASH
function begin() {
  setTimeout(function() {
    $('#splash').fadeOut();
    $('#page-start').removeClass('hide');
    $('footer').removeClass('hide');
  }, 3500);
};

$(document).ready(begin);
// Initializacion de materialize
$( document ).ready(function(){
  $(".button-collapse").sideNav();
  $('.modal').modal();
});

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDtSqdUIHhBQc0hW_qr7RB0Eou_GxHrLAI",
    authDomain: "social-green.firebaseapp.com",
    databaseURL: "https://social-green.firebaseio.com",
    projectId: "social-green",
    storageBucket: "social-green.appspot.com",
    messagingSenderId: "450259756672"
  };
  firebase.initializeApp(config);

  var user = null;

  var $loginBtn = $('#start-login');

  $loginBtn.on('click', googleLogin);

  function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    //esta es la doc de firebase
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        //guardamos el usuario que nos trae resuslt
        user = result.user;
        //mostramos su contenido
        console.log(user);
        //ocultamos el div de login
        $('#login').fadeOut();
      });
  }

// Vinculando con Email
  function registrar() {
   var email = document.getElementById('email').value;
   var contrasena = document.getElementById('contrasena').value;

     firebase.auth().createUserWithEmailAndPassword(email, contrasena).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
  }

  function ingreso() {
    var email2 = document.getElementById('email').value;
    var contrasena2 = document.getElementById('contrasena').value;
      firebase.auth().signInWithEmailAndPassword(email2, contrasena2).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
  }

  function observador() {

      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('existe usuario');
        aparece();
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        console.log('no existe usuario');
      }
    });
  }
  observador();


  function aparece() {
    var contenido = document.getElementById('contenido');
      contenido.innerHTML = 'solo lo ve usuario activo';

  }
