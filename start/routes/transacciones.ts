import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post("/transaccion","TransaccionsController.store");
    Route.put("/transaccion/:id","TransaccionsController.update");
    Route.get("/transaccion/:id","TransaccionsController.show");
    Route.get("/transaccion","TransaccionsController.index");
    Route.delete("/transaccion","TransaccionsController.destroy");


})