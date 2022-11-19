interface Model {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message extends Model {
  chatId: number;
  type: string;
  content: string;
}

export interface Chat extends Model {
  title: string;
  messages: Message[];
}
