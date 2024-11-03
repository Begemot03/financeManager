<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { operationModel, type OperationType } from '@/entities/operation';
import type { SelectChangeEvent } from 'primevue/select';

const operationStore = operationModel();

const sortkey = ref(null);
const sortOrder = ref(1);
const sortField = ref('');
const sortOptions = [
	{ label: 'Новее', value: '!id' },
	{ label: 'Старее', value: 'id' },
];

const onFilterChange = (e: SelectChangeEvent) => {
	const value = e.value.value;
	const sortValue = e.value;

	if (value.indexOf('!') == 0) {
		sortOrder.value = -1;
		sortField.value = value.substring(1, value.lenght);
	} else {
		sortOrder.value = 1;
		sortField.value = value;
	}
	sortkey.value = sortValue;
};

onMounted(() => {
	operationStore.getOperationList();
});
</script>

<template>
	<DataView
		:value="operationStore.operations"
		:sortOrder="sortOrder"
		:sortField="sortField"
		dataKey="id"
	>
		<template #header>
			<Select
				v-model="sortkey"
				:options="sortOptions"
				optionLabel="label"
				placeholder="Сортировать по"
				@change="onFilterChange"
			></Select>
		</template>
		<template #list="items">
			<div class="flex flex-col">
				<div
					v-for="(item, index) in items.items as OperationType[]"
					:key="index"
				>
					<div
						class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
						:class="{
							'border-t border-surface-200 dark:border-surface-700':
								index !== 0,
						}"
					>
						<div>{{ item.name }}</div>
						<Chip :label="item.category"></Chip>
					</div>
				</div>
			</div>
		</template>
		<template #empty>Лист пустой</template>
	</DataView>
</template>
