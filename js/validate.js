(function() {

    var form = document.querySelector("#form");
    var send = document.querySelector(".btn-send");
    var warning = document.querySelector(".warningMessage");


    function animationScroll() {
        if(document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -10);
            setTimeout(animationScroll, 10);
        }
    }

    // Warning Message
    function warningMessage(text) {
        warning.innerHTML = text;
        warning.style.display = "block";
        animationScroll();
    }

    function success(text) {
        warning.innerHTML = text;
        warning.style.display = "block";
        warning.style.backgroundColor = "green";
        animationScroll();
    }
    
    function validate(e) {
        e.preventDefault();
        // FIRSTNAME
        var firstName =  document.querySelector('#firstName').value;
        if(firstName === "") {
            warningMessage("Enter the name!");
            return false;
        }
        // LASTNAME
        var lastName = document.querySelector('#lastName').value;
        if(lastName === "") {
            warningMessage("Enter the surname!");
            return false;
        }
        // E-MAIL
        var email = document.querySelector('#email').value;
        if(email === "") {
            warningMessage("Enter the e-mail");
            return false;
        } else {
            var mailReg = new RegExp('^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$', 'gi');
            if(!mailReg.test(email)) {
                warningMessage("Email format invalid!");
                return false;
            }
        }
        //REGION
        var region = document.querySelector("#region").value;
        if(region === "") {
            warningMessage("Enter the region!");
            return false;
        }
        //PASSWORDS
        var password = document.querySelector("#password");
        var rptPassword = document.querySelector("#rptPassword");

        if(password.value !== rptPassword.value) {
            warningMessage("The passwords are not the same!");
            return false;
        } else if(password.value == "" && rptPassword.value == "") {
            warningMessage("Enter the password!");
        } else {
            success("Success!");
        }
        
    }
    
    send.addEventListener("click", validate, false);
    

})();