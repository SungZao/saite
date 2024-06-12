const btn = document.querySelector("#send");
var n1 = 3;

btn.addEventListener("click", function(e){

e.preventDefault();

const resp = document.querySelector("#resposta");



const value = resp.value;

if(value == "XxLauraxX"){

    alert("parabéns...");
    window.location.href=""
}

})