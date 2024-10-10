import { type Deposite, depositeModel } from "@/entities/deposite";
import { testFetching } from "@/shared/api";
import { uuid } from "@/shared/lib/uuid";
import { newDepositeModalModel } from "@/widgets/newDepositeModal";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useAddDepositeStore = defineStore("addDeposite", () => {
    const depositeStore = depositeModel();
    const newDepositeModalStore = newDepositeModalModel();

    const loading = ref(false);

    async function addDeposite(newDeposite: Deposite) {
        const data = { ...newDeposite };
        try {
            loading.value = true;
            await testFetching(1500);
            await depositeStore.getDepositeList();

            depositeStore.deposites.push({
                ...data,
                id: uuid(),
            });
            newDepositeModalStore.reset();
        } catch(e) {
            console.log(`Ошибка при добавлении депозите: {e}`);
        } finally {
            loading.value = false;
        }
    }

    return {
        addDeposite,
        loading,
    };
});