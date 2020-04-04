import BaseHelp from './help.model';
import User from './user.model';

export default interface HelpOffer extends BaseHelp {
  quantity: number;
  beneficiaries: Array<User | string>;
}
