import HelpRequest from './help-request.model';

export default interface User {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  isAdmin: boolean;
  isBanned: boolean;
  organization: string;
  region: string;
}

export interface UserWithHelpRequests extends User {
  volunteersFor: HelpRequest[];
  ownedHelpRequests: HelpRequest[];
}
