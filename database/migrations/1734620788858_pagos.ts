import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pagos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('transaccion_id').unsigned().nullable().references('id').inTable('transacciones').onDelete('CASCADE')
      table.string('name')
      table.string('ref')
      table.string('email')
      table.integer('amount')
      table.string('product')
      table.string('state')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
