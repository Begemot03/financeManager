<script setup lang="ts">
import { useAddOperationStore } from '../model/addOperation';

const props = defineProps<{
	label: string;
}>();

const addOperationStore = useAddOperationStore();
</script>

<template>
	<Button
		v-bind="props"
		:loading="addOperationStore.loading"
		severity="contrast"
		type="submit"
	/>
</template>
