import neo4j from 'neo4j-driver'
import funcionario from '../models/funcionario.js';
import cargo from '../models/cargo.js'

const driver = new neo4j.driver("neo4j://localhost:7687", neo4j.auth.basic("neo4j", "neo4jdi9"))

const session = driver.session({
    database: "neo4j"
})

export const getAllFunc = async (req, res) => {

    let Func = funcionario.schema('public')

        Func.findAll({
        order:['fno']
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))

}
/*
export const getOne = async (req, res) => {

    let { id } = req.params
    let Cp = Compra.schema('public')

    Cp.findOne({
        where:{
            id: id
        }
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))

}
*/
export const addFunc = async (req, res) => {
   
    let Func = funcionario.schema('public')
    let {cod_cargo, pno, fnome} = req.body

    const idcargo = await cargo.findOne({_id : cod_cargo})

    const results = await session.run(`MATCH (n:projeto {id: ${pno}}) return n`,{})
    
    Func.create({
        pno: results.records[0]._fields[0].properties.id, cod_cargo: idcargo._id.toString(), cargo: results.records[0]._fields[0].properties.cargo, fnome
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
}
/*
export const editOne = async (req, res) => {
   
    let Cp = Compra.schema('public')
    let {id} = req.params
    let {idpessoa, idproduto} = req.body
    
    let updates = {}

    if(idproduto){
    const prod = await Produto.findOne({_id : idproduto})
    updates.nomeproduto = prod.nomeproduto
    updates.idproduto = idproduto
    }
    if(idpessoa){
        const results = await session.run(`MATCH (n:cliente {id: ${idpessoa}}) return n`,{})
        updates.nomepessoa = results.records[0]._fields[0].properties.nome
        updates.idpessoa = idpessoa
    }
    Cp.update({
        updates
    },{
        where:{
            id: id
        }
    })
    //3423239 //2 //bludke
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

export const deleteOne = async (req, res) => {
    let { id } = req.params
    let Cp = Compra.schema('public')

    Cp.destroy({
        where: { id: id }
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
}
*/