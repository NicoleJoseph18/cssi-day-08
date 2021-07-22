const onSubmit = () => {
    
    const passcodeInput = document.querySelector("#passcode").value;
    const messageInput = document.querySelector("#message").value;
    const error = document.querySelector("#error")
    const errorClose = document.querySelector("#error-close")
    const errorText = document.querySelector("#error-text")
    try{

    
    const payload = {

        passcode: passcodeInput   ,
        message: messageInput

    }
    if( payload.message.length >  6)
    {
        throw "the message is too long, stay in a length of 6"
    }
    firebase.database().ref().push(payload)
}
catch(errorMessage){
errorText.innerHTML = errorMessage
return
}
error.classList.add("hidden")
}

errorClose.addEventListener("click", () => {
  error.classList.add("hidden")
})