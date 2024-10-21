<script setup lang="ts">
import { computed, onMounted, watch } from 'vue';
import { operationModel } from '@/entities/operation';
import { currencyIcon } from '@/shared/lib/currency';
import { SpinLoader } from '@/shared/ui/spinLoader';
import { EmptyListItem } from '@/shared/ui/emptyListItem';

//TODO: МБ надо вынести логику (есть composable useFetchList)
const operationStore = operationModel();

const isOperationsEmpty = computed(() => operationStore.operations.length == 0);
const showEmptyListElement = computed(
	() => isOperationsEmpty.value && !operationStore.loading
);

onMounted(() => {
	operationStore.getOperationList();
});
</script>

<template>
	<v-card max-width="400">
		<v-toolbar title="Операции" />
		<v-list>
			<template v-if="!isOperationsEmpty">
				<v-list-item
					v-for="{
						id,
						type,
						sum,
						currency,
						category,
						comment,
					} in operationStore.operations"
					:key="id"
					:title="category"
					:subtitle="comment"
					density="compact"
					:class="type == 'Доход' ? 'bg-teal' : 'bg-red'"
				>
					<template #append>
						<div>{{ sum }}</div>
						<v-icon :icon="currencyIcon[currency]" />
					</template>
				</v-list-item>
			</template>
			<template v-else-if="showEmptyListElement">
				<EmptyListItem />
			</template>
			<SpinLoader :loading="operationStore.loading" />
		</v-list>
	</v-card>
</template>
