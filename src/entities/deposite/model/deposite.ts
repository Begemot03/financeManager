import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Deposite } from './types';
import { operationModel } from '@/entities/operation/model';
import { testFetching } from '@/shared/api';
import { Currency } from '@/shared/lib/currency';

export const useDepositeStore = defineStore('deposite', () => {
	const deposites = ref<Deposite[]>([
		{
			id: 0,
			name: 'Сбер',
			type: 'Наличные',
			startBalance: 0,
			currency: Currency.RUB,
			comment: ''
		}
	]);
	const loading = ref(false);

	const depositeBalance = computed(() => {
		return (depositeId: number) => {
			const operationStore = operationModel();

			const deposite = deposites.value.find((d) => d.id === depositeId);

			if (!deposite) {
				console.log(`Депозит ${depositeId} не найден!`);
				return 0;
			}

			const depositeOperations =
				operationStore.depositeOperations(depositeId) || [];

			return depositeOperations.reduce(
				(total, operation) => total + operation.sum,
				deposite.startBalance
			);
		};
	});

	async function getDepositeList() {
		try {
			loading.value = true;
			await testFetching(1500);
		} catch (e) {
			console.log(`Ошибка при получении списка счетов: ${e}`);
		} finally {
			loading.value = false;
		}
	}

	return {
		deposites,
		loading,
		depositeBalance,
		getDepositeList,
	};
});
