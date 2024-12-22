import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Apuesta from "App/Models/Apuesta";

export default class ApuestasController {
    public async store({request}:HttpContextContract){
        let body = request.body();
        const theApuesta=await Apuesta.create(body)
        return theApuesta;
    }
    public async index({request}: HttpContextContract){
        const page =request.input('page', 1);
        const perPage = request.input("per_page", 20)
        let Apuestas:Apuesta[]=await Apuesta.query().paginate(page, perPage)
        return Apuestas;
    }
    public async show({params}:HttpContextContract){
        return Apuesta.findOrFail(params.id)
    }

    public async destroy({params, response}: HttpContextContract){
        const theApuesta: Apuesta = await Apuesta.findOrFail(params.id);
        response.status(204);
        return theApuesta.delete()
    }
}
