import { operationModel } from '@/entities/operation';
import { testFetching } from '@/shared/api';
import { Currency } from '@/shared/lib/currency';
import { uuid } from '@/shared/lib/uuid';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export type MoneyTransferType = {
	depositeFrom: number;
	depositeTo: number;
	sum: number;
};

export const useMoneyTransfer = defineStore('moneyTransfer', () => {
	const operationStore = operationModel();
	const loading = ref<boolean>(false);

	async function transfer(newTransfer: MoneyTransferType) {
		loading.value = true;

		try {
			await testFetching(1500);
			await operationStore.getOperationList();

			operationStore.operations.push({
				id: uuid(),
				depositeId: newTransfer.depositeTo,
				name: 'Перевод',
				type: 'Доход',
				sum: newTransfer.sum,
				category: 'Переводы',
				currency: Currency.RUB,
			});

			operationStore.operations.push({
				id: uuid(),
				depositeId: newTransfer.depositeFrom,
				name: 'Перевод',
				type: 'Расход',
				sum: newTransfer.sum,
				category: 'Переводы',
				currency: Currency.RUB,
			});
		} catch (e) {
			console.log(`Error on money transfer: ${e}`);
		} finally {
			loading.value = false;
		}
	}

	return {
		loading,
		transfer,
	};
});
