import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post("/pago","PagosController.store");
    Route.put("/pago/:id","PagosController.update");
    Route.get("/pago/:id","PagosController.show");
    Route.get("/pago","PagosController.index");
    Route.delete("/pago","PagosController.destroy");
    Route.post('/api/webhook/epayco', 'PagosController.handleWebhook');


})