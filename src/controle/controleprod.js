const knex = require('../database/index')


module.exports = {
    async produtos(req, res) {
        const result = await knex('produtos'); 
        return res.json(result);
    }, 

    async createPro(req, res){
        try{
            const {pro_nome} = req.body;
            const {pro_descri} = req.body;
            const {pro_qtda} = req.body;
            const {pro_fabricante} = req.body;
            await knex ('produtos').insert({
                pro_nome,
                pro_descri,
                pro_qtda,
                pro_fabricante
            });
            return res.status(201).send();
        }catch (erro){
                console.log(erro);
        }
    },
    async updateProd (req, res){
        try{
            const {pro_cod} = req.params
            const {pro_nome} = req.body
            const {pro_descri} = req.body
            const {pro_qtda} = req.body
            const {pro_fabricante} = req.body
            await knex ('produtos').update({
               pro_nome,
               pro_descri,
               pro_qtda,
               pro_fabricante
            }).where({pro_cod});
            return res.send();
        } catch (erro){
             console.log(erro);
            }

        },
        async deleteProd(req, res){
            try{
                const { pro_cod } = req.params;
                await knex('produtos')
                .where({ pro_cod })
                .del()
    
                return res.send();
    
            }catch(erro){
                console.log(erro);
            }

        }

}