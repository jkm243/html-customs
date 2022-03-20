//Delete default action buttons
var $btn = $('button');

$btn.click(function(e) {
  e.preventDefault();
});

// verification
var myInput = document.getElementById('password');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');
var message = document.getElementById('message');
var message2 = document.getElementById('message2');
var message3 = document.getElementById('message3');
var btnsubmit = document.getElementById('submit');
var tel = document.getElementById('telephone');
var input = document.getElementsByTagName('input');
var email = document.getElementById('email');

// When the user clicks on the password field, show the message box
myInput.addEventListener(
  'keyup',
  function() {
    message.style.display = 'block';
  },
  false
);

myInput.addEventListener(
  'blur',
  function() {
    message.style.display = 'none';
  },
  false
);


// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  } else {
    letter.classList.remove('valid');
    letter.classList.add('invalid');
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  } else {
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
    number.classList.add('invalid');
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove('invalid');
    length.classList.add('valid');
  } else {
    length.classList.remove('valid');
    length.classList.add('invalid');
  }
};

// validate email
var verifMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener(
  'keyup',
  function() {
    if (!email.value.match(verifMail)) {
      message2.style.display = 'block';
      message2.innerHTML = '* Adresse mail non valide';
      message2.style.color = 'red';
    } else if (email.value == '') {
      message2.style.display = 'none';
    } else {
      setTimeout(function() {
        message2.style.display = 'block';
        message2.innerHTML = '* Adresse mail val ide';
        message2.style.color = 'rgb(3, 150, 3)';
      }, 1000);
      setTimeout(function() {
        message2.style.display = 'none';
      }, 4000);
    }
  },
  false
);

// validation telephone number
var nomer = /^(\+\d{1,3}[- ]?)?\d{10}$/;
var nomer2 = /0{5,}/;

tel.addEventListener(
  'keyup',
  function() {
    if (
      !tel.value.match(nomer) ||
      tel.value.match(nomer2) ||
      !tel.value.length == 10
    ) {
      message2.style.display = 'block';
      message2.innerHTML = '* Numéro de téléphone non valide';
      message2.style.color = 'red';
    } else if (tel.value == '') {
      message2.style.display = 'none';
    } else {
      setTimeout(function() {
        message2.style.display = 'block';
        message2.innerHTML = '* Numero de téléphone valide';
        message2.style.color = 'rgb(3, 150, 3)';
      }, 1000);
      setTimeout(function() {
        message2.style.display = 'none';
      }, 4000);
    }
  },
  false
);