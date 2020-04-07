import HelpRequest from './help-request.model';

export default interface User {
  id: string;
  username?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  isAdmin: boolean;
  organization: string;
  region: string;
}

export interface UserWithHelpRequests extends User {
  volunteersFor: HelpRequest[];
  ownedHelpRequests: HelpRequest[];
}
