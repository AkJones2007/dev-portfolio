$(function() {

  $('.field').on('focus', function(event) {
    event.preventDefault();
    var placeholder = $(this).attr('placeholder');
    var name = $(this).attr('name');

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

    form.submit('#contact-form', 'submit.php', function(error, success) {
      if(error) {
        form.alert({
          title: 'Oops! Something went wrong',
          message: 'Please try again in a few minutes...'
        });
      } else {
        form.alert({
          title: 'Thanks for reaching out!',
          message: 'I will be in touch soon.'
        })
      }
    });

  });

});
