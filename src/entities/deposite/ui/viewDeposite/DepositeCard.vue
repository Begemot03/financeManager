<script setup lang="ts">
import { defineProps } from 'vue';
import type { Deposite } from '@/entities/deposite';
import Card from 'primevue/card';

const props = defineProps<{
	deposite: Deposite;
}>();
</script>

<template>
	<Card>
		<template #title>
			{{ props.deposite.name }} - {{ props.deposite.startBalance }}
			{{ props.deposite.currency }}
		</template #content>
		<template #content>
			{{ props.deposite.comment }}
		</template>
	</Card>
</template>