const knex = require('../database/index')


module.exports = {
async clientes(req, res) {
    const result = await knex('cliente');
    return res.json(result)
},      
    async createCli (req, res){
        try{

            const {cli_nome} = req.body
            const {cli_email} = req.body
            const {cli_tel} = req.body
            await knex ('cliente').insert({
                cli_nome,
                cli_email,
                cli_tel,
            });
            return res.status(201).send();
        }
        catch(erro){
            console.log(erro);
            }
    },
    async updateCli (req, res){
        try{

            const {cli_cod} = req.params
            const {cli_nome} = req.body
            const {cli_email} = req.body
            const {cli_tel} = req.body
            await knex ('cliente').update({
                cli_nome,
                cli_email,
                cli_tel,
            }).where({cli_cod});
            return res.send();
        }
        catch(erro){
            console.log(erro);
            }
    },
    async deleteCli(req, res){
        try{
            const { cli_cod } = req.params;
            await knex('cliente')
            .where({ cli_cod })
            .del()

            return res.send();

        }catch(erro){
            console.log(erro);
        }
    }
}