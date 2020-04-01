import BaseHelp, {HelpStatus} from './help.model';
import User from './user.model';

export default interface HelpRequest extends BaseHelp {
  requestedFor: string;
  volunteers: User[];
  status: HelpStatus;
}
