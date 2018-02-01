var socket = io();

//alert('hello bobo');

$('form').submit(function () {
  //var utcDate = (new Date()).toUTCString();
  var text = $('#message').val();
  var initials = $('#initials').val();
  var message = initials + ': ' + text;
  socket.emit('message', message);
  $('#message').val('');
  return false;
});

socket.on('message', function (msg) {
  $('<li>').text(msg).appendTo('#history');
  var lemon = document.getElementById('history');
  lemon.scrollTop = lemon.scrollHeight;
});
