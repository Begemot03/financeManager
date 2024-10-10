import type { Currency } from "@/shared/lib/currency";

export type DepositeType = "Наличные" | "Кредитка";

export type Deposite = {
    id: number;
    name: string,
    type: DepositeType;
    startBalance: number;
    currency: Currency;
    comment: string;
};
