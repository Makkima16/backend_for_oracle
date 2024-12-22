import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'partidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('equipo1').unsigned().references('id').inTable('equipos').onDelete('CASCADE');
      table.integer('equipo2').unsigned().references('id').inTable('equipos').onDelete('CASCADE');
      table.string('fecha') // Fecha del partido
      table.string('fin') // Fecha del partido
      table.string('estadio') // Nombre del estadio
      table.string('estado')
      table.integer('goles_equipo1').defaultTo(0)
      table.integer('goles_equipo2').defaultTo(0)
      table.string('resultado_partido').defaultTo('pendiente')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
