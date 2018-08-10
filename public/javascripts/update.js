setTimeout(function() {
  odometer.innerHTML = end.value;
}, 1000);

setInterval(function() {
  var request = new XMLHttpRequest();
  request.open('GET', '/get');
  request.responseType = 'json';
  request.onload = function () {
    final = request.response[0]['end'];
    end.value = final;
    odometer.innerHTML = final;
  }
  request.send();
}, 300000);
