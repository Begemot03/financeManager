import { computed, reactive } from "vue";
import type { IOperation } from "./types";
import { defineStore } from "pinia";

export const useOperationStore = defineStore("operationStore", () => {
    const operations = reactive<IOperation[]>([]);

    const depositeOperations = computed(() => {
        return (depositeId: number) => {
            return operations.filter(op => op.depositeId === depositeId);
        }
    });

    function addOperation({ sum, depositeId, type, category, meta, comment } : IOperation) {
        operations.push({
            id: Math.random() * 10000,
            sum,
            depositeId,
            type,
            category,
            meta,
            comment,
            date: new Date(),
        });
    }

    return { operations, depositeOperations, addOperation, };
})