export type TDepositeType = "Наличные" | "Карта";
export type TCurrency = "Рубль" | "Доллар";

export interface IDeposite {
    id: number;
    type: TDepositeType;
    startBalance: number;
    currency: TCurrency;
    comment: string;
};