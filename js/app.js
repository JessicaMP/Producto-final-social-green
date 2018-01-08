function begin() {
  setTimeout(function() {
    $('#splash').fadeOut();
    $('#page-start').removeClass('hide');
  }, 3500);
};

$(document).ready(begin);
