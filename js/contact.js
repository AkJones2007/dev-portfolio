var contact = {

  submit: function() {
    var form = $('#contact form .field');
    var info = {};

    form.each(function() {
      var name = $(this).attr('name');
      var value = $(this).val();

      if(value) {
        info[name] = value;
      }
    });

    return info;
  }

};
