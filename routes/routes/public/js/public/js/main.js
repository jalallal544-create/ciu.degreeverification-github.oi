import API from "./api.js";

const searchBtn =
document.querySelector("#search-btn");

const searchInput =
document.querySelector("#search-id");

searchBtn.addEventListener("click",verify);

async function verify(){

    const id = searchInput.value.trim();

    if(!id){

        alert("Enter Student ID");

        return;

    }

    const result = await API.verify(id);

    if(result.success){

        localStorage.setItem(

            "student",

            JSON.stringify(result.data)

        );

        location.href="/result";

    }

    else{

        alert(result.message);

    }

}
