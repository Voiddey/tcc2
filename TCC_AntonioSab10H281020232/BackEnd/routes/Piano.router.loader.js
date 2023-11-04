const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const PianoController = require('../controller/Piano.controller')

class PianoRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'piano/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', PianoController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', PianoController.cadastrar)
        server.put(SERVER_URL + ENTITY_NAME + 'atualizar', PianoController.atualizar)
        server.delete(SERVER_URL + ENTITY_NAME + 'deletar', PianoController.delete)
    }

}

module.exports = PianoRouterLoader