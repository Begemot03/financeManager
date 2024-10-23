<script setup lang="ts">
import { addOperationModel } from '../model';

const props = defineProps<{
	label: string;
}>();

const addOperationStore = addOperationModel();
</script>

<template>
	<Button
		v-bind="props"
		:loading="addOperationStore.loading"
		type="submit"
	/>
</template>
