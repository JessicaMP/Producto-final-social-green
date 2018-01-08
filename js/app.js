function begin() {
  setTimeout(function() {
    $('#splash').fadeOut();
    $('#page-star').removeClass('hide');
  }, 3500);
};

$(document).ready(begin);
