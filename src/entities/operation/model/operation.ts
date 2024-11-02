import { computed, ref } from 'vue';
import type { Operation } from './types';
import { defineStore } from 'pinia';
import { testFetching } from '@/shared/api';
import { Currency } from '@/shared/lib/currency';

export const useOperationStore = defineStore('operationStore', () => {
	const operations = ref<Operation[]>([
		{
			id: 0,
			depositeId: 0,
			name: 'Велосипед',
			type: 'Доход',
			sum: 1000,
			currency: Currency.RUB,
			category: 'Сумка',
			comment: 'Купил просто так'
		},
		{
			id: 1,
			depositeId: 0,
			name: 'Машина',
			type: 'Расход',
			sum: 1000,
			currency: Currency.RUB,
			category: 'Пост',
			comment: 'Купил просто так'
		}
	]);
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
