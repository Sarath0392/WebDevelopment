var password = document.getElementById("it_pwd"),
    confirm_password = document.getElementById("it_cnfpwd");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Password and Confirm Password should be same");
        flag = false;
    } else {
        confirm_password.setCustomValidity('');
    }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

var h1_errMsg = document.getElementById("h1_errMsg");

if(h1_errMsg.textContent != ''){
    $("#err_alert").fadeTo(2000, 500).slideUp(500, function(){
        $("#err_alert").slideUp(500);
    });
    $("#h1_errMsg").text("");
    document.getElementById("it_name").value = document.getElementById("h1_userName").textContent;
    document.getElementById("it_email").value = document.getElementById("h1_emailId").textContent;
    document.getElementById("it_username").setCustomValidity('UserId already exists');
}else{
    $("#err_alert").css("display","none");
    document.getElementById("it_username").setCustomValidity('');
}

function validateUserId(userName){
    var newVal = userName.value;
    var oldVal = userName.oldvalue;
    if(!newVal){
        document.getElementById("it_username").setCustomValidity('Please enter the Username');
    }else if(oldVal !== null && newVal !== null && newVal !== oldVal){
        document.getElementById("it_username").setCustomValidity('');
    }
}