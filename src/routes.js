const express = require('express');

const ControlerVend = require('./controle/controlevendas');
const ControlerCliente = require('./controle/controlecliente');
const ControlerRaiz = require('./controle/controleraiz');
const Controlerprod = require('./controle/controleprod');

const routes = express.Router()


routes.get('/' , ControlerRaiz.raiz);


// CLIENTE 

routes.get('./cliente' , ControlerCliente.clientes);
routes.post('./cliente' , ControlerCliente.createCli);
routes.put('./cliente/:cli_cod', ControlerCliente.updateCli);
routes.delete('./cliente/:cli_cod', ControlerCliente.deleteCli);


// VENDAS

routes.get('./vendas'  , ControlerVend.vendas);
routes.post('./vendas' , ControlerVend.createVend);
routes.put('./vendas/:ven_cod' , ControlerVend.updateVend);
routes.delete('./vendas/:ven_cod' ,ControlerVend.deleteVend);



// PRODUTOS

routes.get('./produtos' , Controlerprod.produtos);
routes.post('./produtos' , Controlerprod.createPro);
routes.put('./produtos/:pro_cod' , Controlerprod.updateProd);
routes.delete('./produtos/:pro_cod', Controlerprod.deleteProd);

module.exports = routes;