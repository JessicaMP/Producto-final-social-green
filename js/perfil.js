// Materialize
$(document).ready(function(){
   $(".button-collapse").sideNav();
   $('.modal').modal();
 });
// Post de texto
 $('#btn-share-post').click(function() {
   var post = $('<div></div>');
   var postHeader = $('<div></div>');
   var postHeaderContent = $('<h5></h5>');

   var postContent = $('<div></div>');
   var content = $('<p></p>');

   var postFooter = $('<div></div>');
   var boxTime = $('<div></div>');
   var time = $('<span></span>');
   var iconsBox = $('<div></div>');
   var icons1 = $('<a></a>');
   var icons2 = $('<a></a>');
   var icons3 = $('<a></a>');
   var icons4 = $('<a></a>');
   //iconos
   var icon1 = $('<i></i>');
   var icon2 = $('<i></i>');
   var icon3 = $('<i></i>');
   var icon4 = $('<i></i>');

   postHeaderContent.text($('.post-header input').val());
   content.text($('#texto').val());
   icon1.text('thumb_up');
   icon2.text('thumb_down');
   icon3.text('mode_comment');
   icon4.text('reply');

   post.addClass('styleBox');
   postHeader.addClass('title');
   postHeaderContent.addClass('center-align');
   content.addClass('styleLetterP');
   postContent.addClass('styleLetter');
   boxTime.addClass('left-align col s5');
   iconsBox.addClass('right-align col s7');
   time.text(timeDate());

   time.addClass('styleLetter');
   icon1.addClass('material-icons grey-text');
   icon2.addClass('material-icons grey-text');
   icon3.addClass('material-icons grey-text');
   icon4.addClass('material-icons grey-text');

   postHeader.append(postHeaderContent);
   postContent.append(content);
   boxTime.append(time);
   iconsBox.append(icons1);
   iconsBox.append(icons2);
   iconsBox.append(icons3);
   iconsBox.append(icons4);

   icons1.append(icon1);
   icons2.append(icon2);
   icons3.append(icon3);
   icons4.append(icon4);
   postFooter.append(boxTime);
   postFooter.append(iconsBox);

   post.append(postHeader);
   post.append(postContent);
   post.append(postFooter);
   $('#show-post').prepend(post);

   $('.post-header input').val(' ');
   $('#texto').val(' ');
   $('#texto').focus();

  //funciónes para dar colores a íconos al hacer click
   $(".material-icons").click(function(){
     //var btn = $(".material-icons:first");
      $(this).toggleClass('grey-text');
      $(this).toggleClass('red-text');
   });
 });

$('#texto').keyup(function() {
  var text = $('#texto').val();
  var btnPublic = $('#btn-share-post');
  if ( text.length > 3) {
    btnPublic.attr('disabled', false);
  } else {
    btnPublic.attr('disabled', 'disable');
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

 $('input[type=file]').change(function() {
   var file = (this.files[0].name).toString();
   var reader = new FileReader();

   $('#file-select').text(' ');

   reader.onload = function (e) {
   $('#modal5 img').attr('src', e.target.result);
   }

   reader.readAsDataURL(this.files[0]);
 });

$('#btn-share-photo').click(function() {
  var imagen = $("#img-guardar");
  var search = $('#photoPublic');

  var post = $('<div></div>');
  var img = $('<img>');

  var postFooter = $('<div></div>');
  var boxTime = $('<div></div>');
  var time = $('<span></span>');
  var iconsBox = $('<div></div>');
  var icons1 = $('<a></a>');
  var icons2 = $('<a></a>');
  var icons3 = $('<a></a>');
  var icons4 = $('<a></a>');
  //iconos
  var icon1 = $('<i></i>');
  var icon2 = $('<i></i>');
  var icon3 = $('<i></i>');
  var icon4 = $('<i></i>');

  icon1.text('thumb_up');
  icon2.text('thumb_down');
  icon3.text('mode_comment');
  icon4.text('reply');

  boxTime.addClass('left-align col s5');
  iconsBox.addClass('right-align col s7');
  time.text(timeDate());

  time.addClass('styleLetter');
  icon1.addClass('material-icons grey-text');
  icon2.addClass('material-icons grey-text');
  icon3.addClass('material-icons grey-text');
  icon4.addClass('material-icons grey-text');
  post.addClass('styleBox');

  boxTime.append(time);
  iconsBox.append(icons1);
  iconsBox.append(icons2);
  iconsBox.append(icons3);
  iconsBox.append(icons4);

  icons1.append(icon1);
  icons2.append(icon2);
  icons3.append(icon3);
  icons4.append(icon4);
  postFooter.append(boxTime);
  postFooter.append(iconsBox);

  img.attr('src', imagen[0].src);
  img.addClass('post-img');
  post.append(img);
  post.append(postFooter);
  $('#show-post').prepend(post);

  $(".material-icons").click(function(){
    //var btn = $(".material-icons:first");
     $(this).toggleClass('grey-text');
     $(this).toggleClass('red-text');
  });
});
