function validar(){
const form = document.getElementById("form")
const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")

if(nome.value == ""){
    window.alert("O campo nome está vazio!")
}

if(sobrenome.value == ""){
    window.alert("O campo sobrenome está vazio!")
}

if(email.value == "" || !valemail(email.value)){
    window.alert("O campo email está vazio ou preenchido errado!")
}

function valemail(email){
    const emailregex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/)
}

if(emailregex.test(email)){
    return true
}

}

if(senha.value == ""){
    window.alert("O campo senha está vazio!")
}
