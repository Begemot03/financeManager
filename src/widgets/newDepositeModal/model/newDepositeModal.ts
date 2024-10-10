import type { Deposite } from "@/entities/deposite";
import { Currency } from "@/shared/lib/currency";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useNewDepositeModal = defineStore("newDepositeModal", () => {
    const newDeposite = reactive<Deposite>({
        id: 0,
        name: "",
        type: "Наличные",
        startBalance: 0,
        currency: Currency.RUB,
        comment: ""
    });

    const visible = ref(false);

    function open() {
        visible.value = true;
    }

    function close() {
        visible.value = false;
    }

    function reset() {
        newDeposite.comment = "";
        newDeposite.name = "";
        newDeposite.startBalance = 0;
        newDeposite.currency = Currency.RUB;
        newDeposite.type = "Наличные";
    }

    return {
        newDeposite,
        visible,
        open,
        close,
        reset,
    }
});