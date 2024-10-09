export type { 
    Operation,
} from "./types";

export enum OperationType {
    Income = "Доход",
    Spending = "Расход",
};

export { useOperationStore as operationModel } from "./operationStore";