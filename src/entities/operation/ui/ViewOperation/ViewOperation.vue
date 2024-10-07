<script setup lang="ts">
import type { IOperation } from '../../model';

const props = defineProps<{
    data: IOperation
}>();

</script>

<template>
    <div>{{ props.data.sum }}</div>
    <div>{{ props.data.date }}</div>
    <div>{{ props.data.depositeId }}</div>
    <div>{{ props.data.type }}</div>
    <div>{{ props.data.category }}</div>
    <div>{{ props.data.meta }}</div>
    <div>{{ props.data.comment }}</div>
</template>

<style scoped>
    
</style>