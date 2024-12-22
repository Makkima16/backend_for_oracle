import { BaseModel, BelongsTo, belongsTo, column  } from '@ioc:Adonis/Lucid/Orm'
import Equipo from './Equipo'

export default class Partido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public equipo1: number

  @column()
  public equipo2: number

  @column()
  public fecha: string

  @column()
  public fin: string

  @column()
  public estadio: string
  
  @column()
  public estado: string

  @column()
  public goles_equipo1: number

  @column()
  public goles_equipo2: number

  @column()
  public resultado_partido: string

  @belongsTo(() => Equipo,{
    foreignKey: 'equipo1',
  })
  public numero1: BelongsTo<typeof Equipo>

  @belongsTo(() => Equipo,{
    foreignKey: 'equipo2',
  })
  public numero2: BelongsTo<typeof Equipo>




}
