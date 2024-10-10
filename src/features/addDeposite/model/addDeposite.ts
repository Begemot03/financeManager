import { type Deposite, depositeModel } from "@/entities/deposite";
import { uuid } from "@/shared/lib/uuid";
import { newDepositeModalModel } from "@/widgets/newDepositeModal";
import { defineStore } from "pinia";


export const useAddDepositeFeatureStore = defineStore("addDeposite", () => {
    const depositeStore = depositeModel();
    const newDepositeModalStore = newDepositeModalModel();

    function addDeposite(newDeposite: Deposite) {
        depositeStore.deposites.push({
            ...newDeposite,
            id: uuid(),
        });
        
        newDepositeModalStore.reset();
    }

    return {
        addDeposite,
    };
});