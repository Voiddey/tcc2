const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const ViolaoController = require('../controller/Violao.controller')

class ViolaoRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'violao/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', ViolaoController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', ViolaoController.cadastrar)
        server.put(SERVER_URL + ENTITY_NAME + 'atualizar', ViolaoController.atualizar)
        server.delete(SERVER_URL + ENTITY_NAME + 'deletar', ViolaoController.delete)
    }

}

module.exports = ViolaoRouterLoader