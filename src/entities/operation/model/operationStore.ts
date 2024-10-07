import { computed, ref } from "vue";
import type { IOperation } from "./types";
import { OperationType } from ".";
import { defineStore } from "pinia";
import { uuid } from "@/shared/lib/uuid";
import { Currency } from "@/shared/lib/currency";

export const useOperationStore = defineStore("operationStore", () => {
    const operations = ref<IOperation[]>([
        {
            depositeId: 0,
            id: uuid(),
            currency: Currency.RUB,
            type: OperationType.Income,
            sum: 1000,
            category: "Еда",
            meta: "Top top",
            comment: "Продал на неделю продуктов"
        }, {
            depositeId: 0,
            id: uuid(),
            currency: Currency.RUB,
            type: OperationType.Spending,
            sum: 1000,
            category: "Такси",
            meta: "Top top",
            comment: "Поехал в питер"
        }, {
            depositeId: 0,
            id: uuid(),
            currency: Currency.RUB,
            type: OperationType.Income,
            sum: 1000,
            category: "Электроника",
            meta: "Top top",
            comment: "Купил комп"
        }, 
    ]);

    const depositeOperations = computed(() => {
        return (depositeId: number) => {
            return operations.value.filter(op => op.depositeId === depositeId);
        }
    });

    function addOperation({ sum, depositeId, type, category, meta, comment } : IOperation) {
        operations.value.push({
            id: uuid(),
            currency: Currency.RUB,
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