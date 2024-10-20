<script setup lang="ts">
import Button from 'primevue/button';
import { addOperationModel } from '../model';

const addOperationStore = addOperationModel();
</script>

<template>
	<Button :loading="addOperationStore.loading">
		<slot />
	</Button>
</template>
