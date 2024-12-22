import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Apuesta from './Apuesta'
import Transaccion from './Transaccion'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public name: string

  @column()
  public email: string
  
  @column()
  public user_id: string
  
  @column()
  public estado: string
  
  @column()
  public cuenta: number
  
  @column()
  public saldo: number

  @column()
  public tel: number


  @hasMany(() => Apuesta, {
    foreignKey: 'id_cliente'
  })
  public cliente_apostador: HasMany<typeof Apuesta>


  @hasMany(() => Transaccion, {
    foreignKey: 'id_usuario'
  })
  public cliente_pagador: HasMany<typeof Transaccion>




}
