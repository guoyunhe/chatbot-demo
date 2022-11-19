import { column } from '@ioc:Adonis/Lucid/Orm';
import Model from './Model';

export default class Chat extends Model {
  @column()
  public title: string | null;
}
