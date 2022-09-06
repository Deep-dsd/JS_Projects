let userName = document.getElementById("userName")
let passWord = document.getElementById("passWord")
let userError = document.getElementById("userError")
let passError = document.getElementById("passError")
let flag = 1;


function validate(){
    if(userName.value == ""){
        userError.innerHTML = "*User Name is Empty"
        flag = 0
    }
    else if(userName.value.length < 3){

        userError.innerHTML = "*Required minimum 5 characters"
        flag = 0
    }
    else{
        userError.innerHTML = ""
        flag = 1
    }
    if(passWord.value == ""){
        passError.innerHTML = "*Password is Empty"
        flag = 0
    }
    else if(passWord.value.length < 8){
        passError.innerHTML = "*Minimum length required is 8"
        flag = 0
    }
    else{
        passError.innerHTML = ""
        flag = 1
    }
    if(flag){
        return true
    }
    else{
        return false
    }
}