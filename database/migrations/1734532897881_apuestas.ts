import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'apuestas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_cliente').unsigned().references('id').inTable('clientes').onDelete('CASCADE');
      table.integer('id_partido')
      table.string('tipo_apuesta')
      table.string('resultado')
      table.integer('monto')
      table.integer('cuota')
      table.string('estado')
      table.integer('goles_equipo2')
      table.integer('goles_equipo1')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
