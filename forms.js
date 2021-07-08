//function to validate name and password
function validateform() {
    const fname = document.regform.fname.value;
    const lname = document.regform.lname.value;
    const paswd1 = document.regform.paswd1.value;
    const paswd2 = document.regform.paswd2.value;

    if(fname === lname) {
        alert("Name can't be the same");
        return false;
    } else if(paswd1.value !== paswd2.value) {
        alert("password does not match");
        return false;
    } else {
        alert("form submitted")
    }
}

//function to validate e-mail
function validateemail() {
    const z = document.regform.email.value;
    const atpos = z.indexOf("@");
    const dotpos = z.lastIndexOf(".");

    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length) {
        alert("Enter a valid e-mail \n atpos:"+atpos+"\n dotpos:"+dotpos);
        return false;
    } 
}

