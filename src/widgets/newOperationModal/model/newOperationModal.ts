import { depositeModel } from "@/entities/deposite";
import type { Operation } from "@/entities/operation";
import { Currency } from "@/shared/lib/currency";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export const useNewOperationModal = defineStore("newOperationModal", () => {
    const depositeStore = depositeModel();
    const listOfDeposites = computed(() => depositeStore.deposites.map(deposite => (
        {
            name: deposite.name, 
            id: deposite.id 
        })
    ));

    const newOperation = reactive<Operation>({
        id: 0,
        name: "",
        depositeId: 0,
        type: "Доход",
        sum: 0,
        currency: Currency.RUB,
        category: "Еда",
        comment: ""
    });

    const visible = ref(false);

    function close() {
        visible.value = false;
    }

    function open() {
        visible.value = true;
    }

    function reset() {
        newOperation.name = "";
        newOperation.sum = 0;
        newOperation.type = "Доход";
        newOperation.currency = Currency.RUB;
        newOperation.category = "Еда";
        newOperation.comment = "";
    }

    return {
        newOperation,
        listOfDeposites,
        visible,
        close,
        open,
        reset,
    };
});