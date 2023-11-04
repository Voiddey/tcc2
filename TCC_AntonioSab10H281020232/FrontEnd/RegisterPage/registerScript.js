const inputsenha = document.getElementById("senha");
const inputemail = document.getElementById("email");
let h6 = document.createElement("h6");
let NewSenha = ""
let NewEmail = ""
document.getElementById("RegisterBox").appendChild(h6);
const submit = document.getElementById("submit");
submit.addEventListener("click",(click)=>{
    click.preventDefault()
})
function fazerRegister(){
    if(inputsenha.value === "" & inputemail.value === ""){
        h6.innerHTML = "Insira um email e/ou senha"
        h6.classList.remove("correto")
    }else{
        h6.innerHTML = "Usuario cadastrado com sucesso";
        h6.classList.add("correto");
        NewSenha = inputsenha.value
        NewEmail = inputemail.value
    }
}

submit.addEventListener("click", ()=>{
    fazerRegister()
    console.log(NewEmail, NewSenha)
}) 
