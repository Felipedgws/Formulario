function validar(){
const form = document.getElementById("form")
const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")

if(nome.value == ""){
    window.alert("O campo nome está vazio!")
    return
}

if(sobrenome.value == ""){
    window.alert("O campo sobrenome está vazio!")
    return
}

if(email.value == "" || !valemail(email.value)){
    window.alert("O campo email está vazio ou preenchido errado!")
    return
}

if(!valsenha(senha.value, 8)){
    window.alert("O campo senha deve ser preenchido com no mínimo 8  digitos!")
    return
}

function valemail(emailinput){
    const emailregex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/)


if(emailregex.test(emailinput)){
    return true
}
return false

}

function valsenha(password, minDigits){
    if(password.length >= minDigits){
        return true
    }
    return false
}

}


