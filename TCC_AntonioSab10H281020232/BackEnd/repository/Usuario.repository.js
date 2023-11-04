const {TabelaUsuarios} = require("../scriptsbd/modelsbd")

class UserRepository {
    listar = async (req) => {
        const params = req.query
        const whereParams = {}
 
        if (params.email & params.senha) {
          whereParams.email = params.email
          whereParams.senha = params.senha
        }
        
        return await TabelaUsuarios.findAll({where: whereParams})
    }
    delete = async (id) => {
        try {
            const deleted = await TabelaUsuarios.destroy({where:{id: id}});
            return deleted
        }catch (error){
            throw error;
        }
    }
    atualizar = async (obj) => {
        console.log('nao atualizado: ' + JSON.stringify(obj))
        const updated = await TabelaUsuarios.findByPk(obj.id)
        console.log('atualizado: ' + JSON.stringify(updated))
        return await updated.update(obj)
    }
    cadastrar = async (obj) => {
        return await TabelaUsuarios.create(obj)    
    }

}
module.exports = new UserRepository()
