// Materialize
$(document).ready(function(){
   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
   $(".button-collapse").sideNav();
   $('.modal').modal();
 });
// Post de texto
 $('#btn-share-post').click(function() {
   var firstBox= $('<div></div>');
   var content = $('<p></p>');
   //iconos
   var icon = $('<i></i>');
   var icon2 = $('<i></i>');
   var icon3 = $('<i></i>');

   content.text($('#texto').val());
   icon.text('favorite');
   icon2.text('thumb_up');
   icon3.text('thumb_down');

   var time = $('<p></p>');
   time.text(timeDate());

   firstBox.addClass('styleBox');
   content.addClass('styleLetter');
   time.addClass('styleLetter');
   icon.addClass('material-icons');
   icon2.addClass('material-icons');
   icon3.addClass('material-icons');

   if ($('#texto').val('')) {
     firstBox.append(content);
     firstBox.append(time);
     firstBox.append(icon);
     firstBox.append(icon2);
     firstBox.append(icon3);
     $('#show-post').append(firstBox);
   }

   $('#texto').val(' ');
   $('#texto').focus();
 });
$('#texto').keyup(function() {
  var contenido = $('#texto').val();
  var length = $('#texto').val().lenght;
  if (contenido == '') {
    $('#btn-share-post').addClass('transparent');
  }else {
    $('#btn-share-post').addClass('red')
    $('#texto').css('height', '80px');
    $('#texto').css('height', $('#texto').scrollHeight + 'px');
    $('.box-right').css('height', '200px');
    $('.box-right').css('height', $('.box-right').scrollHeight + 'px');
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
