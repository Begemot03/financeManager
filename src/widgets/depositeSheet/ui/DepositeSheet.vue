<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { depositeModel } from '@/entities/deposite';
import { currencyIcon } from '@/shared/lib/currency';
import { EmptyListItem } from '@/shared/ui/emptyListItem';

//TODO: МБ надо вынести логику (есть composable useFetchList)
const depositeStore = depositeModel();

const isDepositesEmpty = computed(() => depositeStore.deposites.length == 0);
const showEmptyListElement = computed(
	() => isDepositesEmpty.value && !depositeStore.loading
);

onMounted(() => {
	depositeStore.getDepositeList();
});
</script>

<template>
	<Panel header="Депозиты">
		<template v-if="!isDepositesEmpty">
			<div
				v-for="{
					id,
					name,
					comment,
					startBalance,
					currency,
				} in depositeStore.deposites"
				:key="id"
			>
				{{ `${name} ${comment} ${startBalance}` }}
				<i
					class="pi"
					:class="currencyIcon[currency]"
				></i>
			</div>
		</template>
		<template v-else-if="showEmptyListElement">
			<EmptyListItem />
		</template>
		<ProgressSpinner v-if="depositeStore.loading" />
	</Panel>
</template>
