export enum RequestOfferStatus {
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  PENDING_CONFIRMATION = 'Pending Confirmation',
  DONE = 'Done'
}

export enum ListType {
  OFFERS = 'Offers',
  REQUESTS = 'Requests'
}

export interface PersonIdentity {
  id: number;
  name: string;
  phone: string;
  details?: string;
}

export interface ListModel {
  id: number;
  creationDate: Date;
  title: string;
  shortDescription: string;
  address: string;
  requestedBy: PersonIdentity;
  status: RequestOfferStatus;
  participantsCount: number;
}
