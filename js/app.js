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
