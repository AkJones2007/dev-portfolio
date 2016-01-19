$(function() {

  $('.field').on('focus', function(event) {
    event.preventDefault();
    var placeholder = $(this).attr('placeholder');

    $(this).addClass('active');
    $(this).attr('placeholder', '');

    if($(this).val() === '') {
      $(this).removeClass('populated');
    }

    $(this).on('blur', function(event) {
      $(this).removeClass('active');
      $(this).attr('placeholder', placeholder);

      if($(this).val() !== '') {
        $(this).addClass('populated');
      }
    });
  });

  $('#contact-form').on('submit', function(event) {
    event.preventDefault();
    form.submit('#contact-form');
  });

});
