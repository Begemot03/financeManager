import type { Currency } from "@/shared/lib/currency";
import { OperationType } from ".";

export interface Operation {
    id: number;
    depositeId: number;
    type: OperationType;
    sum: number;
    currency: Currency;
    creationDate?: Date;
    category: string;
    comment: string;
};