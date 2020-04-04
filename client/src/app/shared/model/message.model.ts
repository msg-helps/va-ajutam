import User from './user.model';

export default interface Message {
  author: User;
  content: string;
  createdAt: Date;
}
