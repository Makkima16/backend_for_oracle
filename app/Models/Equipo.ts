import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Partido from './Partido'

export default class Equipo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public favor: number

  @column()
  public contra: number

  @column()
  public npartidos: number

  @hasMany(() => Partido, { foreignKey: 'equipo1' })
  public numero1: HasMany<typeof Partido>;

  @hasMany(() => Partido, { foreignKey: 'equipo2' })
  public numero2: HasMany<typeof Partido>;



  // Hook para formatear fechas antes de guardar

}
