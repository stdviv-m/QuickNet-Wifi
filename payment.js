document.getElementById('Payment').addEventListener('submit',function(event){
    event.preventDefault();
    // get input values
    var phone =document.getElementById('phone').value;
    var pin =document.getElementById('pin').value;
    //  validating the phone number
    if(!/^\d{10}$/.test(phone)){
        showError('Please enter a valid 10-digit number');
                return;

    }
// validating pin
if(!/^\d{4}$/.test(pin)){
    showError('Please enter a valid 4-digit  PIN');
            return;
}
// for demo purposes log phone and PIN
console.log('Phone Number:', phone);
console.log('M-Pesa PIN:', pin);
//  clear any previous message
hideError();
});

function
showError(message){
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
}

function
hideError(){
    var errorMessage=document.getElementById('error-message');
    errorMessage.textContent = '';
}

