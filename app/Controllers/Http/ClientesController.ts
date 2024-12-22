import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente';

export default class ClientesController {

    public async store({request}:HttpContextContract){
        let body = request.body();
        const theCliente=await Cliente.create(body)
        return theCliente;
    }
    public async index({ request }: HttpContextContract) {
        const page = request.input('page', 1);
        const perPage = request.input('per_page', 20);
    
        const clientes = await Cliente.query().paginate(page, perPage);
        return clientes;
    }
    public async show({params}:HttpContextContract){
        return Cliente.findOrFail(params.id)
    }

    public async destroy({params, response}: HttpContextContract){
        const theCliente: Cliente = await Cliente.findOrFail(params.id);
        response.status(204);
        return theCliente.delete()
    }
    public async buscar_Email({ request, response }: HttpContextContract) {
        const email = request.qs().email
        let client
        client = await Cliente.query().where('email', email).first()
        return response.json(client)
        }
}
