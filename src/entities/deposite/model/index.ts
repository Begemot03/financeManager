export { useDepositeStore as depositeModel } from "./deposite";

export enum DepositeType {
    Cash = "Наличные",
    CreditCard = "Кредитка",
};

export type { Deposite } from "./types";