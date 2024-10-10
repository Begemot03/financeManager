import { operationModel, type Operation, type OperationType } from "@/entities/operation";
import { testFetching } from "@/shared/api";
import { uuid } from "@/shared/lib/uuid";
import { newOperationModalModel } from "@/widgets/newOperationModal";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAddOperationFeatureStore = defineStore("addOperation", () => {
    const operationStore = operationModel();
    const newOperationModalStore = newOperationModalModel();

    const loading = ref(false);

    async function addOperation(newOperation: Operation) {
        const data = {...newOperation};

        try {
            loading.value = true;
            await testFetching(1500);
            await operationStore.getOperationList();
            
            operationStore.operations.push({
                id: uuid(),
                name: data.name,
                sum: data.sum,
                type: data.type,
                depositeId: data.depositeId,
                category: data.category,
                comment: data.comment,
                currency: data.currency,
            });
            newOperationModalStore.reset();
        } catch(e) {
           console.log(`Произошла ошибка при добавлении операции ${e}`)
        } finally {
            loading.value = false;
        }        
    }

    return {
        addOperation,
        loading,
    };
});