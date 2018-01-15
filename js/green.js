
window.onload = inicializar;
var fichero;
var storageRef;
var imagenesFBref;
/*publicacion*/
var formConvalidaciones;
var refConvalidaciones;
var tbodyTablaConvalidaciones;


function inicializar() {
  fichero = document.getElementById('fichero');
  fichero.addEventListener('change', subirImagenFirebase, false);

  storageRef = firebase.storage().ref();
// traer imagen de storage - firebase
  imagenesFBref = firebase.database().ref().child('imagenesFB');
  mostrarImagenesDeFirebase();

//convalidacion
  formConvalidaciones = document.getElementById('form-convalidaciones');
  formConvalidaciones.addEventListener("submit", enviarConvalidacionFirebase ,false)

  tbodyTablaConvalidaciones = document.getElementById("tbody-tabla-convalidaciones");


   refConvalidaciones = firebase.database().ref().child("convalidaciones");
   mostrarConvalidacionesDeFirebase();
//
  }
function enviarConvalidacionFirebase(event) {
  event.preventDefault();
  refConvalidaciones.push({
    moduloAConvalidar: event.target.moduloAConvalidar.value
  });
}

function mostrarImagenesDeFirebase(){
//cada vez que carge una imagen  'imagenesFB'
  imagenesFBref.on('value',function(snapshot){
    var datos = snapshot.val();
    var result = "";
    for(var key in datos){
      result += '<img class="imagesFB" width= "400" src="' + datos[key].url + '"/>';
    }
    document.getElementById('imagenes-de-firebase').innerHTML = result;
  })
}

//convalidaciones
function mostrarConvalidacionesDeFirebase() {
  refConvalidaciones.on('value',function(snap){
    var datos = snap.val();
    var filasAMostrar = "";
    for(var key in datos){
      filasAMostrar += "<p class=box-text>" + datos[key].moduloAConvalidar + "</p>";
    }
    tbodyTablaConvalidaciones.innerHTML = filasAMostrar;
  })
}
//

//  document.getElementById("ejemplo").style.padding="10px 0 5px 0";
function subirImagenFirebase() {
  var imagenASubir = fichero.files[0];

  var uploadTask = storageRef.child('imagenes/' + imagenASubir.name).put(imagenASubir);

  document.getElementById('progreso').className = "";
  uploadTask.on('state_changed',
   function(snapshot){

     // se muestra progreso de sbida
     var barraProgreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + barraProgreso  + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }

  }, function(error) {
    // gestionar error
    alert('hubo error')
  }, function() {
    // se subio imgen
    var downloadURL = uploadTask.snapshot.downloadURL;
    crearNodoEnBDFirebase(imagenASubir.name, downloadURL);
    document.getElementById('progreso').className = "hidden";
  });
    function crearNodoEnBDFirebase(nombreImagen, downloadURL) {
      imagenesFBref.push({nombre: nombreImagen, url: downloadURL});
    }

}
