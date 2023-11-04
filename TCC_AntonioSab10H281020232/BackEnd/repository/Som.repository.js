const {TabelaSom} = require("../scriptsbd/modelsbd")
class SomRepository {
    listar = async (req) => {
        const params = req.query
        const whereParams = {}
 
        if (params.tipo & params.marca & params.modelo & params.serie & params.potencia & params.impedancia & params.preco & params.descricao) {
          whereParams.tipo = params.tipo
          whereParams.marca = params.marca
          whereParams.modelo = params.modelo
          whereParams.serie = params.serie
          whereParams.potencia = params.potencia
          whereParams.impedancia = params.impedancia
          whereParams.preco = params.preco
          whereParams.descricao = params.descricao
        }
        
        return await TabelaSom.findAll({where: whereParams})
    }
    delete = async (id) => {
        try {
            const deleted = await TabelaSom.destroy({where:{id: id}});
            return deleted
        }catch (error){
            throw error;
        }
    }
    atualizar = async (obj) => {
        console.log('nao atualizado: ' + JSON.stringify(obj))
        const updated = await TabelaSom.findByPk(obj.id)
        console.log('atualizado: ' + JSON.stringify(updated))
        return await updated.update(obj)
    }
    cadastrar = async (obj) => {
        return await TabelaSom.create(obj)    
    }
}
module.exports = new SomRepository()