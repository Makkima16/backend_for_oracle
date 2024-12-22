import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaccion from 'App/Models/Transaccion';

export default class TransaccionsController {
    public async store({request}:HttpContextContract){
        let body = request.body();
        const theTransaccion=await Transaccion.create(body)
        return theTransaccion;
    }
    public async index({request}: HttpContextContract){
        const page =request.input('page', 1);
        const perPage = request.input("per_page", 20)
        let Transaccions:Transaccion[]=await Transaccion.query().paginate(page, perPage)
        return Transaccions;
    }
    public async show({params}:HttpContextContract){
        return Transaccion.findOrFail(params.id)
    }

    public async destroy({params, response}: HttpContextContract){
        const theTransaccion: Transaccion = await Transaccion.findOrFail(params.id);
        response.status(204);
        return theTransaccion.delete()
    }
}
