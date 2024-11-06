<script setup lang="ts">
import { depositeModel } from '@/entities/deposite';
import type { OperationType } from '@/entities/operation';
import { CategoryTag } from '@/entities/category';

const props = defineProps<{
	transactions: OperationType[];
}>();

const depositeStore = depositeModel();
</script>
<template>
	<DataTable
		:value="props.transactions"
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
				<span>{{
					(slotProps.data.creationDate as Date).toLocaleDateString('ru-RU')
				}}</span>
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
</template>
