<script setup lang="ts">
import { CategoryList, CategoryTag } from '@/entities/category';
import type { CategoryType } from '@/entities/category/model/categoryModel';
import { depositeModel } from '@/entities/deposite';
import { operationModel } from '@/entities/operation';
import { NewDepositeModal } from '@/widgets/newDepositeModal';
import NewMoneyTransferModal from '@/widgets/newMoneyTransferModal/ui/NewMoneyTransferModal.vue';
import { NewOperationModal } from '@/widgets/newOperationModal';
import { computed, ref } from 'vue';

const operationStore = operationModel();
const depositeStore = depositeModel();

const selectedCategories = ref<CategoryType[]>([]);
const transactions = computed(() =>
	selectedCategories.value.length == 0
		? operationStore.operations
		: operationStore.operations.filter((op) =>
				selectedCategories.value.some((cat) => cat.name == op.category)
			)
);
</script>

<template>
	<div class="flex gap-4 flex-col md:flex-row items-start">
		<div class="flex gap-2 flex-col">
			<NewOperationModal />
			<NewDepositeModal />
			<NewMoneyTransferModal />
			<CategoryList v-model:selected="selectedCategories" />
		</div>
		<DataTable
			:value="transactions"
			removable-sort
			class="w-full"
		>
			<template #header>
				<span class="font-bold text-xl">Расходы</span>
			</template>
			<Column
				field="name"
				header="Название операции"
			></Column>
			<Column
				field="creationDate"
				header="Дата"
			>
				<template #body="slotProps">
					<span>{{ (slotProps.data.creationDate as Date).toLocaleDateString("ru-RU") }}</span>
				</template>
			</Column>
			<Column
				field="sum"
				header="Сумма операции"
				sortable
			>
				<template #body="slotProps">
					<span
						:class="{
							'text-primary': slotProps.data.type == 'Доход',
							'text-red-700': slotProps.data.type != 'Доход',
						}"
						>{{
							`${slotProps.data.type == 'Доход' ? '+' : '-'} ${slotProps.data.sum} RUB`
						}}</span
					>
				</template>
			</Column>
			<Column
				field="category"
				header="Категория"
			>
				<template #body="slotProps">
					<CategoryTag
						:name="slotProps.data.category"
						:type="slotProps.data.type"
					></CategoryTag>
				</template>
			</Column>
			<Column
				field="depositeId"
				header="Депозит"
			>
				<template #body="slotProps">
					<div>
						{{
							depositeStore.deposites.find(
								(d) => d.id === slotProps.data.depositeId
							)?.name
						}}
					</div>
				</template>
			</Column>
			<template #empty>
				<div class="font-bold text-center">Вы пока не тратили</div>
			</template>
		</DataTable>
	</div>
</template>
