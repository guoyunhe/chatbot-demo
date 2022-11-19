import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Chat from './Chat';
import Model from './Model';

export default class Message extends Model {
  // bot or user
  @column()
  public from: string;

  // text, image, video, spinner, sticker, etc.
  @column()
  public type: string;

  // text message, sticker code, url of video or image
  @column()
  public content: string;

  // which chat it belongs to
  @column()
  public chatId: number;

  // which chat it belongs to
  @belongsTo(() => Chat)
  public chat: BelongsTo<typeof Chat>;
}
