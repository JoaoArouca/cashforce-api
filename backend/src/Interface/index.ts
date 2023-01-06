import { Request, Response } from "express";
// import { Send } from "express-serve-static-core";

export interface IOrderService {
  getAllOrder(): Promise<IOrder[]>;
  getOrderById(id: Number): Promise<IOrder | Error>;
}

// export interface TypedResponse<ResBody> extends Express.Response {
//   status: Send<ResBody, this>;
//   json: Send<ResBody, this>;
// }

export interface Generic<T, Z> {
  status: T;
  json: Z;
}

export interface IOrderController {
  getAllOrders(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
  getOrderById(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
}

export interface IOrder {
  id: Number;
  orderNfId: String;
  orderNumber: String;
  emissionDate: String | null;
  emitedTo: String | null;
  nNf: String | null;
  CTE: String | null;
  value: String | null;
  createdAt: Date | String;
  updatedAt: Date | String;
  cnpjId: Number;
  userId: Number;
  buyerId: Number;
  providerId: Number;
  orderStatusBuyer: String | null;
  orderStatusProvider: String | null;
  buyer?: IBuyer;
  cnpj?: ICnpj;
  provider?: IProvider;
}

export interface IBuyer {
  id: Number;
  name: String;
  tradingName: String | null;
  cashforceTax: String | null;
  createdAt: Date | String;
  updatedAt: Date | String;
  cnpjId: Number;
  confirm: Boolean;
}

export interface ICnpj {
  id: Number;
  cnpj: String;
  companyType: String;
  createdAt: Date | String;
  updatedAt: Date | String;
}

export interface IProvider {
  id: Number;
  name: String;
  tradingName: String | null;
  createdAt: Date | String;
  updatedAt: Date | String;
  cnpjId: Number;
}
