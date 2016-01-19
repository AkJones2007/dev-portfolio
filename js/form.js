var form = {

  submit: function(form) {
    var formData = {};

    $(form + ' .field').each(function() {
      var name = $(this).attr('name');
      var value = $(this).val();

      if(value) {
        formData[name] = value;
      }
    });

    $.ajax({
      type: 'POST',
      url: 'submit.php',
      data: format.phpData(formData),
      success: function(text) {
        console.log(text);
      },
      fail: function(text) {
        console.log(text);
      }
    });
  }

}
