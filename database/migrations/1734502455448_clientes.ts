import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email')
      table.integer('saldo')
      table.integer('tel')
      table.string('user_id')
      table.string('estado')
      table.integer('cuenta')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
