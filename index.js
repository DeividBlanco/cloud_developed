import { loginvalidation } from "../js/firebase";

const evento = document.getElementById("loginbtn")

async function login(){

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
        alert("Error de usuario verifique usuario y/o contraseña")
    }
}

window.addEventListener('DOMContentLoaded', async()=>{

    evento.addEventListener('click',login)
})