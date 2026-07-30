const token =
localStorage.getItem("token");

if(!token){

location="/admin";

}

document
.getElementById("logoutBtn")
.onclick=()=>{

localStorage.removeItem("token");

location="/admin";

};
