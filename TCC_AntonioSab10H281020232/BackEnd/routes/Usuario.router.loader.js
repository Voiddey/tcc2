const {SERVER_URL} = require('../variaveis_compartilhadas/variaveiscomp')
const UserController = require('../controller/Usuario.controller')

class UserRouterLoader {

    static load(server) {
        const ENTITY_NAME = 'usuarios/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', UserController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', UserController.cadastrar, ()=>{
            app.use(SERVER_URL + ENTITY_NAME + 'cadastrar', express.static(path.join(__dirname, 'register.html')))
        })
        server.put(SERVER_URL + ENTITY_NAME + 'atualizar', UserController.atualizar)
        server.delete(SERVER_URL + ENTITY_NAME + 'deletar', UserController.delete)
    }

}

module.exports = UserRouterLoader