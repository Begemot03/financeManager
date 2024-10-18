<script setup lang="ts">
import { defineProps } from "vue";
import type { Deposite } from "@/entities/deposite";

const props = defineProps<{
	deposite: Deposite;
}>();
</script>

<template>
	<v-card>
		<v-card-title>
			{{ props.deposite.name }} - {{ props.deposite.startBalance }}
			{{ props.deposite.currency }}
		</v-card-title>
		<v-card-subtitle>{{ props.deposite.comment }}</v-card-subtitle>
	</v-card>
</template>
