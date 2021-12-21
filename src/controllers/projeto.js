import neo4j from 'neo4j-driver'

const driver = new neo4j.driver("neo4j://localhost:7687", neo4j.auth.basic("neo4j", "neo4jdi9"))

const session = driver.session({
    database: "neo4j"
})

export const addProjeto = async (req, res) => {

    const {orcamento} = req.body

    const results = await session.run(`create (n:projeto {orcamento: '${orcamento}', id: ${Math.floor(Math.random() * 10000000)}}) return n`,{})
    .then(result => res.send(result.records[0]._fields[0].properties.orcamento))

}

export const findAllProjetos = async (req, res) => {
 
    const results = await session.run(`MATCH (n:projeto) return n`,{})

    const nodes = []

    results.records.forEach(res =>{
        nodes.push({
            orcamento: res.get(0).properties.orcamento, id: res.get(0).properties.id.low
        })
    })

    res.json({nodes})

}
/*
export const findOneCliente = async (req, res) => {
 
    let {id} = req.params

    const results = await session.run(`MATCH (n:cliente {id: ${id}}) return n`,{})

    const nodes = []

    results.records.forEach(res =>{
        nodes.push({
            nome: res.get(0).properties.nome, id: res.get(0).properties.id.low, compras: res.get(0).properties.compras.low
        })
    })

    res.json({nodes})

}


export const editOneCliente = async (req, res) => {
 
    let {id} = req.params
    let {nome} = req.body

    const results = await session.run(`MATCH (n:cliente {id: ${id}}) SET n.nome = '${nome}' return n`,{})

    const nodes = []

    results.records.forEach(res =>{
        nodes.push({
            nome: res.get(0).properties.nome, id: res.get(0).properties.id.low
        })
    })

    res.json({nodes})
}



export const deleteOneCliente = async (req, res) => {
 
    let {id} = req.params
    
    const results = await session.run(`MATCH (n:cliente {id: ${id}}) DELETE n`,{})
    
    res.json(results.summary.counters._stats.nodesDeleted)
}
*/