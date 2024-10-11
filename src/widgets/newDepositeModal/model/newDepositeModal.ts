import { Currency } from "@/shared/lib/currency";
import { defineStore } from "pinia";
import { useField, useForm } from "vee-validate";
import { ref } from "vue";

export const useNewDepositeModal = defineStore("newDepositeModal", () => {
    const { handleSubmit, handleReset } = useForm({
        initialValues: {
            name: "",
            type: "Наличные",
            startBalance: 0,
            currency: Currency.RUB,
            comment: "",
        },
        validationSchema: {
            name (value: string) {
                if (value) return true;
                return "Выберите имя счета.";
            },
            type (value: string) {
                if(value === "Наличные" || value === "Кредитка") return true;
                return "Выберите тип счета";
            },
            startBalance (value: number) {
                if (value >= 0) return true;
                return "Начальный баланс не может быть отрицательным.";
            },
            currency (value: string) {
                if (value === Currency.RUB || value === Currency.USD) return true;
                return "Выберите валюту из списка.";
            },
        },
    });

    const name = useField<string>("name");
    const type = useField<string>("type");
    const startBalance = useField<number>("startBalance");
    const currency = useField<string>("currency");
    const comment = useField<string>("comment");

    const visible = ref(false);

    function open() {
        visible.value = true;
    }

    function close() {
        visible.value = false;
    }

    return {
        name,
        type,
        startBalance,
        currency,
        comment,
        handleSubmit,
        handleReset,
        visible,
        open,
        close,
    };
});
