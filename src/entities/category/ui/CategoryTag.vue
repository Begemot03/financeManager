<script setup lang="ts">
import type { OperationEventType } from '@/entities/operation';
import { computed } from 'vue';

const props = defineProps<{
	name: string;
	type: OperationEventType;
}>();

const severity = computed(() =>
	props.type === 'Доход' ? 'primary' : 'danger'
);
</script>
<template>
	<Tag
		:value="props.name"
		:severity="severity"
	></Tag>
</template>
