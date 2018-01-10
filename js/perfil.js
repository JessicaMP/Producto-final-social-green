$(document).ready(function(){
   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
   $(".button-collapse").sideNav();
   $('.modal').modal();
 });

 $('#btn-share-post').click(function() {
   var firstBox= $('<div></div>');
   var content = $('<p></p>');
   content.text($('#texto').val());
   var time = $('<p></p>');
   time.text(timeDate());

   firstBox.addClass('styleBox');
   content.addClass('styleLetter');
   time.addClass('styleLetter');

   if ($('#texto').val('') == true) {
     console.log(  $('this'));
     $('this').find('#button').disabled();

   }else{
     firstBox.append(content);
     firstBox.append(time);
     $('#show-post').append(firstBox);

   }
   $('#texto').val(' ');
   texto.focus();
 });

 //Cambio de color del boton al ingresar texto
 texto.addEventListener('keyup', function() {
   var contenido = texto.value;
   var length = texto.value.lenght;
   if (contenido == '') {
     button.className = 'Original';
   }else {
     button.className = 'buttonColor';
     texto.style.height = '80px';
     texto.style.height = texto.scrollHeight + 'px';
     boxRight.style.height = '200px';
     boxRight.style.height = boxRight.scrollHeight + 'px';
   }
 });


 // Agregando la hora
 var timeDate = function () {
   var f = new Date();
   var time = f.getHours() + ":" + f.getMinutes();
   var timeAbsolute = '';
   if (f.getHours() <= 12) {
     timeAbsolute = time + ' AM';
   }else {
     timeAbsolute = time + ' PM';
   }
   return timeAbsolute;
 }
