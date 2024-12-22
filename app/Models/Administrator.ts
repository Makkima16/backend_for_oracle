import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Administrator extends BaseModel {
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

}
