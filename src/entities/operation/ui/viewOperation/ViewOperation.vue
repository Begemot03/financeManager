<script setup lang="ts">
import type { Operation } from "../../model";

const props = defineProps<{
	data: Operation;
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
