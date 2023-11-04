const {TabelaViolao} = require("../scriptsbd/modelsbd")

class ViolaoRepository {
    listar = async (req) => {
        const params = req.query
        const whereParams = {}
 
        if (params.marca & params.modelo & params.serie & params.preco & params.raioescala & params.ntrastes & params.anofabricacao & params.material & params.descricao) {
          whereParams.marca = params.marca
          whereParams.modelo = params.modelo
          whereParams.serie = params.serie
          whereParams.preco = params.preco
          whereParams.raioescala = params.raioescala
          whereParams.ntrastes = params.ntrastes
          whereParams.anofabricacao = params.anofabricacao
          whereParams.material = params.material
          whereParams.descricao = params.descricao
        }
        
        return await TabelaViolao.findAll({where: whereParams})
    }
    delete = async (id) => {
        try {
            const deleted = await TabelaViolao.destroy({where:{id: id}});
            return deleted
        }catch (error){
            throw error;
        }
    }
    atualizar = async (obj) => {
        console.log('nao atualizado: ' + JSON.stringify(obj))
        const updated = await TabelaViolao.findByPk(obj.id)
        console.log('atualizado: ' + JSON.stringify(updated))
        return await updated.update(obj)
    }
    cadastrar = async (obj) => {
        return await TabelaViolao.create(obj)    
    }
}
module.exports = new ViolaoRepository()