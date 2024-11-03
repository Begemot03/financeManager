<script setup lang="ts">
import { MoneyTransfer, moneyTransferModel } from '@/features/moneyTransfer';
import { useNewMoneyTransferModal } from '../model/newMoneyTransferModal';
import type { MoneyTransferType } from '@/features/moneyTransfer/model/moneyTransfer';

const newMoneyTransferStore = useNewMoneyTransferModal();
const moneyTransfer = moneyTransferModel();

const submit = newMoneyTransferStore.handleSubmit(async (values) => {
	await moneyTransfer.transfer(values as MoneyTransferType);
	newMoneyTransferStore.handleReset();
	newMoneyTransferStore.close();
});
</script>

<template>
	<Button
		label="Перевод между счетами"
		@click="newMoneyTransferStore.open"
		severity="secondary"
	/>
	<Dialog
		v-model:visible="newMoneyTransferStore.visible"
		header="Перевод"
		class="w-96"
		pt:content:class="!overflow-y-visible"
		modal
	>
		<form @submit.prevent="submit">
			<div class="flex gap-2 mb-4">
				<Select
					v-model="newMoneyTransferStore.depositeFrom.value"
					:options="newMoneyTransferStore.listOfDeposites"
					optionLabel="name"
					optionValue="id"
					placeholder="Откуда"
					class="w-full"
				/>
				<Select
					v-model="newMoneyTransferStore.depositeTo.value"
					:options="newMoneyTransferStore.listOfDeposites"
					optionLabel="name"
					optionValue="id"
					placeholder="Куда"
					class="w-full"
				/>
			</div>
			<div class="mb-4">
				<FloatLabel variant="on">
					<InputNumber
						v-model.trim="newMoneyTransferStore.sum.value"
						id="sum"
						class="w-full"
						inputId="integeronly"
					/>
					<label for="sum">Сумма перевода</label>
				</FloatLabel>
			</div>
			<div class="flex justify-end gap-2">
				<Button
					label="Закрыть"
					severity="secondary"
					@click="newMoneyTransferStore.close"
				/>
				<MoneyTransfer label="Перевести" />
			</div>
		</form>
	</Dialog>
</template>
