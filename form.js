// this script checks whether the username and password fields are filled before allowing submissions
document.addEventListener('DOMContentLoaded', function(){
    const form =
 document.getElementById('QuickNet Login');
 
 form.addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === ''){
        alert('Please enter both username and password');

        return;
    }
 

})
})