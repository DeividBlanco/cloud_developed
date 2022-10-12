import { loginvalidation } from "../js/firebase";

const evento = document.getElementById("loginbtn2")

async function register(){

    const user = document.getElementById("edtuser2").value
    const pass = document.getElementById("edtpassword2").value

    const sesion = loginvalidation(user,pass)
    const validation = await sesion

    if(validation != null)
    {
        alert("User athentication "+user)
        window.location.href="../plantillas/gome.html"
    }
    else
    {
        console.log("Sesion "+user+"not validation")
        alert("Usuario ya creado")
    }
}

window.addEventListener('DOMContentLoaded', async()=>{

    evento.addEventListener('click',login)
})