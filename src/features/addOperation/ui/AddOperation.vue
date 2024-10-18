<script setup lang="ts">
import { addOperationModel } from "../model";

const addOperationStore = addOperationModel();
</script>

<template>
	<v-btn :loading="addOperationStore.loading">
		<slot />
	</v-btn>
</template>
