import { operationModel, type OperationType } from '@/entities/operation';
import { testFetching } from '@/shared/api';
import { Currency } from '@/shared/lib/currency';
import { uuid } from '@/shared/lib/uuid';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAddOperationStore = defineStore('addOperation', () => {
	const operationStore = operationModel();
	const loading = ref(false);

	async function addOperation(newOperation: OperationType) {
		loading.value = true;

		console.log(newOperation)

		try {
			await testFetching(1500);
			await operationStore.getOperationList();

			operationStore.operations.push({
				...newOperation,
				id: uuid(),
				currency: Currency.RUB,
			});
		} catch (e) {
			console.log(`Произошла ошибка при добавлении операции ${e}`);
		} finally {
			loading.value = false;
		}
	}

	return {
		addOperation,
		loading,
	};
});
