<script setup lang="ts">
import { onMounted } from 'vue';
import { operationModel } from '@/entities/operation';

//TODO: МБ надо вынести логику (есть composable useFetchList)
const operationStore = operationModel();

onMounted(() => {
	operationStore.getOperationList();
});
</script>

<template>
	<DataView
		:value="operationStore.operations"
		dataKey="id"
	>
		<template #list="slotProps">
			<div class="flex flex-col">
				<div
					v-for="(item, index) in slotProps.items"
					:key="index"
				>
					<div
						class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
						:class="{
							'border-t border-surface-200 dark:border-surface-700':
								index !== 0,
						}"
					>
						{{ item.name }}
					</div>
				</div>
			</div>
		</template>
	</DataView>
</template>
