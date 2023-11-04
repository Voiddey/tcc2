const inputsenha = document.getElementById("senha");
const inputemail = document.getElementById("email");
const Psenha = "123456";
const Pemail = "Antonio";
let h6 = document.createElement("h6");
document.getElementById("LoginBox").appendChild(h6);
const submit = document.getElementById("submit");
document.getElementById("submit").addEventListener("click",(click)=>{
    click.preventDefault()
})
function fazerLogin(){
    axios.get('http://localhost:3000/rotaExemplo')
    .then
    if(inputsenha.value === Psenha & inputemail.value === Pemail){  
        h6.innerHTML = "Email e senha corretos";
        h6.classList.add("correto");
    }else if(inputsenha.value === "" & inputemail.value === ""){
        h6.innerHTML = "Insira um email e/ou senha"
        h6.classList.remove("correto")
    }else{
        h6.innerHTML = "Email e/ou senha incorretos"
        h6.classList.remove("correto")
    }
}
submit.addEventListener("click", ()=>{
    fazerLogin()
}) 
