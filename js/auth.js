import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize variables
const auth = getAuth();
const database = firebase.database()

// Function de registration
function submit(){
    firstname = document.getElementById('firstname').value
    lastname = document.getElementById('name').value
    tel = document.getElementById('telephone').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // Registration
    auth.createUserWithEmailAndPassword(auth,email,password).then(function(){
        var user = auth.currentUser

        // Adding to database
        var database_ref = database.ref()
        var user_data = {
            firstname: firstname,
            lastname: lastname,
            email:email,
            telephone: tel,
            email: email,
            last_login: Date.now()
        } 

        database_ref.child('users/' + user.uid).set(user_data)

        alert('User created')
    })
    .catch(function(error) {
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
    })
}
