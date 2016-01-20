var form = {

  submit: function(formID, url, callback) {
    var formData = this.getData(formID);

    $.ajax({
      type: 'POST',
      url: url,
      data: format.phpData(formData),
      success: function(status) {
        if(status === 'success') {
          callback(null, status);
        } else {
          callback(status);
        }
      }
    });
  },

  getData: function(formID) {
    var fields = $(formID + ' .field');
    var data = {};

    fields.each(function() {
      var name = $(this).attr('name');
      var value = $(this).val();

      data[name] = value;
    });

    return data;
  },

  alert: function(content) {
    ui.modal.setTitle(content.title);
    ui.modal.setMessage(content.message);
    ui.modal.show();

    setTimeout(function() {
      ui.modal.hide();
    }, 2000);
  },

  validate: {

    field: function(field) {
      var name = field.attr('name');
      var fieldID = '#contact-' + name;
      var title = $(fieldID + ' .title').html();
      var value = $(field.val());

      if(field.hasClass('required') && field.val() === '') {
        var message = '*' + title.slice(0, title.length - 1) + ' is a required field';
        ui.formValidation.invalid(fieldID, message);
        return false;
      } else {
        ui.formValidation.valid(fieldID);
        return true;
      }
    },

    form: function(formID) {
      var fields = $(formID + ' .field');
      var valid = true;
      fields.each(function() {
        if(!form.validate.field($(this))) {
          valid = false;
        }
      });
      return valid;
    }

  }

}
