<script setup lang="ts">
import { CategoryList } from '@/entities/category';
import type { CategoryType } from '@/entities/category/model/categoryModel';
import { operationModel } from '@/entities/operation';
import { OperationSheet } from '@/widgets/operationSheet';
import { computed, ref } from 'vue';

const operationStore = operationModel();

const selectedCategories = ref<CategoryType[]>([]);
const incomes = computed(() =>
	selectedCategories.value.length == 0
		? operationStore.operationsByType('Доход')
		: operationStore
				.operationsByType('Доход')
				.filter((op) =>
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
		<OperationSheet :transactions="incomes"></OperationSheet>
	</div>
</template>
