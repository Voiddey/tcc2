const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const SomController = require('../controller/Som.controller')

class SomRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'som/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', SomController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', SomController.cadastrar)
        server.put(SERVER_URL + ENTITY_NAME + 'atualizar', SomController.atualizar)
        server.delete(SERVER_URL + ENTITY_NAME + 'deletar', SomController.delete)
    }

}

module.exports = SomRouterLoader