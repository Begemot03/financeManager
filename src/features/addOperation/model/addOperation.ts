import type { Operation } from "@/entities/operation";
import { OperationType } from "@/entities/operation/model";
import { Currency } from "@/shared/lib/currency";
import { uuid } from "@/shared/lib/uuid";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAddOperationFeatureStore = defineStore("addOperation", () => {
    const operation = reactive<Operation>({
        id: uuid(),
        depositeId: 0,
        type: OperationType.Income,
        sum: 0,
        currency: Currency.RUB,
        category: "",
        comment: "",
    });

    return {
        operation,
    };
});