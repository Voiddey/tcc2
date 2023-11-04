const AcessoriosRepository = require("../repository/Usuario.repository")

class AcessoriosController {
    listar = async (req, res) => {
        return res.status(200).json(await AcessoriosRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.tipo & !body.marca & !body.modelo & !body.serie & !body.preco & !body.descricao) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await AcessoriosRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um acessorio."})
        }
    }
    atualizar = async (req, res) => {
        try {
            const body = req.body

            if (!body.id) {
                throw new Error("Registro deve ter um id" + body)
            }
            return res.status(200).json(await AcessoriosRepository.atualizar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao atualizar um registro."})
        }
    }
    delete = async (req, res) => {
        const body = req.body
        try{
            if (body) {
                return res.status(204).json(await AcessoriosRepository.delete(body)); 
            }else {
                return res.status(404).json({ message: 'registro não encontrado' });
            }
        }
        catch (error) {
            console.error('Erro ao excluir o usuário:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}
module.exports = new AcessoriosController()