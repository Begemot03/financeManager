<script setup lang="ts">
import { defineProps } from "vue";
import type { IDeposite } from "@/entities/deposite";

const props = defineProps<{
    deposite: IDeposite
}>();

</script>

<template>
    <v-card>
        <v-card-title>{{ props.deposite.name }} - {{ props.deposite.startBalance }} {{ props.deposite.currency }}</v-card-title>
        <v-card-subtitle>{{ props.deposite.comment }}</v-card-subtitle>
    </v-card>
</template>

<style scoped>
    
</style>