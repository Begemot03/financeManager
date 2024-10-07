import type { Currency } from "@/shared/lib/currency";
import { OperationType } from ".";

export interface IOperation {
    id?: number;
    depositeId: number;
    type: OperationType;
    sum: number;
    currency: Currency;
    date?: Date;
    category: string;
    meta: string;
    comment: string;
};