var format = {

  phpData: function(data) {
    var dataArray = [];
    for(var key in data) {
      var value = data[key];
      dataArray.push(key + '=' + value);
    }
    return dataArray.join('&');
  }

}
