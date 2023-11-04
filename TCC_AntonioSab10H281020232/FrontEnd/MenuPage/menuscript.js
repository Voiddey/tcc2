const body = document.getElementById("body");
function createCard(){
    var card = document.createElement("div");
    var img = document.createElement("img");
    var name = document.createElement("h4");
    var preco = document.createElement("h3");
    document.body.appendChild(card);
    document.card.appendChild(img);
    document.card.appendChild(name);
    document.card.appendChild(preco);
    name.innerHTML = "nome"
    preco.innerHTML = "preco"
}
function popup(){
    var popup = document.getElementById("popuptext");
    popup.classList.toggle("show");
}
createCard()
