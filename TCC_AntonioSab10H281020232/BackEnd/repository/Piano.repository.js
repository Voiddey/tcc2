const {TabelaPiano} = require("../scriptsbd/modelsbd")
class PianoRepository {
    listar = async (req) => {
        const params = req.query
        const whereParams = {}
 
        if (params.tipo & params.marca & params.modelo & params.serie & params.numeroteclas & params.numeropedais & params.comprimento & params.peso & params.preco & params.descricao) {
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
        
        return await TabelaPiano.findAll({where: whereParams})
    }
    delete = async (id) => {
        try {
            const deleted = await TabelaPiano.destroy({where:{id: id}});
            return deleted
        }catch (error){
            throw error;
        }
    }
    atualizar = async (obj) => {
        console.log('nao atualizado: ' + JSON.stringify(obj))
        const updated = await TabelaPiano.findByPk(obj.id)
        console.log('atualizado: ' + JSON.stringify(updated))
        return await updated.update(obj)
    }
    cadastrar = async (obj) => {
        return await TabelaPiano.create(obj)    
    }
}
module.exports = new PianoRepository()