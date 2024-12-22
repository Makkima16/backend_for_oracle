import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'equipos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre')
      table.integer('favor')
      table.integer('contra')
      table.integer('npartidos')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
