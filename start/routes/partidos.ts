import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post("/partido","PartidosController.store");
    Route.put("/partido/:id","PartidosController.update");
    Route.get("/partido/:id","PartidosController.show");
    Route.get("/partido","PartidosController.index");
    Route.delete("/partido","PartidosController.destroy");
    Route.get("/topPartidos","PartidosController.getTopPartidos");
    Route.get('partidos/:id/equipos', 'PartidosController.getEquiposPorPartido');


})