import type { DepositeType, Deposite } from "@/entities/deposite";
import { Currency } from "@/shared/lib/currency";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAddDepositeFeatureStore = defineStore("addDeposite", () => {
    const deposite = reactive<Deposite>({
        id: 0,
        name: "",
        type: "Наличные",
        startBalance: 0,
        currency: Currency.RUB,
        comment: ""
    });

    function reset() {
        deposite.comment = "";
        deposite.name = "";
        deposite.startBalance = 0;
        deposite.currency = Currency.RUB;
        deposite.type = "Наличные";
    }

    return {
        deposite,
        reset,
    };
});