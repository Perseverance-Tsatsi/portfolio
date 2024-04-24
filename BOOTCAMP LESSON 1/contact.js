function handleFormSubmit(event){
    event.preventDefault()
   // console.log(event);
    //console.log(document);
    const emailinput = document.getElementById("email")
    const messageinput = document.getElementById("message")

    //console.log(emailinput);
    const isEmailValid = emailinput.value.trim() !== '' && emailinput.validity.valid
    console.log(isEmailValid);

    let isMessageValid = messageinput.value.trim() !=='';
    

    console.log({isEmailValid});

    const isformvalid = isEmailValid && isMessageValid
    if (isformvalid){
        //frab our data from the form
    }else {
        //alert the user that the form is invaid
        alert
    }

} 
