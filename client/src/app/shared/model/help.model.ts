import Message from './message.model';
import User from './user.model';

export enum HelpCategory {
  GROCERIES = 'groceries',
  SANITATION = 'sanitation'
}

export enum HelpStatus {
  IN_PROGRESS = 'in-progress',
  OPEN = 'open',
  CLOSED = 'closed'
}

export default interface BaseHelp {
  id: string;
  description: string;
  user: User;
  contactPerson: string;
  contactPhone: string;
  address: string;
  category: HelpCategory;
  createdAt: Date;
  title: string;
  messages: Message[];
}

