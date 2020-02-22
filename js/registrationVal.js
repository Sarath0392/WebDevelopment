var password = document.getElementById("it_pwd")
    , confirm_password = document.getElementById("it_cnfpwd");

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
console.log(h1_errMsg.textContent);

if(h1_errMsg.textContent != ''){
    $("#err_alert").fadeTo(2000, 500).slideUp(500, function(){
        $("#err_alert").slideUp(500);
    });
    $("#h1_errMsg").text("");
    console.log(h1_errMsg.textContent);
}else{
    $("#err_alert").css("display","none")
}