<script setup lang="ts">
import Button from 'primevue/button';
import { addDepositeModel } from '../model';

const addDepositeStore = addDepositeModel();
</script>

<template>
	<Button :loading="addDepositeStore.loading">
		<slot />
	</Button>
</template>
