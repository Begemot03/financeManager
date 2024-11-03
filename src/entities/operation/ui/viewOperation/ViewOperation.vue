<script setup lang="ts">
import type { OperationType } from '@/entities/operation/model/operation';

const props = defineProps<{
	data: OperationType;
}>();
</script>

<template>
	<div>{{ props.data.sum }}</div>
	<div>{{ props.data.creationDate }}</div>
	<div>{{ props.data.depositeId }}</div>
	<div>{{ props.data.type }}</div>
	<div>{{ props.data.category }}</div>
	<div>{{ props.data.comment }}</div>
</template>

<style scoped></style>
