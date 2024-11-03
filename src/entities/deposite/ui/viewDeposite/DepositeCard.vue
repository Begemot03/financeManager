<script setup lang="ts">
import { defineProps } from 'vue';
import type { DepositeType } from '@/entities/deposite';
import Card from 'primevue/card';

const props = defineProps<{
	deposite: DepositeType;
}>();
</script>

<template>
	<Card>
		<template #header>
			{{ props.deposite.name }} - {{ props.deposite.startBalance }}
			{{ props.deposite.currency }}
		</template>
		<template #content>
			{{ props.deposite.comment }}
		</template>
	</Card>
</template>
