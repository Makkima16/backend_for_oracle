import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Equipo from 'App/Models/Equipo';

export default class EquiposController {

    public async store({request}:HttpContextContract){
        let body = request.body();
        const theEquipo=await Equipo.create(body)
        return theEquipo;
    }
    public async index({request}: HttpContextContract){
        const page =request.input('page', 1);
        const perPage = request.input("per_page", 20)
        const theEquipo = await Equipo.query().paginate(page, perPage);
        return theEquipo;
    }
    public async show({params}:HttpContextContract){
        return Equipo.findOrFail(params.id)
    }

    public async destroy({params, response}: HttpContextContract){
        const theEquipo: Equipo = await Equipo.findOrFail(params.id);
        response.status(204);
        return theEquipo.delete()
    }
    public async update({params, request}: HttpContextContract){
        const body = request.body();
        const theEquipo: Equipo = await Equipo.findOrFail(params.id);
        theEquipo.nombre = body.nombre;
        theEquipo.favor = body.favor;
        theEquipo.contra = body.contra;
        theEquipo.npartidos = body.npartidos;

        return theEquipo.save();
    }
}
