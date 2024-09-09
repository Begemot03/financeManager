<script setup lang="ts">
import { defineProps } from "vue";
import type { IDeposite } from "@/entities/deposite";

const props = defineProps<{
    data: IDeposite
}>();

</script>

<template>
    <div>
        <div>{{ props.data.id }}</div>
        <div>{{ props.data.startBalance }}</div>
        <div>{{ props.data.type }}</div>
        <div>{{ props.data.currency }}</div>
        <div>{{ props.data.comment }}</div>
    </div>  
</template>

<style scoped>
    
</style>