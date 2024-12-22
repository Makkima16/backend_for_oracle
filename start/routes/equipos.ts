import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post("/equipo","EquiposController.store");
    Route.put("/equipo/:id","EquiposController.update");
    Route.get("/equipo/:id","EquiposController.show");
    Route.get("/equipo","EquiposController.index");
    Route.delete("/equipo","EquiposController.destroy");


})