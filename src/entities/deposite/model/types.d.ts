import type { Currency } from "@/shared/lib/currency";
import { DepositeType } from ".";

export interface IDeposite {
    id: number;
    name: string,
    type: DepositeType;
    startBalance: number;
    currency: Currency;
    comment: string;
};