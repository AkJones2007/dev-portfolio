var contact = {

  submit: function() {
    var data = form.getData('#contact-form');

    form.submit(data, 'submit.php', function(error, data) {
      if(error) {
        console.error(error);
        form.alert(contact.fail);
      } else {
        form.alert(contact.success);
      }
    });
  },

  success: {
    formID: '#contact-form',
    title: 'Thanks for reaching out!',
    content: 'I will be in touch soon.'
  },

  fail: {
    formID: '#contact-form',
    title: 'Oops! It appears something went wrong.',
    contentL 'Try again in a few minutes...'
  }

};
