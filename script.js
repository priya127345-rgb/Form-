function data(){
let a = document.getElementById("username").value.trim();
let b= document.getElementById("Phone").value.trim();
let c = document.getElementById("email-Id").value.trim();
let d = document.getElementById("Password").value;
let  e=document .getElementById("confirm-password").value;


if(a===""|| b===""|| c===""|| d===""||e===""){
    alert("All the fields are reduired");
    return false;
}else if(a.length  <=6){
  alert("username should contain atleast 6 char");
  return false;
}else if (b.length !==10){
    alert("enter valid phone number");
    return false;
}else if (d.length <=8){

    alert("password should be atleast 8 characters" );
    return false;
}else if (e!==d){
    alert("password doesnt match");
    return false;
}
 return true;
}