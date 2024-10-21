<script setup lang="ts">
import Button from 'primevue/button';
import { addDepositeModel } from '../model';

const props = defineProps<{
	label: string;
}>();

const addDepositeStore = addDepositeModel();
</script>

<template>
	<Button
		:label="props.label"
		:loading="addDepositeStore.loading"
	/>
</template>
