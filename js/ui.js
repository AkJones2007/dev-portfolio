var ui = {

  modal: {

    setTitle: function(text) {
      $('#modal .content .title').html(text);
    },
    setMessage: function(text) {
      $('#modal .content .message').html(text);
    },
    show: function() {
      $('#modal').removeClass('fadeOut');
      $('#modal').addClass('fadeIn');

      $('#modal').removeClass('hidden');
    },
    hide: function() {
      $('#modal').removeClass('fadeIn');
      $('#modal').addClass('fadeOut');

      $('#modal').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#modal').addClass('hidden');
      });
    }

  },

  formValidation: {

    valid: function(fieldID) {
      var errorMessage = $(fieldID + ' .error-message');
      var field = $(fieldID + ' .field');

      field.removeClass('invalid');

      errorMessage.addClass('hidden');
    },
    invalid: function(fieldID, message) {
      var errorMessage = $(fieldID + ' .error-message');
      var field = $(fieldID + ' .field');

      field.addClass('invalid');

      errorMessage.removeClass('hidden');
      errorMessage.html(message);
    }

  }

}
