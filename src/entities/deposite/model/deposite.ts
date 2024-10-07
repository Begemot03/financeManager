import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Deposite } from "./types";
import { useOperationStore } from "@/entities/operation/model";
import { uuid } from "@/shared/lib/uuid";
import { Currency } from "@/shared/lib/currency";
import { DepositeType } from ".";
import { notify } from "@/shared/ui/notification";

export const useDepositeStore = defineStore("deposite", () => {
    const deposites = ref<Deposite[]>([{
            id: uuid(),
            name: "Под подушкой",
            type: DepositeType.Cash,
            startBalance: 10000,
            comment: "Личные сбережения",
            currency: Currency.RUB
        }, {
            id: uuid(),
            name: "Тиньк зп",
            type: DepositeType.Cash,
            startBalance: 5000,
            comment: "Зарплатная карта",
            currency: Currency.EUR
        }, {
            id: uuid(),
            name: "Альфа сбер счет",
            type: DepositeType.Cash,
            startBalance: 20000,
            comment: "Карта для покупок",
            currency: Currency.USD
        }
    ]);

    const depositeBalance = computed(() => {
        return (depositeId: number) => {
            const operationStore = useOperationStore();

            const deposite = deposites.value.find(d => d.id === depositeId);

            if(!deposite) {
                console.log(`Депозит ${depositeId} не найден!`);
                return 0;
            }

            const depositeOperations = operationStore.depositeOperations(depositeId) || [];

            return depositeOperations.reduce((total, operation) => (total + operation.sum), deposite.startBalance);
        };
    });

    function addDeposite({name, type, startBalance, comment, currency } : Deposite) {
        deposites.value.push({
            id: uuid(),
            name: name,
            type,
            startBalance,
            comment,
            currency,
        });

        notify({ title: "Успех!", subtitle: "Новый счет был создан без проблем.", type: "success" });
    }

    return { deposites, depositeBalance, addDeposite, };
});