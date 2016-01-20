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
    }

  }

}