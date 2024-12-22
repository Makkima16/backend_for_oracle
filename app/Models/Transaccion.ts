import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Pago from './Pago'

export default class Transaccion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_usuario: number

  @column()
  public tipo: string

  @column()
  public monto: number

  @column()
  public state: string

  @column()
  public fecha: string

  @belongsTo(() => Cliente,{
    foreignKey: 'id_usuario',
  })
  public cliente: BelongsTo<typeof Cliente>

  @hasMany(() => Pago, {
    foreignKey: 'transaccion_id'
  })
  public cliente_pagador: HasMany<typeof Pago>

}
