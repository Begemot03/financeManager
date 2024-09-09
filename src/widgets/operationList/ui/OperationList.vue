<script setup>
import { useOperationStore, ViewOperation } from '@/entities/operation';


const operationStore = useOperationStore();

</script>

<template>
    <div>
        <ViewOperation
            v-for="operation in operationStore.operations"
            :data="operation"
        />
    </div>
</template>

<style scoped>
    
</style>