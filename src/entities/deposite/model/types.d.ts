import type { Currency } from "@/shared/lib/currency";
import { DepositeType } from ".";

export interface Deposite {
    id: number;
    name: string,
    type: DepositeType;
    startBalance: number;
    currency: Currency;
    comment: string;
};