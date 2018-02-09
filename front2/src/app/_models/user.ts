import {Group} from './group.model';

export class User {
  email: string;
  firstName: string;
  lastName: string;
  groups: Group[];
  admin: boolean;
}
