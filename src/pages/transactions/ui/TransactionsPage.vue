<script setup lang="ts">
import { CategoryList } from '@/entities/category';
import type { CategoryType } from '@/entities/category/model/categoryModel';
import { operationModel } from '@/entities/operation';
import { NewDepositeModal } from '@/widgets/newDepositeModal';
import NewMoneyTransferModal from '@/widgets/newMoneyTransferModal/ui/NewMoneyTransferModal.vue';
import { NewOperationModal } from '@/widgets/newOperationModal';
import OperationSheet from '@/widgets/operationSheet/ui/OperationSheet.vue';
import { computed, ref } from 'vue';

const operationStore = operationModel();

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
		<OperationSheet :transactions="transactions"></OperationSheet>
	</div>
</template>
