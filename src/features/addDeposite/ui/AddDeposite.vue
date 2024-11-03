<script setup lang="ts">
import Button from 'primevue/button';
import { useAddDepositeStore } from '../model/addDeposite';

const props = defineProps<{
	label: string;
}>();

const addDepositeStore = useAddDepositeStore();
</script>

<template>
	<Button
		:label="props.label"
		:loading="addDepositeStore.loading"
		severity="contrast"
		type="submit"
	/>
</template>
