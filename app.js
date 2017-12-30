// var userNameRef = document.getElementById('username')
// var cellNumberRef = document.getElementById('cellnumber')
// var emailRef = document.getElementById('email')
// var passwordRef = document.getElementById('password')
// var passwordrepeatRef = document.getElementById('passwordrepeat')

function signup(){
    var userNameRef = document.getElementById('username')
    var cellNumberRef = document.getElementById('cellnumber')
    var emailRef = document.getElementById('email')
    var passwordRef = document.getElementById('password')
    var passwordrepeatRef = document.getElementById('passwordrepeat')
    var customError = document.getElementById("custom-error")
var user = {
    name: userNameRef.value,
    cellNumber: cellNumberRef.value,
    email: emailRef.value,
    password: passwordRef.value,
    passwordrepeat: passwordrepeatRef.value
    
}
var valid = customValidation(user);
if (valid){
    console.log('valid', valid)
    firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
    .then(function(success){
        console.log("success", success);
    })
    .catch(function(error){
        console.log("error", error) ;
        setTimeout(()=>{customError.style.display = "none";}, 2000)
    
    })
    
}
else{
    console.log('in valid', valid)
    customError.style.display = "block";
    setTimeout(()=>{customError.style.display = "none";}, 2000)
}



// console.log("user",user);



 }   

function customValidation(_user){
 var valid = true;
  for(var key in _user){
   if (_user[key] === '' || _user[key] === undefined){
            valid = false;
        }
    }
        if(_user.password !== _user.passwordrepeat){
            vaild = false;
        }
 
        return valid;    
    }