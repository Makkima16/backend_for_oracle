import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post("/apuesta","ApuestasController.store");
    Route.put("/apuesta/:id","ApuestasController.update");
    Route.get("/apuesta/:id","ApuestasController.show");
    Route.get("/apuesta","ApuestasController.index");
    Route.delete("/apuesta","ApuestasController.destroy");


})