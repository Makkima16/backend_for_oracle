import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'transacciones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_usuario').unsigned().references('id').inTable('clientes').onDelete('CASCADE');
      table.string('tipo') // Restricción para solo aceptar 'fisico' o 'virtual'
      table.integer('monto')
      table.string('state')
      table.string('fecha')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
