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
				<InputText
					type="text"
					v-model.trim="newDepositeModalStore.name.value"
				/>
			</div>
			<div class="grid gird-col-2 gap-4"> 
				<InputNumber
					v-model="newDepositeModalStore.startBalance.value"
					inputId="integeronly"
				/>
				<InputText
					type="text"
					v-model.trim="newDepositeModalStore.name.value"
				/>
			</div>
			<div class="mb-4"> 
				
			</div>
			<v-card
				title="Новый счет"
				rounded
			>
				<v-card-text>
					<v-row dense>
						<v-col cols="12">
							
						</v-col>
						<v-col cols="8">
							<v-text-field
								v-model.number="newDepositeModalStore.startBalance.value"
								:error-messages="
									newDepositeModalStore.startBalance.errorMessage
								"
								label="Начальный баланс"
								variant="outlined"
							/>
						</v-col>
						<v-col cols="4">
							<v-select
								v-model="newDepositeModalStore.currency.value"
								:error-messages="newDepositeModalStore.currency.errorMessage"
								:items="['RUB', 'USD']"
								label="Валюта"
								variant="outlined"
							/>
						</v-col>
						<v-col cols="12">
							<v-select
								v-model="newDepositeModalStore.type.value"
								:error-messages="newDepositeModalStore.type.errorMessage"
								:items="['Наличные', 'Кредитка']"
								label="Тип счета"
								variant="outlined"
							/>
						</v-col>
						<v-col cols="12">
							<v-textarea
								v-model.trim="newDepositeModalStore.comment.value"
								label="Комментарий"
								variant="outlined"
							/>
						</v-col>
					</v-row>
				</v-card-text>
				<v-card-actions>
					<AddDeposite
						variant="tonal"
						color="blue"
						type="submit"
					>
						Добавить
					</AddDeposite>
					<v-btn
						text="Отмена"
						variant="tonal"
						@click="newDepositeModalStore.close"
					/>
				</v-card-actions>
			</v-card>
		</form>
	</BaseModal>
</template>
