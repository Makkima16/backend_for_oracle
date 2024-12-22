import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'

export default class Apuesta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_cliente: number

  @column()
  public id_partido: number

  @column()
  public tipo_apuesta: string

  @column()
  public resultado: string

  @column()
  public monto: number

  @column()
  public cuota: number
  
  @column()
  public estado: string

  @column()
  public goles_equipo1:number

  @column()
  public goles_equipo2:number
  
  
  @belongsTo(() => Cliente,{
    foreignKey: 'id_cliente',
  })
  public cliente_apostador: BelongsTo<typeof Cliente>





}
