import { IUser } from 'app/shared/model/user.model';
import { IDepartment } from 'app/shared/model/department.model';

export interface IEmployee {
  id?: number;
  salary?: number | null;
  user?: IUser | null;
  department?: IDepartment | null;
}

export const defaultValue: Readonly<IEmployee> = {};
