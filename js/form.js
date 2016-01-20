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
    var fields = $(form + ' .field');
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
    }, 1000);
  }

}
