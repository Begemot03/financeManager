<script setup lang="ts">
import { CategoryList, CategoryTag } from '@/entities/category';
import type { CategoryType } from '@/entities/category/model/categoryModel';
import { depositeModel } from '@/entities/deposite';
import { operationModel } from '@/entities/operation';
import { computed, ref } from 'vue';

const operationStore = operationModel();
const depositeStore = depositeModel();

const selectedCategories = ref<CategoryType[]>([]);
const incomes = computed(() =>
	selectedCategories.value.length == 0
		? operationStore.incomes
		: operationStore.incomes.filter((op) =>
				selectedCategories.value.some((cat) => cat.name == op.category)
			)
);
</script>

<template>
	<div class="flex gap-4 flex-col md:flex-row items-start">
		<div class="flex gap-2 flex-col">
			<span
				class="border border-surface-700 rounded bg-primary p-4 font-bold text-xl"
			>
				Общая сумма: {{ operationStore.incomesTotal }}
			</span>
			<CategoryList v-model:selected="selectedCategories"></CategoryList>
		</div>
		<DataTable
			:value="incomes"
			removable-sort
			class="w-full"
		>
			<template #header>
				<span class="font-bold text-xl">Доходы</span>
			</template>
			<Column
				field="name"
				header="Название операции"
			></Column>
			<Column
				field="sum"
				header="Сумма операции"
				sortable
			></Column>
			<Column
				field="currency"
				header="Валюта"
			></Column>
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
