import { createRequest } from "./request";

const url = "http://localhost:8080/";

export const request = createRequest({ baseURL: url });

export const mockRequest = createRequest({ baseURL: "/mock" });
