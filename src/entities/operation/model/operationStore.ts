import { computed, ref } from "vue";
import type { Operation } from "./types";
import { OperationType } from ".";
import { defineStore } from "pinia";
import { uuid } from "@/shared/lib/uuid";
import { Currency } from "@/shared/lib/currency";

export const useOperationStore = defineStore("operationStore", () => {
    const operations = ref<Operation[]>([
        {
            depositeId: 0,
            id: uuid(),
            currency: Currency.RUB,
            type: OperationType.Income,
            sum: 1000,
            category: "Еда",
            comment: "Продал на неделю продуктов"
        }, {
            depositeId: 0,
            id: uuid(),
            currency: Currency.RUB,
            type: OperationType.Spending,
            sum: 1000,
            category: "Такси",
            comment: "Поехал в питер"
        }, {
            depositeId: 0,
            id: uuid(),
            currency: Currency.RUB,
            type: OperationType.Income,
            sum: 1000,
            category: "Электроника",
            comment: "Купил комп"
        }, 
    ]);

    const depositeOperations = computed(() => {
        return (depositeId: number) => {
            return operations.value.filter(op => op.depositeId === depositeId);
        }
    });

    function addOperation({ sum, depositeId, type, category, comment } : Operation) {
        operations.value.push({
            id: uuid(),
            currency: Currency.RUB,
            sum,
            depositeId,
            type,
            category,
            comment,
            creationDate: new Date(),
        });
    }

    return { operations, depositeOperations, addOperation, };
})