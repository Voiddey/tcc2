const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const AcessoriosController = require('../controller/Acessorios.controller')

class AcessoriosRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'acessorios/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', AcessoriosController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', AcessoriosController.cadastrar)
        server.put(SERVER_URL + ENTITY_NAME + 'atualizar', AcessoriosController.atualizar)
        server.delete(SERVER_URL + ENTITY_NAME + 'deletar', AcessoriosController.delete)
    }

}

module.exports = AcessoriosRouterLoader