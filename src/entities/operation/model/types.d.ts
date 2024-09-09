export type TOperationType = "Доход" | "Расчет";

export interface IOperation {
    id?: number;
    depositeId: number;
    type: TOperation;
    sum: number;
    date?: Date;
    category: string;
    meta: string;
    comment: string;
};