const express = require('express')
const {PORT} = require('./variaveis_compartilhadas/variaveiscomp')

const AcessoriosRouterLoader = require('./routes/Acessorios.router.loader')
const GuitarraRouterLoader = require("./routes/Guitarra.router.loader")
const PianoRouterLoader = require("./routes/Piano.router.loader")
const SomRouterLoader = require("./routes/Som.router.loader")
const UserRouterLoader = require("./routes/Usuario.router.loader")
const ViolaoRouterLoader = require("./routes/Violao.router.loader")
const app = new express()

app.use(express.json())

app.listen(PORT, aoLigarServidor)
 
function aoLigarServidor() {
    console.log(`SERVIDOR LIGADO NA PORTA ${PORT}`)
}

AcessoriosRouterLoader.load(app)
GuitarraRouterLoader.load(app)
PianoRouterLoader.load(app)
SomRouterLoader.load(app)
UserRouterLoader.load(app)
ViolaoRouterLoader.load(app)