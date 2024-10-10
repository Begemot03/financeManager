import { computed, ref } from "vue";
import type { Operation, OperationType } from "./types";
import { defineStore } from "pinia";
import { uuid } from "@/shared/lib/uuid";
import { Currency } from "@/shared/lib/currency";

export const useOperationStore = defineStore("operationStore", () => {
    const operations = ref<Operation[]>([
        {
            depositeId: 0,
            name: "Купил самокат",
            id: uuid(),
            currency: Currency.RUB,
            type: "Доход",
            sum: 1000,
            category: "Еда",
            comment: "Продал на неделю продуктов"
        },
    ]);

    const depositeOperations = computed(() => {
        return (depositeId: number) => {
            return operations.value.filter(op => op.depositeId === depositeId);
        }
    });

    return { 
        operations, 
        depositeOperations, 
    };
})