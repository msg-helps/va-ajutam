import User from './user.model';

export default interface Message {
  id: string;
  author: User;
  content: string;
  createdAt: Date;
}
