<script setup lang="ts">
import { CategoryList } from '@/entities/category';
import type { CategoryType } from '@/entities/category/model/categoryModel';
import { operationModel } from '@/entities/operation';
import { OperationSheet } from '@/widgets/operationSheet';
import { TransactionByCategoryChart } from '@/widgets/transactionByCategoryChart';
import { TransactionByDateChart } from '@/widgets/transactionByDateChart';
import { computed, ref } from 'vue';

const operationStore = operationModel();

const selectedCategories = ref<CategoryType[]>([]);
const expenses = computed(() =>
	selectedCategories.value.length == 0
		? operationStore.operationsByType('Расход')
		: operationStore
				.operationsByType('Расход')
				.filter((op) =>
					selectedCategories.value.some((cat) => cat.name == op.category)
				)
);
</script>

<template>
	<div class="flex gap-4 flex-col md:flex-row items-start">
		<div class="flex gap-2 flex-col">
			<span
				class="border border-surface-700 rounded bg-red-900 p-4 font-bold text-xl"
			>
				Общая сумма: {{ operationStore.expensesTotal }}
			</span>
			<CategoryList v-model:selected="selectedCategories"></CategoryList>
		</div>

		<div class="flex gap-2 flex-col flex-1">
			<TransactionByDateChart
				:transactions="expenses"
				barColor="#7f1d1d"
				textColor="#fff"
				seriesName="Траты по дате"
			/>
			<TransactionByCategoryChart
				:transactions="expenses"
				barColor="#7f1d1d"
				textColor="#fff"
				seriesName="Траты по категориям"
			/>
			<OperationSheet :transactions="expenses" />
		</div>
	</div>
</template>
