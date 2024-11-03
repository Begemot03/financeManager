<script setup lang="ts">
import { useNewDepositeModal } from '../model/newDepositeModal';
import { AddDeposite, addDepositeModel } from '@/features/addDeposite';
import type { DepositeType } from '@/entities/deposite';

const addDepositeStore = addDepositeModel();
const newDepositeModalStore = useNewDepositeModal();

const submit = newDepositeModalStore.handleSubmit(async (values) => {
	await addDepositeStore.addDeposite(values as DepositeType);
	newDepositeModalStore.handleReset();
	newDepositeModalStore.close();
});
</script>

<template>
	<Button
		label="Добавить счет"
		@click="newDepositeModalStore.open"
		severity="secondary"
	/>
	<Dialog
		v-model:visible="newDepositeModalStore.visible"
		header="Новый счет"
		class="w-96"
		pt:content:class="!overflow-y-visible"
		modal
	>
		<form @submit.prevent="submit">
			<div class="mb-4">
				<FloatLabel variant="on">
					<InputText
						v-model.trim="newDepositeModalStore.name.value"
						id="newdeposite__name"
						class="w-full"
					/>
					<label for="newdeposite__name">Название счета</label>
				</FloatLabel>
			</div>
			<div class="flex gap-2 mb-4">
				<FloatLabel
					variant="on"
					class="w-full"
				>
					<InputNumber
						v-model="newDepositeModalStore.startBalance.value"
						id="newdeposite__startbalance"
						class="inputnumbers"
						inputId="integeronly"
					/>
					<label for="newdeposite__startbalance">Начальный баланс</label>
				</FloatLabel>
			</div>
			<div class="mb-8">
				<FloatLabel variant="on">
					<Textarea
						v-model.trim="newDepositeModalStore.comment.value"
						id="newdeposite__comment"
						class="w-full"
					/>
					<label for="newdeposite__comment">Комментарий</label>
				</FloatLabel>
			</div>
			<div class="flex justify-end gap-2">
				<Button
					label="Закрыть"
					severity="secondary"
					@click="newDepositeModalStore.close"
				/>
				<AddDeposite label="Добавить" />
			</div>
		</form>
	</Dialog>
</template>
