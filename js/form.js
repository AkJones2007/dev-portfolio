var form = {

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

  submit: function(data, url, callback) {
    $.ajax({
      type: 'POST',
      url: url,
      success: callback(null, data),
      fail: callback(data)
    });
  },

  alert: function(options) {
    var form = $(options.formID);
    var title = "<h2 class='title'>" + options.title + "</h2>";
    var content = "<p class='content'>" + options.content + "</p>";
    var newHTML = "<div class='alert'>" + title + content "</div>";

    form.html(newHTML);

    setTimeout(function() {
      $(options.formID).html(form);
    }, 1000)
  }

}
