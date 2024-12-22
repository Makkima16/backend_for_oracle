/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/registrar-apuesta', 'ProcedimientosController.registrarApuesta')
Route.post('/registrar-cliente', 'ProcedimientosController.insertarCliente')
Route.post('/cargar-saldo', 'ProcedimientosController.cargarSaldo');
Route.post('/retirar-saldo', 'ProcedimientosController.retirar');
Route.post('/actualizarPartidos', 'ProcedimientosController.actualizarPartidos');


import "./routes/clientes";
import "./routes/apuestas";
import "./routes/equipos";
import "./routes/partidos";
import "./routes/transacciones";
import "./routes/administradores";
import "./routes/pago";




