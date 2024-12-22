import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Partido from "App/Models/Partido";

export default class PartidosController {
    public async store({request}: HttpContextContract) {
        let body = request.body();
        const thePartido = await Partido.create(body)
        return thePartido;
    }

    public async index({request}: HttpContextContract) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20)
        let Partidos: Partido[] = await Partido.query().paginate(page, perPage)
        return Partidos;
    }

    public async show({params}: HttpContextContract) {
        return Partido.findOrFail(params.id)
    }

    public async destroy({params, response}: HttpContextContract) {
        const thePartido: Partido = await Partido.findOrFail(params.id);
        response.status(204);
        return thePartido.delete()
    }

    // Nuevo método para obtener los primeros 4 partidos
    public async getTopPartidos({}: HttpContextContract) {
        // Obtenemos los primeros 4 partidos ordenados por fecha (puedes cambiar el orden según lo que necesites)
        const topPartidos = await Partido.query().limit(2).orderBy('fecha', 'asc');
        return topPartidos;
    }

        public async update({params, request}: HttpContextContract){
            const body = request.body();
            const thePartido: Partido = await Partido.findOrFail(params.id);
            thePartido.estado = body.estado;
            thePartido.goles_equipo1 = body.goles_equipo1;
            thePartido.goles_equipo2 = body.goles_equipo2;
            thePartido.resultado_partido = body.resultado_partido;
    
            return thePartido.save();
        }

        public async getEquiposPorPartido({ params, response }: HttpContextContract) {
            const partidoId = params.id;
        
            try {
              // Encuentra el partido por ID y precarga las relaciones con los equipos
              const partido = await Partido.query()
                .where('id', partidoId)
                .preload('numero1')  // Preload del equipo 1
                .preload('numero2')  // Preload del equipo 2
                .firstOrFail();  // Si no se encuentra, lanzará un error
        
              // Devuelve los equipos asociados al partido
              return response.status(200).json({
                equipo1: partido.numero1, // Equipo 1
                equipo2: partido.numero2  // Equipo 2
              });
            } catch (error) {
              return response.status(404).json({ message: 'Partido no encontrado.' });
            }
          }
}
