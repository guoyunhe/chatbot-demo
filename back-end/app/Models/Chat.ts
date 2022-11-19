import { column } from "@ioc:Adonis/Lucid/Orm";
import Model from "./Model";

export default class User extends Model {
  @column()
  public name: string;

  @column()
  public email: string;
}
