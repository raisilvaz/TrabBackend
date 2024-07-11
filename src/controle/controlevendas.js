const knex = require('../database/index')


module.exports = {
async vendas(req, res) {
    const result = await knex('vendas'); 
    return res.json(result);
},
    async createVend (req, res){
        try{
            const {cli_cod} = req.body
            const {pro_cod} = req.body
            const {ven_data} = req.body
            const {ven_valor} = req.body
            await knex ('vendas').insert({
                cli_cod,
                pro_cod,
                ven_data,
                ven_valor,
            });
            return res.status(201).send();
        }
            catch (erro){
                console.log(erro);
            }
    },
    async updateVend (req, res){
        try{
            const {ven_cod} = req.params
            const {cli_cod} = req.body
            const {pro_cod} = req.body
            const {ven_data} = req.body
            const {ven_valor} = req.body
            await knex ('vendas').update({
                cli_cod,
                pro_cod,
               ven_data,
               ven_valor,
            }).where({ven_cod});
            return res.send();
        } catch (erro){
             console.log(erro);
            }
    },
    async deleteVend(req, res){
        try{
            const { ven_cod } = req.params;
            await knex('vendas')
            .where({ ven_cod })
            .del()

            return res.send();

        }catch(erro){
            console.log(erro);

        }
    }
} 