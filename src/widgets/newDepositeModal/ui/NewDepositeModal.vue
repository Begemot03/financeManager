<script setup lang="ts">
import { BaseModal } from '@/shared/ui/baseModal';
import { newDepositeModalModel } from '../model';
import { AddDeposite, addDepositeModel } from '@/features/addDeposite';
import type { Deposite } from '@/entities/deposite';

const addDepositeStore = addDepositeModel();
const newDepositeModalStore = newDepositeModalModel();

const submit = newDepositeModalStore.handleSubmit(async (values) => {
	await addDepositeStore.addDeposite(values as Deposite);
	newDepositeModalStore.handleReset();
	newDepositeModalStore.close();
});
</script>

<template>
	<Button
		label="Создание счета"
		@click="newDepositeModalStore.open"
	/>
	<BaseModal
		v-model:visible="newDepositeModalStore.visible"
		header="Новый счет"
		:persistent="true"
	>
		<form @submit.prevent="submit">
			<div class="mb-4">
				<FloatLabel variant="on">
					<InputText
						v-model.trim="newDepositeModalStore.name.value"
						id="username"
						class="w-full"
						type="text"
					/>
					<label for="username">Название счета</label>
				</FloatLabel>
			</div>
			<div class="flex gap-4 mb-4">
				<FloatLabel
					variant="on"
					class="w-full"
				>
					<InputNumber
						v-model="newDepositeModalStore.startBalance.value"
						class="inputnumbers"
						id="startbalance"
						inputId="integeronly"
					/>
					<label for="startbalance">Начальный баланс</label>
				</FloatLabel>
				<Select
					v-model="newDepositeModalStore.currency.value"
					:options="['RUB', 'USD']"
					placeholder="Валюта"
				/>
			</div>
			<div class="mb-4">
				<Select
					v-model="newDepositeModalStore.type.value"
					:options="['Наличные', 'Кредитка']"
					placeholder="Тип счета"
					class="w-full"
				/>
			</div>
			<div class="mb-8">
				<FloatLabel
					variant="on"
					class="w-full"
				>
					<Textarea
						v-model.trim="newDepositeModalStore.comment.value"
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
					@click="newDepositeModalStore.close"
				/>
				<AddDeposite
					label="Добавить"
					color="blue"
					@click="submit"
				/>
			</div>
		</form>
	</BaseModal>
</template>
