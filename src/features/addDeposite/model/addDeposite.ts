import { type Deposite, depositeModel } from "@/entities/deposite";
import { testFetching } from "@/shared/api";
import { uuid } from "@/shared/lib/uuid";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAddDepositeStore = defineStore("addDeposite", () => {
	const depositeStore = depositeModel();
	const loading = ref(false);

	async function addDeposite(newDeposite: Deposite) {
		try {
			loading.value = true;
			await testFetching(1500);
			await depositeStore.getDepositeList();

			depositeStore.deposites.push({
				...newDeposite,
				id: uuid(),
			});
		} catch (e) {
			console.log(`Ошибка при добавлении депозите: ${e}`);
		} finally {
			loading.value = false;
		}
	}

	return {
		addDeposite,
		loading,
	};
});
