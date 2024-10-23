<script setup lang="ts">
import { newOperationModalModel } from '../model';
import { AddOperation, addOperationModel } from '@/features/addOperation';
import type { Operation } from '@/entities/operation';

const newOperationModalStore = newOperationModalModel();
const addOperationStore = addOperationModel();

const submit = newOperationModalStore.handleSubmit(async (values) => {
	await addOperationStore.addOperation(values as Operation);
	newOperationModalStore.handleReset();
	newOperationModalStore.close();
});
</script>

<template>
	<Button
		label="Новая операция"
		@click="newOperationModalStore.open"
	/>
	<Dialog
		v-model:visible="newOperationModalStore.visible"
		header="Новая операция"
		class="w-96"
		pt:content:class="!overflow-y-visible"
		modal
	>
		<form @submit.prevent="submit">
			<div class="mb-4">
				<FloatLabel variant="on">
					<InputText
						v-model.trim="newOperationModalStore.name.value"
						id="name"
						class="w-full"
					/>
					<label for="name">Название операции</label>
				</FloatLabel>
			</div>
			<div class="flex gap-2 mb-4">
				<FloatLabel
					variant="on"
					class="w-full"
				>
					<InputNumber
						v-model="newOperationModalStore.sum.value"
						id="sum"
						class="inputnumbers"
						inputId="integeronly"
					/>
					<label for="sum">Сумма операции</label>
				</FloatLabel>
				<Select
					v-model="newOperationModalStore.currency.value"
					:options="['RUB', 'USD']"
					placeholder="Валюта"
				/>
			</div>
			<div class="mb-4 flex gap-2">
				<Select
					v-model="newOperationModalStore.depositeId.value"
					:options="newOperationModalStore.listOfDeposites"
					optionLabel="name"
					optionValue="id"
					placeholder="Счет списания"
					class="w-full"
				/>
				<Select
					v-model="newOperationModalStore.type.value"
					:options="['Доход', 'Расход']"
					placeholder="Тип операции"
				/>
			</div>
			<div class="mb-4">
				<Select
					v-model="newOperationModalStore.category.value"
					:options="['Еда', 'Развлечения']"
					placeholder="Категория"
					class="w-full"
				/>
			</div>
			<div class="mb-8">
				<FloatLabel variant="on">
					<Textarea
						v-model.trim="newOperationModalStore.comment.value"
						id="comment"
						class="w-full"
					/>
					<label for="comment">Комментарий</label>
				</FloatLabel>
			</div>
			<div class="flex justify-end gap-2">
				<Button
					label="Закрыть"
					severity="secondary"
					@click="newOperationModalStore.close"
				/>
				<AddOperation label="Добавить" />
			</div>
		</form>
	</Dialog>
</template>
