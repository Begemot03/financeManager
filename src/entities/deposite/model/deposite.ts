import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Deposite, DepositeType } from "./types";
import { operationModel } from "@/entities/operation/model";
import { uuid } from "@/shared/lib/uuid";
import { Currency } from "@/shared/lib/currency";
import {  } from ".";
import { notify } from "@/shared/ui/notification";

export const useDepositeStore = defineStore("deposite", () => {
    const deposites = ref<Deposite[]>([{
            id: uuid(),
            name: "Под подушкой",
            type: "Кредитка",
            startBalance: 10000,
            comment: "Личные сбережения",
            currency: Currency.RUB
        }, {
            id: uuid(),
            name: "Тиньк зп",
            type: "Кредитка",
            startBalance: 5000,
            comment: "Зарплатная карта",
            currency: Currency.EUR
        }, {
            id: uuid(),
            name: "Альфа сбер счет",
            type: "Кредитка",
            startBalance: 20000,
            comment: "Карта для покупок",
            currency: Currency.USD
        }
    ]);

    const depositeBalance = computed(() => {
        return (depositeId: number) => {
            const operationStore = operationModel();

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