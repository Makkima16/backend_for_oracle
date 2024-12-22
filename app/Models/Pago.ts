import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Transaccion from './Transaccion'

export default class Pago extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string|null
  
  @column()
  public name: string|null
  
  @column()
  public ref: string
  
  @column()
  public transaccion_id: number|null

  @column()
  public amount: number|null

  @column()
  public product: string|null

  @column()
  public state: string|null

  @belongsTo(() => Transaccion,{
    foreignKey: 'transaccion_id',
  })
  public cliente_pagador: BelongsTo<typeof Transaccion>
}
