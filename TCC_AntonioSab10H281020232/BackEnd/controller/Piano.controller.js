const PianoRepository = require("../repository/Usuario.repository")

class PianoController {
    listar = async (req, res) => {
        return res.status(200).json(await PianoRepository.listar(req))
     }
    cadastrar = async (req, res) => {
        try {
            const body = req.body
            console.log(body)
            if (!body.tipo & !body.marca & !body.modelo & !body.serie & !body.numeroTeclas & !body.tipoTeclas & !body.numeroPedais & !body.comprimento & !body.peso & !body.preco & !body.descricao) {
                throw new Error("TODOS OS DADOS DEVEM SER PREENCHIDOS!!!")
            }
            return res.status(200).json(await PianoRepository.cadastrar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao registrar um piano."})
        }
    }
    atualizar = async (req, res) => {
        try {
            const body = req.body

            if (!body.id) {
                throw new Error("Registro deve ter um id" + body)
            }
            return res.status(200).json(await PianoRepository.atualizar(body))
        } catch(error) {
            return res.status(500).json({msg: "Ocorreu um erro ao atualizar um registro."})
        }
    }
    delete = async (req, res) => {
        const body = req.body
        try{
            if (body) {
                return res.status(204).json(await PianoRepository.delete(body)); 
            }else {
                return res.status(404).json({ message: 'Registro não encontrado' });
            }
        }
        catch (error) {
            console.error('Erro ao excluir o usuário:', error);
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}
module.exports = new PianoController()