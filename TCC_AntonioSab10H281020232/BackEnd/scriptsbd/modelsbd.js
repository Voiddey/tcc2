const {Sequelize} = require("sequelize");
const {sequelize} = require("./conexaobd")

const TabelaGuitarra = sequelize.define('TabelaGuitarra', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING,
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    raioescala: {
        type: Sequelize.FLOAT
    },
    ntrastes: {
        type: Sequelize.INTEGER
    },
    material: {
        type: Sequelize.STRING
    },
    anofabricacao: {
        type: Sequelize.INTEGER
    },
    descricao: {
        type: Sequelize.TEXT
    }
})

const TabelaViolao = sequelize.define('TabelaViolao', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: Sequelize.STRING,
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    raioescala: {
        type: Sequelize.FLOAT
    },
    ntrastes: {
        type: Sequelize.INTEGER
    },
    anofabricacao: {
        type: Sequelize.INTEGER
    },
    material: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.TEXT
    }
})

const TabelaPiano = sequelize.define('TabelaPiano', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.ENUM("Piano", "PianoEletrico"), // "Piano" ou "Piano Eletrico"
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    numeroteclas: {
        type: Sequelize.INTEGER
    },
    tipoteclas: {
        type: Sequelize.STRING
    },
    numeropedais: {
        type: Sequelize.INTEGER
    },
    comprimento: {
        type: Sequelize.FLOAT
    },
    peso: {
        type: Sequelize.FLOAT
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});

const TabelaSom = sequelize.define('TabelaSom', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.STRING // Tipo de produto de áudio, como "Alto-falante", "Amplificador", etc.
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    potencia: {
        type: Sequelize.FLOAT
    },
    impedancia: {
        type: Sequelize.INTEGER
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaAcessorios = sequelize.define('TabelaAcessorios', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.STRING // Tipo de acessório musical, como "Baquetas", "Pedal de Efeito", "Suporte de Teclado", etc.
    },
    marca: {
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    serie: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    },
    descricao: {
        type: Sequelize.TEXT
    }
});
const TabelaUsuarios = sequelize.define("TabelaUsuarios", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    }
})
sequelize.sync()

module.exports = {TabelaAcessorios, TabelaGuitarra, TabelaPiano, TabelaSom, TabelaUsuarios, TabelaViolao};