import cargo from '../models/cargo.js'
import mongoose from 'mongoose'

export const findAllCargo = async (req, res) => {
   
    let carg = await cargo.find();

    res.json({carg})

}
/*
export const findOneProd = async (req, res) => {
    let id = req.params.id
    const prod = await Produto.findOne({_id : id})
    res.json({prod})
}
*/
export const addCargo = async (req, res) => {
   
    const carg = cargo(req.body)
    carg.save()
    
    res.json(carg)
}
/*
export const editOneProd = async (req, res) => {
   
    const {nome} = req.body
    const {id} = req.params

    let find = await Produto.findByIdAndUpdate(id, {nomeproduto: req.body.nomeproduto})
    res.json(find._id)
    return



    if(find._id){

        let comp = await Cp.findAll({where:{idcarro: id}})

        if(comp.length < 1){
            res.json('Carro salvo com sucesso!Nenhum comprovante atualizado...')
            return
        }
            await Cp.update({
                carro: req.body.nome
            },{
                where:{idcarro: id}
            }).then(result => res.json({total: result,find}))
            .catch(err => res.json(err))       
    }

    res.json('Carro salvo com sucesso')
    return

}



export const deleteOneProd = async (req, res) => {

    let id = req.params.id

    const find = await Produto.findOne({_id : id}).remove()
    res.json(find)
    return
    if(find.deletedCount > 0){

        let comp = await Cp.findAll({where:{idcarro: id}})

        if(comp.length < 1){
            res.json('Carro excluido com sucesso.Nenhum comprovante a ser excluido...')
            return
            
        }

        Cp.destroy({
            where: { idcarro: id }
        })
        .then(result => res.json({totalCarrosExcluidos: result, CarrosExcluidos: find.deletedCount}))
        .catch(err => res.json(err))
        return
    }
    if(find.deletedCount === 0){
        res.json('Nenhum carro excluido com este id!Tente novamente')
    }
    res.json('Deletado com sucesso!!')
    return


}
*/