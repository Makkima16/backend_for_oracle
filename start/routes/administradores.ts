import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post("/admin","AdministratorsController.store");
    Route.put("/admin/:id","AdministratorsController.update");
    Route.get("/admin/:id","AdministratorsController.show");
    Route.get("/admin","AdministratorsController.index");
    Route.delete("/admin","AdministratorsController.destroy");


})