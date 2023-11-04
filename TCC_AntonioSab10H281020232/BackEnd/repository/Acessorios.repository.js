const {TabelaAcessorios} = require("../scriptsbd/modelsbd")
class AcessoriosRepository {
    listar = async (req) => {
        const params = req.query
        const whereParams = {}
 
        if (params.tipo & params.marca & params.modelo & params.serie & params.preco & params.descricao) {
          whereParams.tipo = whereParams.tipo
          whereParams.marca = params.marca
          whereParams.modelo = params.modelo
          whereParams.serie = params.serie
          whereParams.preco = params.preco
          whereParams.descricao = params.descricao
        }
        
        return await TabelaViolao.findAll({where: whereParams})
    }
    delete = async (id) => {
        try {
            const deleted = await TabelaAcessorios.destroy({where:{id: id}});
            return deleted;
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
        return await TabelaAcessorios.create(obj)    
    }
}
module.exports = new AcessoriosRepository()