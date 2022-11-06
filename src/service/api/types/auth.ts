import internal from "stream";

export interface Login {
  id: string;
  userName: string;
  avatar: string;
  roles: string;
  token: string;
  permissions: string;
}
export interface student {
  total: number;
  size: number;
  data: {
    id: number;
    name: string;
    identityCard: string;
    age: number;
    gender: string;
    className: string;
    specialized: string;
    academy: string;
    grade: string;
    teacherId: number;
  }[];
}
