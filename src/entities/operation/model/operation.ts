import { computed, ref } from 'vue';
import type { Operation, OperationType } from './types';
import { defineStore } from 'pinia';
import { Currency } from '@/shared/lib/currency';
import { testFetching } from '@/shared/api';

export const useOperationStore = defineStore('operationStore', () => {
	const operations = ref<Operation[]>([]);
	const loading = ref(false);

	const depositeOperations = computed(() => {
		return (depositeId: number) => {
			return operations.value.filter((op) => op.depositeId === depositeId);
		};
	});

	async function getOperationList() {
		try {
			loading.value = true;
			await testFetching(1500);
		} catch (e) {
			console.log(`Ошибка при получении списка операций: ${e}`);
		} finally {
			loading.value = false;
		}
	}

	return {
		operations,
		loading,
		depositeOperations,
		getOperationList,
	};
});
