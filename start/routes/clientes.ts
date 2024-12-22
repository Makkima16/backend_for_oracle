import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post("/cliente","ClientesController.store");
    Route.put("/cliente/:id","ClientesController.update");
    Route.get("/cliente/:id","ClientesController.show");
    Route.get("/cliente","ClientesController.index");
    Route.delete("/cliente","ClientesController.destroy");
    Route.get('/buscar_Email', 'ClientsController.buscar_Email');


})