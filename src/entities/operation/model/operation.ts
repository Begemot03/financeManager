import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { testFetching } from '@/shared/api';
import { Currency } from '@/shared/lib/currency';

export type OperationEventType = 'Доход' | 'Расход';

export type OperationType = {
	id: number;
	depositeId: number;
	name: string;
	type: OperationEventType;
	sum: number;
	currency?: Currency;
	creationDate?: Date;
	category: string;
	comment?: string;
};

export const useOperationStore = defineStore('operationStore', () => {
	const operations = ref<OperationType[]>([
		{
			id: 0,
			depositeId: 0,
			name: 'Велосипед',
			type: 'Расход',
			sum: 1000,
			creationDate: new Date(),
			currency: Currency.RUB,
			category: 'Еда',
		},
		{
			id: 1,
			depositeId: 0,
			name: 'Машина',
			type: 'Доход',
			sum: 100,
			creationDate: new Date(),
			currency: Currency.RUB,
			category: 'Развлечения',
		},
	]);
	const loading = ref(false);

	const depositeOperations = computed(() => {
		return (depositeId: number) => {
			return operations.value.filter((op) => op.depositeId === depositeId);
		};
	});

	const operationsByType = computed(() => (by?: OperationEventType) => {
		if (by == undefined) return operations.value;
		return operations.value.filter((op) => op.type == by);
	});

	const operationsTotal = computed(() =>
		operationsByType.value().reduce((acum, cur) => acum + cur.sum, 0)
	);

	const expensesTotal = computed(() =>
		operationsByType.value('Расход').reduce((acum, cur) => acum + cur.sum, 0)
	);
	const incomesTotal = computed(() =>
		operationsByType.value('Доход').reduce((acum, cur) => acum + cur.sum, 0)
	);

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
		operationsByType,
		operationsTotal,
		expensesTotal,
		incomesTotal,
		getOperationList,
	};
});
