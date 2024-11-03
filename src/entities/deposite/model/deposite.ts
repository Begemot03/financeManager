import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { operationModel } from '@/entities/operation';
import { testFetching } from '@/shared/api';
import { Currency } from '@/shared/lib/currency';

export type DepositeType = {
	id: number;
	name: string;
	startBalance: number;
	currency?: Currency;
	comment: string;
};

export const useDepositeStore = defineStore('deposite', () => {
	const deposites = ref<DepositeType[]>([
		{
			id: 0,
			name: 'Сбер',
			startBalance: 0,
			currency: Currency.RUB,
			comment: '',
		},
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
