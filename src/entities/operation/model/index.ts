export type { 
    IOperation,
} from "./types";

export enum OperationType {
    Income = "Доход",
    Spending = "Расход",
};

export { useOperationStore } from "./operationStore";