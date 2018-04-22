import {Group} from './group.model';

export class User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  groups: Group[];
  admin: boolean;
}
