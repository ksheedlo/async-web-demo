+function(){
'use strict';

var KEY_ENTER = 13;

arrayFrom(document.querySelectorAll('.js__text-input')).forEach(function (elt) {
  elt.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KEY_ENTER) {
      pushMessage(elt.value);
      elt.value = '';
      evt.preventDefault();
    }
  });
});

arrayFrom(document.querySelectorAll('.js__boom-button')).forEach(function (elt) {
  var textInput = elt.parentNode.querySelector('.js__text-input');

  elt.addEventListener('click', function (evt) {
    pushMessage(textInput.value);
    textInput.value = '';
  });
});

function pushMessage(messageText) {
  var messageNode = document.querySelector('#template').cloneNode(true);
  messageNode.removeAttribute('id');
  messageNode.className = removeClass(messageNode.className, 'hidden');
  messageNode
    .querySelector('.message')
    .appendChild(document.createTextNode(messageText));
  document
    .querySelector('.screen-contents')
    .appendChild(messageNode);
}

function removeClass(className, classToRemove) {
  var classList = className.split(' '),
    idx = classList.indexOf(classToRemove);

  if (idx !== -1) {
    classList.splice(classList.indexOf(classToRemove), 1);
  }
  return classList.join(' ');
}

function arrayFrom(arrayLike) {
  var xs = new Array(arrayLike.length);
  for (var i = 0; i < arrayLike.length; i++) {
    xs[i] = arrayLike[i];
  }
  return xs;
}
}();
