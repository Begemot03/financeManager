<script setup lang="ts">
import { moneyTransferModel } from '@/features/moneyTransfer';

const moneyTransferStore = moneyTransferModel();
const props = defineProps<{
	label: string;
}>();
</script>

<template>
	<Button
		v-bind="props"
		:loading="moneyTransferStore.loading"
		severity="contrast"
		type="submit"
	/>
</template>
