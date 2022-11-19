import { column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import Message from './Message';
import Model from './Model';

export default class Chat extends Model {
  @column()
  public title: string | null;

  @hasMany(() => Message)
  public messages: HasMany<typeof Message>;
}
