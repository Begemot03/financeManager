import { operationModel, type Operation, type OperationType } from "@/entities/operation";
import { uuid } from "@/shared/lib/uuid";
import { newOperationModalModel } from "@/widgets/newOperationModal";
import { defineStore } from "pinia";

export const useAddOperationFeatureStore = defineStore("addOperation", () => {
    const operationStore = operationModel();
    const newOperationModalStore = newOperationModalModel();

    function addOperation(newOperation: Operation) {
        operationStore.operations.push({
            id: uuid(),
            name: newOperation.name,
            sum: newOperation.sum,
            type: newOperation.type,
            depositeId: newOperation.depositeId,
            category: newOperation.category,
            comment: newOperation.comment,
            currency: newOperation.currency,
        });

        newOperationModalStore.reset();
    }

    return {
        addOperation,
    };
});