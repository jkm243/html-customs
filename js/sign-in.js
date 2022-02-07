var email = document.getElementById('email');
var myInput = document.getElementById('password');


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
        message2.innerHTML = '* Adresse mail valide';
        message2.style.color = 'rgb(3, 150, 3)';
      }, 1000);
      setTimeout(function() {
        message2.style.display = 'none';
      }, 4000);
    }
  },
  false
);