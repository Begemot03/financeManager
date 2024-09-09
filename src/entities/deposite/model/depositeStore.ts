import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import type { IDeposite } from "./types";
import { useOperationStore } from "@/entities/operation/model";

export const useDepositeStore = defineStore("depositeStore", () => {
    
    const deposites = reactive<IDeposite[]>([]);

    const depositeBalance = computed(() => {
        return (depositeId: number) => {
            const operationStore = useOperationStore();

            const deposite = deposites.filter(d => d.id === depositeId)[0];
            const depositeOperations = operationStore.depositeOperations(depositeId);

            return depositeOperations.reduce((prev, d) => (prev + d.sum), deposite.startBalance);
        };
    });

    function addDeposite({ type, startBalance, comment, currency } : IDeposite) {
        deposites.push({
            id: Math.random() * 10000,
            type,
            startBalance,
            comment,
            currency,
        });
    }

    return { deposites, depositeBalance, addDeposite, };
})