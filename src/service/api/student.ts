import { mockRequest, request } from "../request";
import { student } from "./types";

export const getStudentTern = (currPage: number, pageSize: number) => {
  return request.get<student>(`/student/studentTern?currPage=${currPage}&pageSize=${pageSize}`);
};
